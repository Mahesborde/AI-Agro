"""
AgroMind AI - Harvest Pydantic Validation Schemas
"""

from datetime import datetime
from pydantic import BaseModel


class HarvestBase(BaseModel):
    crop_name: str
    quantity_tons: float
    revenue: float
    harvest_date: str


class HarvestCreate(HarvestBase):
    farm_id: str


class HarvestOut(HarvestBase):
    id: str
    farm_id: str
    created_at: datetime

    class Config:
        from_attributes = True
