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

    def __init__(self, id, description, tender_number):
        self.id = id
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
               f" description={self.tender_number!r}"
