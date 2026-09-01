"""
AgroMind AI - Expense Pydantic Validation Schemas
"""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class ExpenseBase(BaseModel):
    category: str
    amount: float
    date: str
    notes: Optional[str] = None


class ExpenseCreate(ExpenseBase):
    farm_id: str


class ExpenseOut(ExpenseBase):
    id: str
    farm_id: str
    created_at: datetime

    class Config:
        from_attributes = True
