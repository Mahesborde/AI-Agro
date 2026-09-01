"""
AgroMind AI - Crop Record Database Model
"""

from datetime import datetime
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database.base import Base


class Crop(Base):
    __tablename__ = "crops"

    id = Column(String, primary_key=True, index=True)
    farm_id = Column(String, ForeignKey("farms.id"), nullable=False)
    crop_name = Column(String, nullable=False)
    stage = Column(String, nullable=False)  # Planted, Vegetative, Flowering, Harvest Ready, Harvested
    planting_date = Column(String, nullable=False)
    expected_harvest_date = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    farm = relationship("Farm", back_populates="crops")
