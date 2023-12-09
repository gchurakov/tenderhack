from __future__ import annotations

# импортируем классы, используемые для определения атрибутов модели
from sqlalchemy import ForeignKey
# импортируем объекты для создания отношения между объектами
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from typing import List, ClassVar

from chatapp.db import Base


class Tender(Base):
    __tablename__ = "tender"
    id: Mapped[int] = mapped_column(primary_key=True)
    description: Mapped[str] = mapped_column(nullable=True)
    tender_number: Mapped[str] = mapped_column(nullable=False)

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
    document_name: Mapped[str] = mapped_column(nullable=False)
    # Внешний ключ для тендера
    tender_id: Mapped[int] = mapped_column(ForeignKey("tender.id"))
    # 0, 1, 2... Определяем тип через Enum
    document_type: Mapped[int] = mapped_column(nullable=False)
    # Поля для хранения файлов
    document_uri: Mapped[str] = mapped_column(nullable=True)
    document_binary_data: Mapped[str] = mapped_column(nullable=True)
    document_binary_data_ext: Mapped[str] = mapped_column(nullable=True)

    # Прописываем отношение Тендер <- Документ для маппера, чтобы по тендеру вытащить документы
    tender: Mapped["Tender"] = relationship(back_populates="tender_documents")

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

# class DocumentType(Base):
#     __tablename__ = "document_type"
#     id: Mapped[int] = mapped_column(primary_key=True)
#     name: Mapped[str] = mapped_column(nullable=False)
#
#     def to_dict(self) -> dict:
#         return {
#             "id": self.id,
#             "name": self.name
#         }
#
#     def __repr__(self) -> str:
#         return f"DocumentType(" \
#                f"id={self.id!r}," \
#                f" name={self.name!r}"
