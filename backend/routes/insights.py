from fastapi import APIRouter
from services.insight_service import generate_insight

router = APIRouter(
    prefix="/insights",
    tags=["AI Insights"]
)

@router.get("/{state}")
def insights(state: str):
    return generate_insight(state)