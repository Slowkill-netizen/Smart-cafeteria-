from fastapi import FastAPI

from config import settings
from database import Base, engine
from models import User
from routes.auth import router as auth_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Backend API for the Smart Cafeteria Management System",
)


app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Smart Cafeteria API is running",
        "version": settings.app_version
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }