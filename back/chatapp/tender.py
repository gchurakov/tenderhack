from flask import (
    Blueprint, request, current_app, jsonify, abort, Response, send_file
)
from .models.core import Tender, Document
from .db import engine, db_session, Base

bp = Blueprint('tender', __name__, url_prefix='/api')


@bp.route('/tenders', methods=['GET'])
def get_tenders():
    res = Tender.query.all()
    return f"Here's your tender, Sir: \n {res}", 200


@bp.route('/add_tender', methods=['GET'])
def add_first_tender():
    obj = Tender(description="wow", tender_number=123)
    db_session.add(obj)
    db_session.commit()
    return f"Added {obj}", 200


@bp.route('/add_document', methods=['GET'])
def add_document():
    obj = Document(document_name="TestDoc", tender_id=1, document_type=2)
    db_session.add(obj)
    db_session.commit()
    return f"Added {obj}", 200


@bp.route('/delete_tender', methods=['GET'])
def delete_tender():
    obj = Tender.query.filter_by(id=1).first()
    db_session.query(Tender).filter(Tender.id == 1).delete()
    db_session.commit()
    return f"Deleted {obj}", 200


@bp.route('/demo_query_foreign_key', methods=['GET'])
def demo_query_foreign_key():
    # Получаем объект по id
    test_tender = Tender.query.get(1)
    # Получаем список всех документов, которые относятся к этому тендеру
    docs = test_tender.tender_documents
    print(docs)
    # Получаем тендер, к которому привязан данный документ
    tender = docs[0].tender
    print(tender)
    return jsonify([doc.to_dict() for doc in docs]), 200
