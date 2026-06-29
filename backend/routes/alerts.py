from fastapi import APIRouter
from services.alert_service import get_alerts

router = APIRouter(
    prefix="/alerts",
    tags=["Alerts"]
)

@router.get("/")
def alerts():
    return get_alerts()