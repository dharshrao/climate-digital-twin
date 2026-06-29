import json
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data", "climate_data.json")


def get_all_climate():
    with open(DATA_FILE, "r") as file:
        return json.load(file)


def get_state_climate(state):
    data = get_all_climate()

    for item in data:
        if item["state"].lower() == state.lower():
            return item

    return None


def analyze_state(state):
    climate = get_state_climate(state)

    if not climate:
        return None

    temp = climate["temperature"]
    humidity = climate["humidity"]
    rainfall = climate["rainfall"]
    aqi = climate["aqi"]

    # Heat Risk
    if temp >= 38:
        heat_risk = "High"
    elif temp >= 32:
        heat_risk = "Medium"
    else:
        heat_risk = "Low"

    # Flood Risk
    if rainfall >= 130:
        flood_risk = "High"
    elif rainfall >= 80:
        flood_risk = "Medium"
    else:
        flood_risk = "Low"

    # Air Quality
    if aqi <= 50:
        air_quality = "Good"
    elif aqi <= 100:
        air_quality = "Moderate"
    else:
        air_quality = "Poor"

    # Climate Score
    score = 100
    score -= max(0, temp - 30)
    score -= max(0, rainfall - 100) // 2
    score -= max(0, aqi - 50) // 2

    score = max(0, min(100, score))

    return {
        **climate,
        "heat_risk": heat_risk,
        "flood_risk": flood_risk,
        "air_quality": air_quality,
        "climate_score": score
    }