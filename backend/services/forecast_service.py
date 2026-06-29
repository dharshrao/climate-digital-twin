import random

def generate_forecast(state: str):
    days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    forecast = []

    base_temp = random.randint(28, 38)

    for day in days:
        forecast.append({
            "day": day,
            "temperature": base_temp + random.randint(-2, 2),
            "humidity": random.randint(40, 80),
            "rainfall": random.randint(0, 100),
            "wind_speed": random.randint(5, 20)
        })

    return {
        "state": state,
        "forecast": forecast
    }