"""
AgroMind AI - Database Session Management

Configures SQLAlchemy engine, session maker, and database connection dependencies.
"""

from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

from app.core.config import settings

# Create SQLAlchemy database engine
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    echo=settings.DEBUG,
)

# SessionLocal class for instantiating database sessions per request
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db() -> Generator:
    """
    FastAPI dependency yielding a database session context per request,
    ensuring cleanup and closure upon completion.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
