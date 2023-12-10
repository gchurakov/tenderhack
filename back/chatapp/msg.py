import os
import io
from flask import request, Blueprint, jsonify, send_file
from create_docx import contract_fill, contract_change_value, file_to_docx
from notifications import send_email

buffer = io.StringIO()

responce = {
    "data": {
        "contract_protocol": {
            # files here : name: bytes
        },
    },
    "decision": "1",
    "type": "subject",
    "tender_id": "ID"
}

changes_json = {
    "data": {
            "contract_protocol": { 'document_id': '1',
                                   'tag': 'place',
                                   'value': 'г. Москва',
                                   'comment' : 'НУЛЬ'},
            "comment": "COMMENT"},
    "decision": "1",
    "type": "subject",
    "tender_id": "ID"
}

fill_json = {
    "data": {
            "contract_protocol":
                {"numberField": "123",
                 "validityPeriod": {
                     "startDate": "2023-12-28T19:00:00.000Z",
                     "endDate": "2023-12-06T19:00:00.000Z"
                 },
                 "summ": "123",
                 "avans": "213",
                 "financeSource": "123",
                 "ikz": "123",
                 "place": "132",
                 "subject": "312"}
    },
    "decision": "1",
    "type": "subject",
    "tender_id": "1"
}

bp = Blueprint('docx', __name__, url_prefix='/api')

@bp.route('/fill_contract', methods=['POST'])
def fill_contract():
    if request.method == 'POST':

        data = request.get_json(silent=True)
        payload = data["data"]["contract_protocol"]

        changes = contract_fill(payload, dirname=f'/{data["tender_id"]}')  # TODO add filename?

        # TODO add notification to email
        email = "gcd248@mail.ru"
        print(send_email(email, tender_id=data["tender_id"]))
        if changes:
            for file in changes:
                filename = file_to_docx(file)
            return send_file(filename), 200
        else:
            return 'not found', 404

    else:
        return 'not found', 404



@bp.route('/change_value', methods=['POST'])
def change_value():
    if request.method == 'POST':
        data = request.get_json(silent=True)
        payload = data["data"]["contract_protocol"]

        changes = contract_change_value(payload) # TODO add filename?

        # TODO add notification to email
        email = "gcd248@mail.ru"
        print(send_email(email, tender_id=data["tender_id"], comment=data["data"]["comment"]))

        if changes:
            for file in changes:
                filename = file_to_docx(file)
                with open(filename, 'rb') as f:
                    responce["data"]["contract_protocol"][filename] = f.read()
            return responce
        else:
            return 'not found', 404

    else:
        return 'not found', 404



def add_subs(data):
    'add tender directory to ./users'
    # data = {"data": { "contract_protocol" : {"name1" : bin1,
    #                                           "name2" : bin2]},
    #                   "comment" : "COMMENT"},
    #         "decision" : "-1",
    #         "type" : "subject",
    #         "tender_id" = "ID"}

    # create dir for pay load bin files
    dirname = f'/users/{data["data"]["tender_id"]}'
    if not os.path.exists(dirname):
        os.makedirs(dirname)

    filenames = []
    for k, v in data["data"]["contract_protocol"].items():
        filenames.append(dirname+k)
        with open(dirname+k, 'wb') as f:
            f.write(v)

    return dirname, filenames

