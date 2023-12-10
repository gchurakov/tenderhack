import os
from flask import request, Blueprint, jsonify, send_file
from create_docx import contract_fill, contract_change_value, file_to_docx
from notifications import send_email
from constants import EMAIL_RECIPIENT, BASE_CONTRACT_URI, BASE_DISAGREEMENT_URI
import io

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
        "contract_protocol": {'document_id': '1',
                              'tag': 'place',
                              'value': 'г. Москва',
                              'comment': 'НУЛЬ'},
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

        responce = {
            "data": {
                "contract_protocol": {
                    # files here : name: bytes
                }
            },
            "decision": "1",
            "type": "subject",
            "tender_id": "1"
        }

        data = request.get_json(silent=True)
        # Данные для формирования контракта
        payload = data["data"]["contract_protocol"]
        # Получаем номер тендера, чтобы создать папку с номером тендера в /tenders
        tender_id = data["tender_id"]

        formed_file_path = contract_fill(payload, tender_id)

        # Константный получатель
        email = EMAIL_RECIPIENT
        if send_email(email, tender_id=tender_id):
            print("EMAIL: SENT successfully")
        else:
            print("EMAIL: SENT with error")

        if formed_file_path:
            # for file in changes:
            #     filename = file_to_docx(file)
            #     with open(filename, 'rb') as f:
            #         responce["data"]["contract_protocol"][filename] = f.read()
            print(formed_file_path)

            return send_file(formed_file_path, as_attachment=True)
        else:
            return 'bad request'
    else:
        return "bad request"


@bp.route('/get_contract', methods=['GET'])
def get_contract():
    return send_file(BASE_CONTRACT_URI, as_attachment=True)


@bp.route('/get_protocol_new', methods=['GET'])
def get_protocol_new():
    return send_file(BASE_DISAGREEMENT_URI, as_attachment=True)


@bp.route('/change_value', methods=['POST'])
def change_value():
    if request.method == 'POST':

        responce = {
            "data": {
                "contract_protocol": {
                    # files here : name: bytes
                }
            },
            "decision": "1",
            "type": "subject",
            "tender_id": "ID"
        }

        data = request.get_json(silent=True)
        payload = data["data"]["contract_protocol"]

        changes = contract_change_value(payload)  # TODO add filename?

        # Константный получатель
        email = EMAIL_RECIPIENT
        print(send_email(email, tender_id=data["tender_id"], comment=data["data"]["comment"]))

        if changes:
            for file in changes:
                filename = file_to_docx(file)
                with open(filename, 'rb') as f:
                    responce["data"]["contract_protocol"][filename] = f.read()
            return responce
        else:
            return 'bad request'

    else:
        return "bad request"


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
        filenames.append(dirname + k)
        with open(dirname + k, 'wb') as f:
            f.write(v)

    return dirname, filenames

# payload = {"numberField": "1234",
#             "validityPeriod": {
#                 "startDate": "2023-12-06T19:00:00.000Z",
#                 "endDate": "2023-12-20T19:00:00.000Z"
#             },
#             "summ": "1234",
#             "avans": "1234",
#             "financeSource": "1234",
#             "ikz": "1234",
#             "place": "1234",
#             "subject": "1234",
#             "contractProjectFile": {},
#             "attachmentFile": {}
#         }


# filename = contract_fill(payload, dirname)
# print(filename)
