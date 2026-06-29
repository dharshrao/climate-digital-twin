function Badge({ label }) {
  let color = "#4caf50";

  if (label === "Medium") color = "#ff9800";
  if (label === "High") color = "#d32f2f";

  return (
    <span
      style={{
        background: color,
        padding: "8px 18px",
        borderRadius: "20px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {label}
    </span>
  );
}

function RiskPanel({ analysis }) {
  return (
    <div style={{ marginTop: "25px" }}>
      <h3>🔥 Heat Risk</h3>

      <div style={{ marginTop: "10px" }}>
        <Badge label={analysis.heat_risk} />
      </div>

      <h3 style={{ marginTop: "20px" }}>🌊 Flood Risk</h3>

      <div style={{ marginTop: "10px" }}>
        <Badge label={analysis.flood_risk} />
      </div>
    </div>
  );
}

export default RiskPanel;