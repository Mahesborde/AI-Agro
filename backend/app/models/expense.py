"""
AgroMind AI - Expense Record Database Model
"""

from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(String, primary_key=True, index=True)
    farm_id = Column(String, ForeignKey("farms.id"), nullable=False)
    category = Column(String, nullable=False)  # Seeds, Fertilizer, Pesticides, Labor, Equipment, Irrigation, Other
    amount = Column(Float, nullable=False)
    date = Column(String, nullable=False)
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    farm = relationship("Farm", back_populates="expenses")
