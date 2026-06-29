import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

import ClimateCards from "./ClimateCards";
import RiskPanel from "./RiskPanel";
import ForecastPanel from "./ForecastPanel";
import TrendChart from "./TrendChart";
import AlertPanel from "./AlertPanel";
import AIAdvisor from "./AIAdvisor";

function Dashboard({ selectedState }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getDashboard(selectedState);
        setData(response);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, [selectedState]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  const temperatureTrend = data.forecast.map((day, index) => ({
    day: `D${index + 1}`,
    value: day.temperature,
  }));

  const rainfallTrend = data.forecast.map((day, index) => ({
    day: `D${index + 1}`,
    value: day.rainfall ?? Math.floor(Math.random() * 80 + 20),
  }));

  const aqiTrend = data.forecast.map((day, index) => ({
    day: `D${index + 1}`,
    value: day.aqi ?? Math.floor(Math.random() * 70 + 50),
  }));

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        📊 Climate Dashboard
      </h2>

      <h3
        style={{
          textAlign: "center",
          color: "#00d4ff",
          marginBottom: "25px",
        }}
      >
        📍 {selectedState}
      </h3>

      {/* Current Climate */}
      <ClimateCards climate={data.climate} />

      {/* Risk Assessment */}
      <RiskPanel analysis={data.analysis} />

      {/* Forecast */}
      <ForecastPanel forecast={data.forecast} />

      {/* Climate Trends */}
      <div style={{ marginTop: "30px" }}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          📈 Climate Trends
        </h3>

        <TrendChart
          title="🌡 Temperature Trend"
          color="#ff7043"
          data={temperatureTrend}
        />

        <TrendChart
          title="🌧 Rainfall Trend"
          color="#29b6f6"
          data={rainfallTrend}
        />

        <TrendChart
          title="🌫 AQI Trend"
          color="#ffca28"
          data={aqiTrend}
        />
      </div>

      {/* Alerts */}
      <AlertPanel alerts={data.alerts} />

      {/* AI Advisor */}
      <AIAdvisor insight={data.insight} />
    </div>
  );
}

export default Dashboard;