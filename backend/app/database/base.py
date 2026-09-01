"""
AgroMind AI - Base ORM Model Class & Database Initialization Helper
"""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM models."""
    pass


def init_db(engine):
    """Creates all database tables defined across ORM models if they do not exist."""
    Base.metadata.create_all(bind=engine)
