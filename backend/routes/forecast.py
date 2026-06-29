from fastapi import APIRouter
from services.forecast_service import generate_forecast

router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)

@router.get("/{state}")
def forecast(state: str):
    return generate_forecast(state)