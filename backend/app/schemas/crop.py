"""
AgroMind AI - Crop Pydantic Validation Schemas
"""

from datetime import datetime
from pydantic import BaseModel


class CropBase(BaseModel):
    crop_name: str
    stage: str
    planting_date: str
    expected_harvest_date: str


class CropCreate(CropBase):
    farm_id: str


class CropOut(CropBase):
    id: str
    farm_id: str
    created_at: datetime

    class Config:
        from_attributes = True
