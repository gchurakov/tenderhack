from passlib.handlers.sha2_crypt import sha256_crypt
from datetime import datetime

from .models.core import Tender, Document, User, Message
from .db import engine, db_session, Base


# Вызывать только при полностью пустых таблицах БД!
def create_dummy_objects():
    # Удаляем таблицы, чтобы точно работать с актуальными связями
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    tender = Tender(description="wow", tender_number="№564241")
    db_session.add(tender)
    db_session.commit()

    obj = User(
        username="user1",
        password=sha256_crypt.hash("root"),
        name="test1"
    )
    db_session.add(obj)
    db_session.commit()

    obj = User(
        username="user2",
        password=sha256_crypt.hash("root"),
        name="test2"
    )
    db_session.add(obj)
    db_session.commit()

    obj = Message(
        data="{}",
        decision=0,
        type="contract_protocol",
        time_iso=datetime.now().isoformat(),
        tender_id=1,
        user_id=1
    )
    db_session.add(obj)
    db_session.commit()

    obj = Document(
        name="{}",
        tender_id=1,
        document_uri="contract_protocol",
        document_binary_data=datetime.now().isoformat(),
        document_binary_data_ext=1
    )
    db_session.add(obj)
    db_session.commit()