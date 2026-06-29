import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import IndiaMap from "./components/IndiaMap";

function App() {
  const [selectedState, setSelectedState] = useState("Karnataka");

  return (
    <div className="app">
      <header className="header">
        <h1>🌍 Climate Digital Twin</h1>
      </header>

      <div className="container">
        <div className="map-section">
          <IndiaMap
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </div>

        <div className="dashboard-section">
          <Dashboard selectedState={selectedState} />
        </div>
      </div>
    </div>
  );
}

export default App;