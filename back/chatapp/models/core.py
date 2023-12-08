from __future__ import annotations

# импортируем классы, используемые для определения атрибутов модели
from sqlalchemy import ForeignKey

# импортируем объекты для создания отношения между объектами
from sqlalchemy.orm import Mapped

from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from typing import List, ClassVar


class Tender(Base):
    __tablename__ = "tender"
    id: Mapped[int] = mapped_column(primary_key=True)
    description: Mapped[str] = mapped_column(nullable=True)
    tender_number: Mapped[str] = mapped_column(nullable=False)
