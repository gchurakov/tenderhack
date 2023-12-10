from flask import Blueprint, request, jsonify
import pickle
import os
from .models.core import User
from .db import db_session



@bp.route('/create_user_from_form', methods=['POST'])
def create_user_from_form():
    if request.method == 'POST':
        data = request.get_json(silent=True)

        # data = {"data": { "contract_protocol" : {"name" : bin1,
        #                                           "name" : bin2]},
        #                   "comment" : "COMMENT"},
        #         "decision" : "-1",
        #         "type" : "subject",
        #         "tender_id" = "ID"}

        # create dir for pay load bin files
        dirname = f'/users/{data["data"]["tender_id"]}'
        if not os.path.exists(dirname):
            os.makedirs(dirname)

        for k, v in data["data"]["contract_protocol"].items():
                with open(dirname+k, 'wb') as f:
                    f.write(v)




def proccess_subject(payload):
    data = payload["data"]

    # to  DB
    # massage_from_server

    # send email


def proccess_contract_contract_msg(payload):
    if payload["status"] == "-1":
        # to db

        pass

    else:
        # is accepted or not
        # to db
        pass



        # new_db_entry = User(
        #     username=data['username'], password=hashed_password)
        # print(new_db_entry)
        # db_session.add(new_db_entry)
        # db_session.commit()
        return 'success'
    else:
        return '405 METHOD NOT ALLOWED'
