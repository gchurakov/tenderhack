from passlib.hash import sha256_crypt
from flask import request, Blueprint
from flask_login import login_user, current_user, logout_user
from sqlalchemy import select

from .db import db_session
from .models.core import Tender, User

bp = Blueprint('auth', __name__, url_prefix='/api')


# @bp.route('/', defaults={'path': ''})
# @bp.route('/<path>')
# def index(path):
#     return send_from_directory(app.static_folder, "index.html")


@bp.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        data = request.get_json(silent=True)
        hashed_password = sha256_crypt.hash(data['password'])
        new_db_entry = User(
            username=data['username'], password=hashed_password)
        print(new_db_entry)
        db_session.add(new_db_entry)
        db_session.commit()
        return 'success'
    else:
        return '405 METHOD NOT ALLOWED'


@bp.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json(silent=True)
        print("!!!!!!!!!!!")
        print(data)
        try:
            user = User.query.filter_by(username=data["username"]).first()
            print(user)
            if sha256_crypt.verify(data['password'], user.password):
                login_user(user, remember=False)
                return 'logged in '
            return 'wrong password'
        except AttributeError:
            return 'invalid username'
    else:
        return '405 METHOD NOT ALLOWED'


@bp.route('/validate-previous-session', methods=['POST'])
def validate_previous_session():
    if current_user.is_authenticated:
        return {'status': 'valid',
                'userName': get_username_from_db()}
    return {'status': 'invalid'}


@bp.route('/logout', methods=['POST'])
def logout():
    logout_user()
    return 'logged out'


@bp.route('/get_possible_rooms', methods=['GET'])
def get_possible_rooms():
    possible_rooms = []
    rooms = Tender.query.all()
    for room in rooms:
        possible_rooms.append(room.id)
    return {'data': possible_rooms}


@bp.route('/get_tender_documents', methods=['GET'])
def get_tender_documents():
    possible_rooms = []
    rooms = Tender.query.all()
    for room in rooms:
        possible_rooms.append(room.id)
    return {'data': possible_rooms}


@bp.route('/tenders', methods=['GET'])
def tenders():
    res = Tender.query.all()
    return jsonify([x.to_dict() for x in res])


def get_username_from_db():
    user = User.query.filter_by(id=current_user.id).first()
    return user.username
