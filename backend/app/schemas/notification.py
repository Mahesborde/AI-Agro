"""
AgroMind AI - Notification Pydantic Validation Schemas
"""

from datetime import datetime
from pydantic import BaseModel


class NotificationBase(BaseModel):
    title: str
    message: str
    category: str
    priority: str = "medium"


class NotificationCreate(NotificationBase):
    user_id: str


class NotificationOut(NotificationBase):
    id: str
    user_id: str
    read: bool
    timestamp: datetime

    class Config:
        from_attributes = True
