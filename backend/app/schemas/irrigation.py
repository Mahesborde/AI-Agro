"""
AgroMind AI - Irrigation Pydantic Validation Schemas
"""

from datetime import datetime
from pydantic import BaseModel


class IrrigationBase(BaseModel):
    moisture_level: float
    flow_policy: str
    liters_applied: float


class IrrigationCreate(IrrigationBase):
    farm_id: str


class IrrigationOut(IrrigationBase):
    id: str
    farm_id: str
    timestamp: datetime

    class Config:
        from_attributes = True
