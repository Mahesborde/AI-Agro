"""
AgroMind AI - Core Configuration Module

Centralized settings for database connection, security secret keys, CORS origins,
and API paths using Pydantic Settings.
"""

from typing import List
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "AgroMind AI"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    API_V1_STR: str = "/api/v1"

    # Security Configuration
    SECRET_KEY: str = "change-this-in-production-super-secret-key-agromind"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 Days

    # Database Configuration
    DATABASE_URL: str = "sqlite:///./agromind.db"  # Fallback to SQLite for zero-config execution

    # CORS Allowed Origins
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]

    class Config:
        case_sensitive = True
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
