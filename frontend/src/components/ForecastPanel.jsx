function ForecastPanel({ forecast }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>📅 7-Day Forecast</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          marginTop: "15px",
        }}
      >
        {forecast.map((day, index) => (
          <div
            key={index}
            style={{
              minWidth: "95px",
              background: "#1E335C",
              borderRadius: "10px",
              padding: "12px",
              textAlign: "center",
            }}
          >
            <strong>Day {index + 1}</strong>

            <br />
            <br />

            🌡 {day.temperature}°C
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastPanel;