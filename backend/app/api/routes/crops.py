"""
AgroMind AI - Crop Tracking REST Endpoints
"""

from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.crop import CropCreate, CropOut
from app.services.farm_service import create_crop_record
from app.services.auth_service import get_current_user
from app.models.crop import Crop
from app.models.user import User

router = APIRouter(prefix="/crops", tags=["Crop Tracking"])


@router.post("", response_model=CropOut, status_code=status.HTTP_201_CREATED)
def record_crop(crop_in: CropCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Record a new crop planting entry."""
    return create_crop_record(db, crop_in)


@router.get("", response_model=List[CropOut])
def list_crops(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """List all registered crop records."""
    return db.query(Crop).all()
