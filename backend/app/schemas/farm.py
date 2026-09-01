"""
AgroMind AI - Farm Pydantic Validation Schemas
"""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class FarmBase(BaseModel):
    name: str
    location: str
    size_hectares: float
    primary_crop: str
    soil_type: str
    irrigation_type: str


class FarmCreate(FarmBase):
    pass


class FarmUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    size_hectares: Optional[float] = None
    primary_crop: Optional[str] = None
    soil_type: Optional[str] = None
    irrigation_type: Optional[str] = None


class FarmOut(FarmBase):
    id: str
    user_id: str
    created_at: datetime

    class Config:
        from_attributes = True
