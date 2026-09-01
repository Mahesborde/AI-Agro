"""
AgroMind AI - Irrigation Log REST Endpoints
"""

import uuid
from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.irrigation import IrrigationCreate, IrrigationOut
from app.models.irrigation import IrrigationLog
from app.services.auth_service import get_current_user
from app.models.user import User

router = APIRouter(prefix="/irrigation", tags=["Smart Irrigation"])


@router.post("/logs", response_model=IrrigationOut, status_code=status.HTTP_201_CREATED)
def log_irrigation(log_in: IrrigationCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Log an irrigation execution event."""
    db_log = IrrigationLog(
        id=f"irrig_{uuid.uuid4().hex[:10]}",
        farm_id=log_in.farm_id,
        moisture_level=log_in.moisture_level,
        flow_policy=log_in.flow_policy,
        liters_applied=log_in.liters_applied,
    )
    db.add(db_log)
    db.commit()
    db.refresh(db_log)
    return db_log


@router.get("/logs", response_model=List[IrrigationOut])
def get_irrigation_logs(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Retrieve historical irrigation logs."""
    return db.query(IrrigationLog).all()
