import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TrendChart({ title, color, data }) {
  return (
    <div
      style={{
        background: "#1E335C",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "25px",
      }}
    >
      <h3>{title}</h3>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendChart;