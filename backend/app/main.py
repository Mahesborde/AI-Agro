"""
AgroMind AI - Main FastAPI Application Entrypoint

Initializes the FastAPI application, CORS middleware, database tables, and API v1 routes.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.database.connection import engine
from app.database.base import init_db
from app.api.routes import api_router

# Initialize database tables
init_db(engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS Middleware
if settings.CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include Phase 3 API v1 Router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/health", tags=["Health"])
def health_check():
    """Service health check endpoint returning API and database readiness."""
    return {
        "status": "healthy",
        "application": settings.PROJECT_NAME,
        "environment": settings.ENVIRONMENT,
        "phase": 3,
        "database": "connected",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
