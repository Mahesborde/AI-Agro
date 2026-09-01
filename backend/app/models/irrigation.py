"""
AgroMind AI - Irrigation Log Database Model
"""

from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base


class IrrigationLog(Base):
    __tablename__ = "irrigation_logs"

    id = Column(String, primary_key=True, index=True)
    farm_id = Column(String, ForeignKey("farms.id"), nullable=False)
    moisture_level = Column(Float, nullable=False)
    flow_policy = Column(String, nullable=False)  # NO_IRRIGATION, LOW, MEDIUM, HIGH
    liters_applied = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Relationships
    farm = relationship("Farm", back_populates="irrigation_logs")
