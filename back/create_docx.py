import os
import re
from docx import Document
from docx2pdf import convert
from datetime import datetime
from core import *
from .db import engine, db_session, Base
from .models.core import Tender, Document, ContractClause
# counter of report and contract
n_report = 1
n_contract = 1


def create_changes_report(changes:dict,  info:dict, path:str='./docx_files/') -> str:
    'create changes report -> output filename'
    global n_report
    doc = Document('./docx_files/changes.docx')
    changes_table = doc.tables[0]

    # fill all changes
    for r in range(len(changes)):
        row = changes_table.add_row()
        for c in range(3):
            row.cells[c].text = changes[r][c]

    kwargs['contract_n'] = n_contract

    for p in doc.paragraphs:
        for k, v in info.items():
            p.text = p.text.replace("{" + k + "}", str(v))

    for table in doc.tables:
        for cell in table._cells:
            for k, v in info.items():
                cell.text = cell.text.replace("{" + k + "}", str(v))

    filename = f'{path}changes_report_{n_report}.docx'
    n_report += 1
    doc.save(filename)
    return filename

def create_contract(info: dict, path_to_save: str = './docx_files/') -> str:
    'create docx contract from dict with info -> output filename'
    global n_contract
    doc = Document('./docx_files/contract.docx')

    info['contract_n'] = n_contract

    for p in doc.paragraphs:
        for k, v in info.items():
            p.text = p.text.replace("{"+k+"}", str(v))

    for table in doc.tables:
        for cell in table._cells:
            for k, v in info.items():
                cell.text = cell.text.replace("{"+k+"}", str(v))

    filename = f'{path_to_save}contract_{n_contract}.docx'
    n_contract += 1
    doc.save(filename)
    return filename


def to_pdf(filename_docx:str, filename_pdf:str = None) -> str:
    'filename .docx -> convert file to .pdf'
    filename_pdf = '.' + ''.join(filename_docx.split('.')[:-1]) + '.pdf' if filename_pdf is None else filename_pdf
    convert(filename_docx,filename_pdf)
    return filename_pdf


def get_tags_from_docx()->list:
    tags = []
    pattern = r'\{([^}]+)\}'
    files = [Document('./docx_files/contract.docx'), Document('./docx_files/changes.docx')]
    for f in files:

        for p in f.paragraphs:
            tags += re.findall(pattern, p.text)

        for t in f.tables:
            for c in t._cells:
                tags += re.findall(pattern, c.text)
    res = ['{' + tag + '}' for tag in set(tags)]
    return res

def get_data_from_db(document:Document):
    'input = tender'
    tags = get_tags_from_docx()
    data = dict()
    supplier_tags = list(filter(lambda tag: 'supplier' in tag, tags))
    contractor_tags = list(filter(lambda tag: 'contractor' in tag, tags))

    # IN PROGRESS

    for tag in supplier_tags:

        # if tag==
        data[tag] = 0


    data['today'] = datetime.now().strftime('%d.%m.%Y')

# TODO clear ROFL before code-review
# test_changes = [['3.9999.', 'В соответствии с договором', 'Срок оказания услуг составляет 63 календарных дня (не включает Новогодние, '
#                                                      'Рождественские и другие праздничные дни на территории РФ) с момента получения '
#                                                      'предоплаты в размере 15% от суммы Договора.'],
#            ['п.10.2.', 'Заказчик обязан внести предоплату в размере 25%', 'Заказчик обязан внести предоплату в размере 50%'],
#            ['п.1', 'В соответствии с договором', 'Изложено в Приложении №1к настоящему протоколу разногласий Ссылка  на файл']]
#
# test_params = {'details' : "На поставку расходного материала (Сетка-слинг)",
#                'place' : "г. Пермь",
#                'supplier' : "ООО Pizdets",
#                'contractor': "ЗАО Ebis",
#                'contract_n': "123"}
#
# report_name = create_changes_report(test_changes, **test_params)
# contract_name = create_contract(**test_params)
# contract_pdf = to_pdf(contract_name)

print(get_tags_from_docx())
