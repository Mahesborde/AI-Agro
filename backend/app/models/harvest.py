"""
AgroMind AI - Harvest Batch Database Model
"""

from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base


class Harvest(Base):
    __tablename__ = "harvests"

    id = Column(String, primary_key=True, index=True)
    farm_id = Column(String, ForeignKey("farms.id"), nullable=False)
    crop_name = Column(String, nullable=False)
    quantity_tons = Column(Float, nullable=False)
    revenue = Column(Float, nullable=False)
    harvest_date = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    farm = relationship("Farm", back_populates="harvests")
