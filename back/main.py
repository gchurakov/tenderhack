from db import tables, engines, inspectors
from flask import Flask
from sqlalchemy import select
from sqlalchemy.orm import Session
from create_docx import create_changes_report, create_contract, to_pdf
from notifications import send_mail

app = Flask(__name__)

table = tables['common']['my_table']

@app.route("/")
def hello_world():
    with Session(engines['common']):
        return {'result':[r._mapping for r in select(table.c).select_from(table).all()]}
    return "<p>Hello, World!</p>"
