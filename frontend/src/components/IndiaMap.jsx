function IndiaMap({ selectedState, setSelectedState }) {
  const states = [
    "Karnataka",
    "Telangana",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Andhra Pradesh",
    "Delhi",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a State</h2>

      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "120px",
        }}
      >
        🇮🇳
      </div>
    </div>
  );
}

export default IndiaMap;