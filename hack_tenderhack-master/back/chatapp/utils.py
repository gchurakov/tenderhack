from .models.core import Tender, Document, ContractClause
from .db import engine, db_session, Base


# Вызывать только при полностью пустых таблицах БД!
def create_dummy_objects():
    # Удаляем таблицы, чтобы точно работать с актуальными связями
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    tender = Tender(description="wow", tender_number=123)
    db_session.add(tender)
    db_session.commit()

    obj = Document(document_name="TestDoc", tender_id=1, document_type=2)
    db_session.add(obj)
    db_session.commit()

    obj = Document(document_name="TestDoc", tender_id=1, document_type=2)
    db_session.add(obj)
    db_session.commit()

    obj = ContractClause(
        document_id=1,
        tender_id=1,
        before_clause="Before text",
        clause="Now clause",
        comment="Ha ha"
    )

    db_session.add(obj)
    db_session.commit()
