from services.climate_service import get_all_climate

def get_alerts():
    data = get_all_climate()

    alerts = []

    for state in data:

        if state["temperature"] >= 38:
            alerts.append({
                "state": state["state"],
                "alert": "Heatwave Warning",
                "severity": "High"
            })

        if state["rainfall"] >= 120:
            alerts.append({
                "state": state["state"],
                "alert": "Flood Warning",
                "severity": "Medium"
            })

        if state["aqi"] >= 100:
            alerts.append({
                "state": state["state"],
                "alert": "Poor Air Quality",
                "severity": "Medium"
            })

    return alerts