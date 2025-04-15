'use client'; // Mark this component as a Client Component

import React from 'react';
import dynamic from 'next/dynamic';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet'; // Import types for type safety

// Dynamically import MapContainer and its components to ensure they're only loaded on the client side
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false } // Disable server-side rendering for this component
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Rectangle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Rectangle),
  { ssr: false }
);

const HeatMap = () => {
  const center: LatLngExpression = [36.7525, 3.0420]; // Explicitly type center as LatLngExpression
  const bounds: LatLngBoundsExpression = [
    [36.7515, 3.0410],
    [36.7535, 3.0430],
  ]; // Explicitly type bounds as LatLngBoundsExpression
  
  // Add cleanup effect to ensure proper map destruction
  React.useEffect(() => {
    return () => {
      // Find and cleanup any Leaflet map container
      const mapContainer = document.getElementById('heat-map');
      if (mapContainer && (mapContainer as any)._leaflet_id) {
        // This will help clean up the map instance
        (mapContainer as any)._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="h-96 rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        key="heat-map"
        id="heat-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle
          bounds={bounds}
          pathOptions={{ color: 'red', fillOpacity: 0.5 }}
        />
      </MapContainer>
    </div>
  );
};

export default HeatMap;