from fastapi import APIRouter
from services.dashboard_service import get_dashboard

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/{state}")
def dashboard(state: str):
    return get_dashboard(state)