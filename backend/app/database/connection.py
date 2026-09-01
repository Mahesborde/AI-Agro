"""
AgroMind AI - Database Connection & Session Management

Configures SQLAlchemy engine with automatic fallback between PostgreSQL and SQLite.
"""

from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

# Determine connect args based on database dialect (e.g. SQLite check_same_thread)
connect_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

# Create SQLAlchemy engine
engine = create_engine(
    settings.DATABASE_URL,
    connect_args=connect_args,
    pool_pre_ping=True,
    echo=settings.DEBUG,
)

# SessionLocal class for instantiating DB sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db() -> Generator:
    """
    FastAPI dependency that yields a transactional database session per request
    and guarantees proper session cleanup upon request termination.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
