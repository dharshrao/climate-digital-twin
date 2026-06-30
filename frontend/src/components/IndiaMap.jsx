import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function IndiaMap({ selectedState, setSelectedState }) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/india_state.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error(err));
  }, []);

  const style = (feature) => {
    const isSelected = feature.properties.NAME_1 === selectedState;

    return {
      fillColor: isSelected ? "#00E5FF" : "#355C9A",
      color: "#FFFFFF",
      weight: isSelected ? 3 : 1,
      fillOpacity: isSelected ? 1 : 0.75,
    };
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        if (feature.properties.NAME_1) {
          setSelectedState(feature.properties.NAME_1);
        }
      },

      mouseover: (e) => {
        e.target.setStyle({
          weight: 3,
          fillOpacity: 1,
        });
      },

      mouseout: (e) => {
        e.target.setStyle(style(feature));
      },
    });

    layer.bindTooltip(feature.properties.NAME_1);
  };

  return (
    <MapContainer
      center={[22.5, 79]}
      zoom={5}
      minZoom={4.8}
      maxZoom={7}
      zoomControl={false}
      scrollWheelZoom={true}
      maxBounds={[
        [5, 67],
        [38, 98],
      ]}
      maxBoundsViscosity={1.0}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "18px",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoData && (
        <GeoJSON
          data={geoData}
          style={style}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
}

export default IndiaMap;