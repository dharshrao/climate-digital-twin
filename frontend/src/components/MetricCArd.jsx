function MetricCard({ title, value, unit, icon, color }) {
  return (
    <div
      style={{
        background: "#1E335C",
        borderRadius: "15px",
        padding: "18px",
        textAlign: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,.3)",
      }}
    >
      <div
        style={{
          fontSize: "15px",
          color: color,
          fontWeight: "bold",
        }}
      >
        {icon} {title}
      </div>

      <div
        style={{
          marginTop: "12px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {value}
        <span style={{ fontSize: "16px" }}> {unit}</span>
      </div>
    </div>
  );
}

export default MetricCard;