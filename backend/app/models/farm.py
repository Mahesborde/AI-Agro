"""
AgroMind AI - Farm Database Model
"""

from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base


class Farm(Base):
    __tablename__ = "farms"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    size_hectares = Column(Float, nullable=False)
    primary_crop = Column(String, nullable=False)
    soil_type = Column(String, nullable=False)
    irrigation_type = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    owner = relationship("User", back_populates="farms")
    crops = relationship("Crop", back_populates="farm", cascade="all, delete-orphan")
    irrigation_logs = relationship("IrrigationLog", back_populates="farm", cascade="all, delete-orphan")
    expenses = relationship("Expense", back_populates="farm", cascade="all, delete-orphan")
    harvests = relationship("Harvest", back_populates="farm", cascade="all, delete-orphan")
