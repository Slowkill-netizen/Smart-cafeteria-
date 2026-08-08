from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session

from database import get_db
from models.user import User, UserRole
from utils.helpers import hash_password, verify_password
from utils.jwt import create_access_token


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# ============================================================
# REQUEST MODELS
# ============================================================

class StudentRegistration(BaseModel):
    registration_number: str = Field(
        min_length=3,
        max_length=50
    )

    full_name: str = Field(
        min_length=2,
        max_length=150
    )

    email: EmailStr

    password: str = Field(
        min_length=8,
        max_length=128
    )

    confirm_password: str


class StudentLoginRequest(BaseModel):
    registration_number: str
    password: str


# ============================================================
# STUDENT REGISTRATION
# ============================================================

@router.post(
    "/register/student",
    status_code=status.HTTP_201_CREATED
)
def register_student(
    student: StudentRegistration,
    db: Session = Depends(get_db)
):
    # Check password confirmation
    if student.password != student.confirm_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Passwords do not match"
        )

    # Check registration number
    existing_student = (
        db.query(User)
        .filter(
            User.registration_number
            == student.registration_number
        )
        .first()
    )

    if existing_student:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Registration number already exists"
        )

    # Check email
    existing_email = (
        db.query(User)
        .filter(User.email == student.email)
        .first()
    )

    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Create student
    new_student = User(
        registration_number=student.registration_number,
        full_name=student.full_name,
        email=student.email,
        password_hash=hash_password(student.password),
        role=UserRole.STUDENT,
        is_active=True
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student account created successfully",
        "student": {
            "id": new_student.id,
            "registration_number": new_student.registration_number,
            "full_name": new_student.full_name,
            "email": new_student.email,
            "role": new_student.role.value
        }
    }


# ============================================================
# STUDENT LOGIN
# ============================================================

@router.post("/login/student")
def login_student(
    login_data: StudentLoginRequest,
    db: Session = Depends(get_db)
):
    # Find student using registration number
    student = (
        db.query(User)
        .filter(
            User.registration_number
            == login_data.registration_number
        )
        .first()
    )

    # Don't reveal whether the registration number exists
    if not student:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid registration number or password"
        )

    # Check whether account is active
    if not student.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Student account is inactive"
        )

    # Make sure this is actually a student account
    if student.role != UserRole.STUDENT:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account is not a student account"
        )

    # Verify password
    if not verify_password(
        login_data.password,
        student.password_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid registration number or password"
        )

    # Create JWT access token
    access_token = create_access_token(
        {
            "sub": str(student.id),
            "role": student.role.value
        }
    )

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "student": {
            "id": student.id,
            "registration_number": student.registration_number,
            "full_name": student.full_name,
            "email": student.email,
            "role": student.role.value
        }
    }