"""
AgroMind AI - Analytics REST Endpoints
"""

from typing import Dict, Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.services.analytics_service import get_analytics_summary
from app.services.auth_service import get_current_user
from app.models.user import User

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/summary", response_model=Dict[str, Any])
def fetch_analytics_summary(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Retrieve financial revenue, expense aggregation, and resource stats."""
    return get_analytics_summary(db, user_id=current_user.id)
