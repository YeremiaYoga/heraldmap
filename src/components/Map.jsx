import React, { useState } from "react";

const Map = () => {
  const [zoomLevel, setZoomLevel] = useState(1.5);
  
  const zoomIn = () => {
    if (zoomLevel < 5) {
      setZoomLevel(zoomLevel + 0.5);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.5);
    }
  };
  return (
    <div className="relative flex justify-center items-center">
      <img
        id="mapId"
        src="/assets/map.png"
        alt="Peta"
        className="h-screen scale-150"
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: "center",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      
      <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
        <button
          onClick={zoomIn}
          className="bg-blue-500 text-white w-14 h-14 text-2xl font-bold"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="bg-blue-500 text-white w-14 h-14 text-2xl font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Map;
