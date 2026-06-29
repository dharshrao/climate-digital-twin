function AIAdvisor({ insight }) {
  return (
    <div
      style={{
        background: "#1E335C",
        borderRadius: "15px",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h3>🤖 AI Climate Advisor</h3>

      <p style={{ marginTop: "15px" }}>
        {insight.summary}
      </p>

      <hr style={{ margin: "15px 0" }} />

      <h4>Recommendation</h4>

      <p style={{ marginTop: "10px" }}>
        {insight.recommendation}
      </p>
    </div>
  );
}

export default AIAdvisor;