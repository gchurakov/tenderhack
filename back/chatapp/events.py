from flask import session
from flask_socketio import leave_room, join_room, emit
from .db import db_session
from .extensions import socketio
from .models.core import User, Tender, Message
from .auth import authenticated_only
from .form_types import form_types


@socketio.on('update-room')
@authenticated_only
def update_room(payload):
    print(payload)
    if 'room' in session:
        leave_room(session.get('room'))
    #room_info = Tender.query.filter(Tender.id == payload['tender_id']).first()
    session['room'] = payload['tender_id']
    join_room(payload['tender_id'])
    return 'room updated'


@socketio.on('new-message')
@authenticated_only
def handle_new_message(payload):
    print(payload)

    user = db_session.query(User).filter(
        User.id == session.get('_user_id')).first()

    form_type = payload["type"]
    proceed_func = form_types[form_type]
    #proceed_func(session.get('tender_room_id'))
    result_message = proceed_func(payload)

    new_message = {
        'message': payload['message'],
        'timeStamp': payload['timeStamp'],
        'userName': user.username
    }
    emit('message-from-server', {
         "db_message": new_message}, broadcast=True, include_self=True, to=session.get('room'))
    new_db_entry = Message(
        message=payload['message'],
        time_iso=payload['time_iso'],
        tender_room_id=session.get('tender_room_id'),
        user_id=session.get('_user_id'))
    db_session.add(new_db_entry)
    db_session.commit()


@socketio.on('load-all-messages')
@authenticated_only
def handle_load_all_messages():
    db_messages = []
    query = db_session.query(Message).filter(
        Message.room_id == session.get('room')).all()
    for entry in query:
        updated_entry = {'message': entry.message,
                         'time_iso': entry.timestamp_utc,
                         'id': entry.id,
                         'userName': entry.user.username}
        db_messages.append(updated_entry)

    return {'db_messages': db_messages}
