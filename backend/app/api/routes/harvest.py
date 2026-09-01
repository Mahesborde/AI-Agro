"""
AgroMind AI - Harvest Batch REST Endpoints
"""

from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.harvest import HarvestCreate, HarvestOut
from app.services.farm_service import create_harvest_record
from app.services.auth_service import get_current_user
from app.models.harvest import Harvest
from app.models.user import User

router = APIRouter(prefix="/harvest", tags=["Harvest Management"])


@router.post("", response_model=HarvestOut, status_code=status.HTTP_201_CREATED)
def record_harvest(harvest_in: HarvestCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Record a completed harvest batch."""
    return create_harvest_record(db, harvest_in)


@router.get("", response_model=List[HarvestOut])
def list_harvests(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """List all harvest batches."""
    return db.query(Harvest).all()
