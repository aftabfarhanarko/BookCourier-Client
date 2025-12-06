import React, { use, useState, useRef } from "react";
import H1text from "../../utils/H1text";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { customMarker } from "../../utils/customMarker";
import { motion } from "framer-motion";
import Ptext from "../../utils/Ptext";

const data = fetch("/weaerhouse.json").then((res) => res.json());

const HomeMap = () => {
  const weaerhouse = use(data);
  const mapRef = useRef(null);

  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const centerBD = [23.685, 90.3563];

  // auto zoom on marker click
  const handleMarkerClick = (lat, lng) => {
    mapRef.current.flyTo([lat, lng], 10, {
      duration: 1.5,
    });
  };

  return (
    <section className=" ">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <H1text className="text-white">
            Bangladesh All Book Delivery Coverage Districts
          </H1text>
          <div className="mt-3">
            <Ptext>
              Our warehouses cover major districts across Bangladesh.
            </Ptext>
          </div>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-5 right-5 z-[1000] bg-white/90 px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            {darkMode ? "Light Map" : "Dark Map"}
          </button>

          {/* Skeleton Loader */}
          {loading && (
            <div className="absolute inset-0 z-50 bg-gray-800 animate-pulse flex items-center justify-center">
              <p className="text-white">Loading Map...</p>
            </div>
          )}

          <div className="h-[450px] md:h-[650px] ">
            <MapContainer
              center={centerBD}
              zoom={7}
              minZoom={6}
              scrollWheelZoom={false}
              className="h-full w-full"
              whenReady={() => setLoading(false)}
              ref={mapRef}
            >
              {/* Tile */}
              <TileLayer
                url={
                  darkMode
                    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }
              />

              {/* Delivery Radius (Bangladesh coverage feel) */}
              <Circle
                center={centerBD}
                radius={350000}
                pathOptions={{
                  color: "#16a34a",
                  fillColor: "#22c55e",
                  fillOpacity: 0.08,
                }}
              />

              {/* Markers */}
              <MarkerClusterGroup chunkedLoading>
                {weaerhouse?.map((item) => (
                  <Marker
                    key={item.district}
                    position={[item.latitude, item.longitude]}
                    icon={customMarker}
                    eventHandlers={{
                      click: () =>
                        handleMarkerClick(item.latitude, item.longitude),
                      mouseover: (e) => e.target.openPopup(),
                    }}
                  >
                    <Popup>
                      <div className="text-sm space-y-1">
                        <p className="font-bold">{item.district}</p>
                        <p className="text-gray-600">
                          Areas: {item.covered_area.join(", ")}
                        </p>
                        <p
                          className={`font-semibold ${
                            item.status ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          Status: {item.status ? "Open" : "Closed"}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeMap;
