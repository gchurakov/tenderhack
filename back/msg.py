import os
from flask import request, Blueprint, jsonify
from create_docx import contract_fill, contract_change_value, contract_change_punct, contract_change_comment
from chatapp.http_routing import bp
from notifications import send_mail

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

post_json = {
{
    "data": {
            "contract_protocol": { 'document_id': '1',
                                   'tag': 'place',
                                   'value': 'г. Москва',
                                   'comment' : 'НУЛЬ'},
            "comment": "COMMENT"},
        "decision": "1",
        "type": "subject",
        "tender_id": "ID"}
}


# @bp.route('/change_value', methods=['POST'])
def change_value():
    if request.method == 'POST':

        responce = {
            "data": {
                "contract_protocol": {
                    # files here : name: bytes
                },
                "comment": "COMMENT"
            },
            "decision": "1",
            "type": "subject",
            "tender_id": "ID"
        }

        data = request.get_json(silent=True)
        payload = data["data"]["contract_protocol"]

        changes = contract_change_value(payload)

        if changes:
            for file in changes:
                with open(file, 'rb') as f:
                    responce["data"]["contract_protocol"][file] = f.read()
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

dirname = "/back/users/1"

filename = contract_fill(payload, dirname)
print(filename)
