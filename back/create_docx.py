from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

# counter of report and contract
n_report = 1
n_contract = 1

def create_changes_report(changes:list, path:str='', *args, **kwargs) -> str:
    'create changes report -> output filename'
    global n

    doc = Document()

    h1 = doc.add_heading('ПРОТОКОЛ РАЗНОГЛАСИЙ', level=1)
    h1.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    for run in h1.runs:
        run.bold = True
        run.font.color.rgb = RGBColor(0, 0, 0)

    h1_add = doc.add_paragraph('к договору поставки № 3879789 от 18 сентября 2023 года')
    h1_add.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    for run in h1_add.runs:
        run.bold = True

    city_date_paragraph = doc.add_paragraph()
    city_date_paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT
    city_date_paragraph.add_run('г.\xa0Пермь')
    city_date_paragraph.add_run('\t\t\t\t\t\t\t\t\t«20»\xa0октября\xa02023\xa0года').alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT

    # TODO fill input data f-str
    doc.add_paragraph('\tОбщество с ограниченной ответственностью «ООО Ромашка», именуемое в дальнейшем «Заказчик», '
                      'в лице директора Иванова Ивана Ивановича, действующего на основании Устава, с одной стороны,\n '
                      '\tОбщество с ограниченной ответственностью «ООО Одуванчик», именуемое в дальнейшем «Поставщик», '
                      'в лице директора Петра Петровича Петрова, действующего на основании Устава, с другой стороны\n'
                      '\tсоставили настоящий протокол разногласий к договору поставки  № 43687 от 29.09.2023 года о нижеследующем:'
                      ).alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    table_data = [['Пункт договора', 'Текущая версия', 'Предложенные изменения']] + changes
    changes_table = doc.add_table(rows=len(table_data), cols=3)
    # changes_table.autofit = False
    changes_table.style = 'Table Grid'
    changes_table.columns[0].width = Pt(30)
    changes_table.columns[0].width = Pt(400)
    changes_table.columns[1].width = Pt(400)

    for r in range(len(table_data)):
        for c in range(len(table_data[0])):
            changes_table.cell(r, c).text = table_data[r][c]

    # Add the signature section
    doc.add_paragraph(
        '\n\t1. Настоящий Протокол разногласий составлен в двух экземплярах, имеющий одинаковую юридическую силу '
        'для обеих сторон.').alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    # Add the signature lines
    signature_table = doc.add_table(rows=1, cols=2)
    # signature_table.autofit = False
    signature_table.style = 'Table Grid'
    signature_table.columns[0].width = Pt(415)
    signature_table.columns[1].width = Pt(415)

    # TODO fill supplier and orderer f-str
    signature_table.cell(0, 0).text = 'ЗАКАЗЧИК\nООО «Ромашка»\nЮридический и почтовый адрес: 777000, ' \
                                      'г. Москва, ул. Московская, 35 офис 3\nИНН 5655566556\nКПП 232658888\nОГРН 1205900031501\n' \
                                      'Директор\n__________________________/И.И. Иванов/\nм.п.'

    signature_table.cell(0, 1).text = 'ПОДРЯДЧИК\nООО «Одуванчик»\n614107, г. Пермь, ул. Пермская, д.95, оф.294\nОГРН 1115905006601\n' \
                                   'ИНН 5655777777\nКПП 232658888\nДиректор\n__________________________/П.П. Петров/\nм.п.'

    sections = doc.sections
    for section in sections:
        section.top_margin = Cm(2)
        section.bottom_margin = Cm(2)
        section.left_margin = Cm(3)
        section.right_margin = Cm(1.5)

    # Save the document
    filename = f'{path}changes_report_{n_report}.docx'
    n += 1
    doc.save(filename)

    return filename


def create_contract(path: str = '', **kwargs: dict) -> str:
    'create docx contract from dict with info -> output filename'

    # HERE WILL BE MY CODE {dude}

    filename = f'{path}contract_{n_contract}.docx'
    return filename


# test_changes = [['3.9999.', 'В соответствии с договором', 'Срок оказания услуг составляет 63 календарных дня (не включает Новогодние, '
#                                                      'Рождественские и другие праздничные дни на территории РФ) с момента получения '
#                                                      'предоплаты в размере 15% от суммы Договора.'],
#            ['п.10.2.', 'Заказчик обязан внести предоплату в размере 25%', 'Заказчик обязан внести предоплату в размере 50%'],
#            ['п.1', 'В соответствии с договором', 'Изложено в Приложении №1к настоящему протоколу разногласий Ссылка  на файл']]
# name = create_changes_report(test_changes)
