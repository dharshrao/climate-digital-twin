from services.climate_service import (
    get_state_climate,
    analyze_state
)
from services.forecast_service import generate_forecast
from services.alert_service import get_alerts
from services.insight_service import generate_insight


def get_dashboard(state: str):

    climate = get_state_climate(state)

    if not climate:
        return {"error": "State not found"}

    analysis = analyze_state(state)
    forecast = generate_forecast(state)
    insight = generate_insight(state)

    alerts = [
        alert
        for alert in get_alerts()
        if alert["state"].lower() == state.lower()
    ]

    return {
        "climate": climate,
        "analysis": analysis,
        "forecast": forecast["forecast"],
        "alerts": alerts,
        "insight": insight
    }