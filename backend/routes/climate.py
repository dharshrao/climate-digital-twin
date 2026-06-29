from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
from database import get_db
from services.climate_service import analyze_state

router = APIRouter(
    prefix="/climate",
    tags=["Climate"]
)


@router.get("/")
def get_climate(db: Session = Depends(get_db)):
    return crud.get_all_climate(db)


@router.get("/{state}")
def get_state(state: str, db: Session = Depends(get_db)):
    result = crud.get_state(db, state)

    if result:
        return result

    raise HTTPException(status_code=404, detail="State not found")


@router.get("/{state}/analysis")
def climate_analysis(state: str):
    result = analyze_state(state)

    if result:
        return result

    raise HTTPException(status_code=404, detail="State not found")