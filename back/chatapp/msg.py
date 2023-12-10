import os
from flask import request, Blueprint
from create_docx import contract_fill, contract_change_value, file_to_docx
from notifications import send_email

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
        payload = data["data"]["contract_protocol"]

        changes = contract_fill(payload, dirname=f'/{data["tender_id"]}')  # TODO add filename?

        # TODO add notification to email
        email = "gcd248@mail.ru"
        print(send_email(email, tender_id=data["tender_id"]))

        if changes:
            for file in changes:
                filename = file_to_docx(file)
                with open(filename, 'rb') as f:
                    responce["data"]["contract_protocol"][filename] = f.read()
            return jsonify(responce), 200
        else:
            return 'bad request'

    else:
        return "bad request"



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
        filenames.append(dirname+k)
        with open(dirname+k, 'wb') as f:
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
