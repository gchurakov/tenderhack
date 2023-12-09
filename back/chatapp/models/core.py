from __future__ import annotations
# импортируем классы, используемые для определения атрибутов модели
from sqlalchemy import ForeignKey, Text, String
# импортируем объекты для создания отношения между объектами
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from typing import List, ClassVar
from flask_login import UserMixin
from chatapp.db import Base


class Tender(Base):
    __tablename__ = "tender"
    id: Mapped[int] = mapped_column(primary_key=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    tender_number: Mapped[str] = mapped_column(Text, nullable=False)

    # Прописываем отношение Тендер <- Документ для маппера, чтобы по тендеру вытащить документы
    tender_documents: Mapped[List["Document"]] = relationship(back_populates="tender")

    def __init__(self, description, tender_number):
        self.description = description
        self.tender_number = tender_number

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "description": self.description,
            "tender_number": self.tender_number,
        }

    def __repr__(self) -> str:
        return f"Tender(" \
               f"id={self.id!r}," \
               f" description={self.description!r}" \
               f" tender_number={self.tender_number!r}"


class Document(Base):
    __tablename__ = "document"
    id: Mapped[int] = mapped_column(primary_key=True)
    document_name: Mapped[str] = mapped_column(Text, nullable=False)
    # Внешний ключ для тендера
    tender_id: Mapped[int] = mapped_column(ForeignKey("tender.id"))
    # 0, 1, 2... Определяем тип через Enum
    document_type: Mapped[int] = mapped_column(nullable=False)
    # Поля для хранения файлов
    document_uri: Mapped[str] = mapped_column(Text, nullable=True)
    document_binary_data: Mapped[str] = mapped_column(Text, nullable=True)
    document_binary_data_ext: Mapped[str] = mapped_column(String(50), nullable=True)

    # Прописываем отношение Тендер <- Документ для маппера, чтобы по тендеру вытащить документы
    tender: Mapped["Tender"] = relationship(back_populates="tender_documents")

    # Прописываем отношение Документ <- Исправление в пункте документа
    contract_clauses: Mapped[List["ContractClause"]] = relationship(back_populates="document")

    def __init__(self, document_name, tender_id, document_type, document_uri=None, document_binary_data=None,
                 document_binary_data_ext=None):
        self.document_name = document_name
        self.tender_id = tender_id
        self.document_type = document_type
        self.document_uri = document_uri
        self.document_binary_data = document_binary_data
        self.document_binary_data_ext = document_binary_data_ext

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "document_name": self.document_name,
            "tender_id": self.tender_id,
            "document_type": self.document_type,
            "document_uri": self.document_uri,
            "document_binary_data": self.document_binary_data,
            "document_binary_data_ext": self.document_binary_data_ext,
        }

    def __repr__(self) -> str:
        return f"Document(" \
               f"id={self.id!r}," \
               f" document_name={self.document_name!r}," \
               f" tender_id={self.tender_id!r}," \
               f" document_type={self.document_type!r}," \
               f" document_uri={self.document_uri!r}," \
               f" document_binary_data={self.document_binary_data!r}," \
               f" document_binary_data_ext={self.document_binary_data_ext!r}"


class ContractClause(Base):
    'contract changes'
    __tablename__ = "contract_clause"
    id: Mapped[int] = mapped_column(primary_key=True)
    # Аналог room_id
    tender_id: Mapped[str] = mapped_column(nullable=True)
    document_id: Mapped[int] = mapped_column(ForeignKey("document.id"))
    before_clause: Mapped[str] = mapped_column(Text)
    clause: Mapped[str] = mapped_column(Text, nullable=False)
    comment: Mapped[str] = mapped_column(Text, nullable=True)

    document: Mapped["Document"] = relationship(back_populates="contract_clauses")

    def __init__(self, tender_id, document_id, before_clause, clause, comment):
        self.tender_id = tender_id
        self.document_id = document_id
        self.before_clause = before_clause
        self.clause = clause
        self.comment = comment

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "tender_id": self.tender_id,
            "document_id": self.document_id,
            "before_clause": self.before_clause,
            "clause": self.clause,
            "comment": self.comment,
        }

    def __repr__(self) -> str:
        return f"ContractClause(" \
               f"id={self.id!r}," \
               f" tender_id={self.tender_id!r}" \
               f" document_id={self.document_id!r}" \
               f" before_clause={self.before_clause!r}" \
               f" clause={self.clause!r}" \
               f" comment={self.comment!r}"


class User(UserMixin, Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(Text, nullable=False, unique=True)
    password: Mapped[str] = mapped_column(Text, nullable=False)
    # Коллекция сообщений пользователя
    # TODO: Переделать для сущностей договоров
    messages: Mapped[List["Message"]] = relationship(back_populates="user")

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password
        }

    def __repr__(self) -> str:
        return f"User(" \
               f"id={self.id!r}," \
               f" username={self.username!r}" \
               f" password={self.password!r}"


class Message(Base):
    __tablename__ = "message"
    id: Mapped[int] = mapped_column(primary_key=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    time_iso: Mapped[str] = mapped_column(Text, nullable=False)
    # Т.к. для нас комнаты чатов = тендеры
    tender_room_id: Mapped[int] = mapped_column(ForeignKey("tender.id"), nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    # Получить юзера, который отправил сообщение
    user: Mapped["User"] = relationship(back_populates="messages")
