import MetricCard from "./MetricCard";

function ClimateCards({ climate }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
      }}
    >
      <MetricCard
        title="Temperature"
        value={climate.temperature}
        unit="°C"
        icon="🌡"
        color="#ff7043"
      />

      <MetricCard
        title="Humidity"
        value={climate.humidity}
        unit="%"
        icon="💧"
        color="#42a5f5"
      />

      <MetricCard
        title="Rainfall"
        value={climate.rainfall}
        unit="mm"
        icon="🌧"
        color="#29b6f6"
      />

      <MetricCard
        title="AQI"
        value={climate.aqi}
        icon="🌫"
        color="#ffca28"
      />
    </div>
  );
}

export default ClimateCards;