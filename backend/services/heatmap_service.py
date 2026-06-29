from services.climate_service import get_all_climate

def get_heatmap_data():
    data = get_all_climate()

    heatmap = []

    for state in data:
        temp = state["temperature"]

        if temp >= 38:
            level = "Extreme"
            color = "#ff0000"
        elif temp >= 34:
            level = "High"
            color = "#ff8800"
        elif temp >= 30:
            level = "Moderate"
            color = "#ffd700"
        else:
            level = "Low"
            color = "#32cd32"

        heatmap.append({
            "state": state["state"],
            "temperature": temp,
            "level": level,
            "color": color
        })

    return heatmap