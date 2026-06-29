import json
import os

from database import SessionLocal
from models import Climate

BASE_DIR = os.path.dirname(__file__)
DATA_FILE = os.path.join(BASE_DIR, "data", "climate_data.json")

db = SessionLocal()

with open(DATA_FILE, "r") as file:
    data = json.load(file)

for item in data:

    exists = db.query(Climate).filter(
        Climate.state == item["state"]
    ).first()

    if not exists:
        climate = Climate(
            state=item["state"],
            temperature=item["temperature"],
            humidity=item["humidity"],
            rainfall=item["rainfall"],
            aqi=item["aqi"]
        )

        db.add(climate)

db.commit()
db.close()

print("Database seeded successfully!")