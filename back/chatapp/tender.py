from flask import (
    Blueprint, request, current_app, jsonify, abort, Response, send_file
)

bp = Blueprint('tender', __name__, url_prefix='/api')


@bp.route('/tenders', methods=['GET'])
def get_tenders():
    return "Hello from Vitalya", 200


