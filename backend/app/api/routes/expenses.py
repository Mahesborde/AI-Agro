"""
AgroMind AI - Expense Tracking REST Endpoints
"""

from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.expense import ExpenseCreate, ExpenseOut
from app.services.farm_service import create_expense_record
from app.services.auth_service import get_current_user
from app.models.expense import Expense
from app.models.user import User

router = APIRouter(prefix="/expenses", tags=["Expense Tracking"])


@router.post("", response_model=ExpenseOut, status_code=status.HTTP_201_CREATED)
def add_expense(expense_in: ExpenseCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """Record an input expense entry."""
    return create_expense_record(db, expense_in)


@router.get("", response_model=List[ExpenseOut])
def list_expenses(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    """List all farm expenses."""
    return db.query(Expense).all()
