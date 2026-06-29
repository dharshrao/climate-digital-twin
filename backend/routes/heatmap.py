from fastapi import APIRouter
from services.heatmap_service import get_heatmap_data

router = APIRouter(
    prefix="/heatmap",
    tags=["Heatmap"]
)

@router.get("/")
def heatmap():
    return get_heatmap_data()