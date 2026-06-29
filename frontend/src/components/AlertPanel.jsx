function AlertPanel({ alerts }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>⚠ Alerts</h3>

      {alerts.length === 0 ? (
        <div
          style={{
            background: "#2e7d32",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          No Alerts
        </div>
      ) : (
        alerts.map((alert, index) => (
          <div
            key={index}
            style={{
              background: "#c62828",
              padding: "12px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            {alert.alert}
          </div>
        ))
      )}
    </div>
  );
}

export default AlertPanel;