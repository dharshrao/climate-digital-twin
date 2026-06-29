from sqlalchemy import Column, Integer, String
from database import Base


class Climate(Base):
    __tablename__ = "climate"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String, unique=True, index=True)
    temperature = Column(Integer)
    humidity = Column(Integer)
    rainfall = Column(Integer)
    aqi = Column(Integer)