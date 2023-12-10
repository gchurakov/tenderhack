from __future__ import annotations
# импортируем классы, используемые для определения атрибутов модели
from sqlalchemy import ForeignKey, Text, String
# импортируем объекты для создания отношения между объектами
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from typing import List, ClassVar
from flask_login import UserMixin
from db import Base


class Tender(Base):
    __tablename__ = "tender"
    id: Mapped[int] = mapped_column(primary_key=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    tender_number: Mapped[str] = mapped_column(Text, nullable=False)

    # Прописываем отношение Тендер <- Документ, чтобы по тендеру вытащить документы
    documents: Mapped[List["Document"]] = relationship(back_populates="tender")

    # Прописываем отношение Тендер <- Сообщение, чтобы по тендеру вытащить сообщения чата
    #messages: Mapped[List["Message"]] = relationship(back_populates="tender")

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
    name: Mapped[str] = mapped_column(Text, nullable=False)
    # Внешний ключ для тендера
    tender_id: Mapped[int] = mapped_column(ForeignKey("tender.id"))
    # Поля для хранения файлов
    document_uri: Mapped[str] = mapped_column(Text, nullable=True)
    document_binary_data: Mapped[str] = mapped_column(Text, nullable=True)
    document_binary_data_ext: Mapped[str] = mapped_column(String(50), nullable=True)

    # Прописываем отношение Тендер <- Документ для маппера, чтобы по тендеру вытащить документы
    tender: Mapped["Tender"] = relationship(back_populates="documents")

    def __init__(self, name, tender_id, document_uri=None, document_binary_data=None,
                 document_binary_data_ext=None):
        self.name = name
        self.tender_id = tender_id
        self.document_uri = document_uri
        self.document_binary_data = document_binary_data
        self.document_binary_data_ext = document_binary_data_ext

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "tender_id": self.tender_id,
            "document_uri": self.document_uri,
            "document_binary_data": self.document_binary_data,
            "document_binary_data_ext": self.document_binary_data_ext,
        }

    def __repr__(self) -> str:
        return f"Document(" \
               f"id={self.id!r}," \
               f" name={self.name!r}," \
               f" tender_id={self.tender_id!r}," \
               f" document_uri={self.document_uri!r}," \
               f" document_binary_data={self.document_binary_data!r}," \
               f" document_binary_data_ext={self.document_binary_data_ext!r}"


class User(UserMixin, Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(Text, nullable=False, unique=True)
    name: Mapped[str] = mapped_column(Text, nullable=True)
    password: Mapped[str] = mapped_column(Text, nullable=False)

    # Коллекция сообщений пользователя
    messages: Mapped[List["Message"]] = relationship(back_populates="user")

    def __init__(self, username, password, name=None):
        self.password = password
        self.username = username
        self.name = name

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "username": self.username,
            "name": self.name,
            "password": self.password
        }

    def __repr__(self) -> str:
        return f"User(" \
               f"id={self.id!r}," \
               f" username={self.username!r}" \
               f" name={self.name!r}" \
               f" password={self.password!r}"


class Message(Base):
    __tablename__ = "message"
    id: Mapped[int] = mapped_column(primary_key=True)
    data: Mapped[str] = mapped_column(Text, nullable=False)  # stores json

    # 0 - не выбрано, 1 - корректировать, 2 - соглашение, 3 - отказ
    decision: Mapped[int] = mapped_column(nullable=False)

    type: Mapped[str] = mapped_column(nullable=False)
    time_iso: Mapped[str] = mapped_column(Text, nullable=False)
    # Т.к. для нас комнаты чатов = тендеры
    tender_id: Mapped[int] = mapped_column(ForeignKey("tender.id"), nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)

    # Получить юзера, который отправил сообщение
    # tender: Mapped["Tender"] = relationship(back_populates="messages")
    user: Mapped["User"] = relationship(back_populates="messages")

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "data": self.data,
            "decision": self.decision,
            "type": self.type,
            "time_iso": self.time_iso,
            "tender_id": self.tender_id,
            "user_id": self.user_id
        }

    def __repr__(self) -> str:
        return f"Message(" \
               f"id={self.id!r}," \
               f" data={self.username!r}" \
               f" decision={self.name!r}" \
               f" type={self.type!r}" \
               f" time_iso={self.time_iso!r}" \
               f" tender_id={self.tender_id!r}" \
               f" user_id={self.user_id!r}"
