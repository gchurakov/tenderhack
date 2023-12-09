from flask import (
    Blueprint, request, current_app, jsonify, abort, Response, send_file
)
from .models.core import Tender
from .db import engine, db_session, Base

bp = Blueprint('tender', __name__, url_prefix='/api')


@bp.route('/tenders', methods=['GET'])
def get_tenders():
    res = Tender.query.all()
    return f"Here's your tender, Sir: \n {res}", 200


@bp.route('/add_tender', methods=['POST'])
def add_first_tender():
    obj = Tender(1, "wow", 123)
    db_session.add(obj)
    db_session.commit()
    return f"Added {obj}", 200


@bp.route('/delete_tender', methods=['DELETE'])
def delete_tender():
    obj = Tender.query.filter_by(id=1).first()
    db_session.query(Tender).filter(Tender.id == 1).delete()
    db_session.commit()
    return f"Deleted {obj}", 200
