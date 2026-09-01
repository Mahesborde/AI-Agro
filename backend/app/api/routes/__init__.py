from fastapi import APIRouter
from app.api.routes import auth, farms, crops, irrigation, expenses, harvest, notifications, analytics

api_router = APIRouter()

api_router.include_router(auth.router)
api_router.include_router(farms.router)
api_router.include_router(crops.router)
api_router.include_router(irrigation.router)
api_router.include_router(expenses.router)
api_router.include_router(harvest.router)
api_router.include_router(notifications.router)
api_router.include_router(analytics.router)
