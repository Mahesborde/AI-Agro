"""
AgroMind AI - Financial & Resource Analytics Service
"""

from typing import Dict, Any
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.expense import Expense
from app.models.harvest import Harvest
from app.models.irrigation import IrrigationLog


def get_analytics_summary(db: Session, user_id: str) -> Dict[str, Any]:
    """
    Compute aggregated financial revenue, expenses, profit, and resource usage.
    """
    total_revenue = db.query(func.sum(Harvest.revenue)).scalar() or 0.0
    total_expenses = db.query(func.sum(Expense.amount)).scalar() or 0.0
    total_harvest_tons = db.query(func.sum(Harvest.quantity_tons)).scalar() or 0.0
    total_water_liters = db.query(func.sum(IrrigationLog.liters_applied)).scalar() or 0.0

    net_profit = total_revenue - total_expenses
    profit_margin_percent = ((net_profit / total_revenue) * 100) if total_revenue > 0 else 0.0

    return {
        "total_revenue_usd": round(total_revenue, 2),
        "total_expenses_usd": round(total_expenses, 2),
        "net_profit_usd": round(net_profit, 2),
        "profit_margin_percent": round(profit_margin_percent, 1),
        "total_harvest_tons": round(total_harvest_tons, 2),
        "total_water_applied_liters": round(total_water_liters, 2),
    }
