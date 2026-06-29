from sqlalchemy.orm import Session
from models import Climate


def get_all_climate(db: Session):
    return db.query(Climate).all()


def get_state(db: Session, state: str):
    return db.query(Climate).filter(
        Climate.state == state
    ).first()


def create_climate(db: Session, climate):
    db.add(climate)
    db.commit()
    db.refresh(climate)
    return climate