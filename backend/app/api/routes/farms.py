"""
AgroMind AI - Farm Management REST Endpoints
"""

from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.farm import FarmCreate, FarmOut
from app.services.farm_service import list_user_farms, create_farm, delete_farm, get_farm_by_id
from app.services.auth_service import get_current_user
from app.models.user import User

router = APIRouter(prefix="/farms", tags=["Farm Management"])


@router.get("", response_model=List[FarmOut])
def get_farms(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """List all registered farm plots for the authenticated user."""
    return list_user_farms(db, user_id=current_user.id)


@router.post("", response_model=FarmOut, status_code=status.HTTP_201_CREATED)
def add_farm(farm_in: FarmCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Create a new farm plot entry."""
    return create_farm(db, farm_in, user_id=current_user.id)


@router.delete("/{farm_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_farm(farm_id: str, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Delete a farm plot."""
    delete_farm(db, farm_id=farm_id, user_id=current_user.id)
    return None
