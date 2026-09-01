"""
AgroMind AI - Farm Management Service Layer
"""

import uuid
from typing import List, Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.farm import Farm
from app.models.crop import Crop
from app.models.expense import Expense
from app.models.harvest import Harvest
from app.models.irrigation import IrrigationLog
from app.schemas.farm import FarmCreate, FarmUpdate
from app.schemas.crop import CropCreate
from app.schemas.expense import ExpenseCreate
from app.schemas.harvest import HarvestCreate
from app.schemas.irrigation import IrrigationCreate


def list_user_farms(db: Session, user_id: str) -> List[Farm]:
    """Retrieve all farms registered under a specific user."""
    return db.query(Farm).filter(Farm.user_id == user_id).all()


def get_farm_by_id(db: Session, farm_id: str, user_id: str) -> Optional[Farm]:
    """Retrieve a specific farm ensuring ownership matches user_id."""
    return db.query(Farm).filter(Farm.id == farm_id, Farm.user_id == user_id).first()


def create_farm(db: Session, farm_in: FarmCreate, user_id: str) -> Farm:
    """Create a new farm plot entry."""
    db_farm = Farm(
        id=f"farm_{uuid.uuid4().hex[:10]}",
        user_id=user_id,
        name=farm_in.name,
        location=farm_in.location,
        size_hectares=farm_in.size_hectares,
        primary_crop=farm_in.primary_crop,
        soil_type=farm_in.soil_type,
        irrigation_type=farm_in.irrigation_type,
    )
    db.add(db_farm)
    db.commit()
    db.refresh(db_farm)
    return db_farm


def delete_farm(db: Session, farm_id: str, user_id: str) -> bool:
    """Delete a farm plot and cascading records."""
    farm = get_farm_by_id(db, farm_id, user_id)
    if not farm:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Farm plot not found or access denied.",
        )
    db.delete(farm)
    db.commit()
    return True


def create_crop_record(db: Session, crop_in: CropCreate) -> Crop:
    """Record a crop planting entry."""
    db_crop = Crop(
        id=f"crop_{uuid.uuid4().hex[:10]}",
        farm_id=crop_in.farm_id,
        crop_name=crop_in.crop_name,
        stage=crop_in.stage,
        planting_date=crop_in.planting_date,
        expected_harvest_date=crop_in.expected_harvest_date,
    )
    db.add(db_crop)
    db.commit()
    db.refresh(db_crop)
    return db_crop


def create_expense_record(db: Session, expense_in: ExpenseCreate) -> Expense:
    """Record an input expense entry."""
    db_expense = Expense(
        id=f"exp_{uuid.uuid4().hex[:10]}",
        farm_id=expense_in.farm_id,
        category=expense_in.category,
        amount=expense_in.amount,
        date=expense_in.date,
        notes=expense_in.notes,
    )
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense


def create_harvest_record(db: Session, harvest_in: HarvestCreate) -> Harvest:
    """Record a completed harvest batch."""
    db_harvest = Harvest(
        id=f"harv_{uuid.uuid4().hex[:10]}",
        farm_id=harvest_in.farm_id,
        crop_name=harvest_in.crop_name,
        quantity_tons=harvest_in.quantity_tons,
        revenue=harvest_in.revenue,
        harvest_date=harvest_in.harvest_date,
    )
    db.add(db_harvest)
    db.commit()
    db.refresh(db_harvest)
    return db_harvest
