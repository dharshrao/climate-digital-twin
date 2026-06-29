from services.climate_service import analyze_state

def generate_insight(state: str):
    analysis = analyze_state(state)

    if not analysis:
        return {"error": "State not found"}

    summary = []

    # Heat Risk
    if analysis["heat_risk"] == "High":
        summary.append("High heatwave risk detected.")
    elif analysis["heat_risk"] == "Medium":
        summary.append("Moderate heat conditions expected.")
    else:
        summary.append("Temperature is within a safe range.")

    # Flood Risk
    if analysis["flood_risk"] == "High":
        summary.append("Heavy rainfall may cause flooding.")
    elif analysis["flood_risk"] == "Medium":
        summary.append("Moderate rainfall expected.")
    else:
        summary.append("Low flood risk.")

    # Air Quality
    if analysis["air_quality"] == "Poor":
        summary.append("Air quality is unhealthy.")
    elif analysis["air_quality"] == "Moderate":
        summary.append("Air quality is acceptable.")
    else:
        summary.append("Air quality is good.")

    recommendation = (
        "Monitor weather updates and follow local advisories."
    )

    return {
        "state": state,
        "summary": " ".join(summary),
        "recommendation": recommendation
    }