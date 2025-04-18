'use client';

import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

interface HeatMapProps {
  center?: [number, number];
  bounds?: [[number, number], [number, number]];
}

const HeatMap: React.FC<HeatMapProps> = ({ 
  center = [36.7525, 3.0420], 
  bounds = [[36.7515, 3.0410], [36.7535, 3.0430]] 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    const initMap = async () => {
      try {
        // Dynamically import Leaflet
        const leaflet = await import('leaflet');
        
        // Clean up any existing map
        if (leafletMapRef.current) {
          leafletMapRef.current.remove();
          leafletMapRef.current = null;
        }

        // Set default icon options for Leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: '/leaflet/marker-icon-2x.png', 
          iconUrl: '/leaflet/marker-icon.png',
          shadowUrl: '/leaflet/marker-shadow.png'
        });

        // Create a new map - use non-null assertion since we already checked mapRef.current
        const map = L.map(mapRef.current!).setView(center, 15);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add rectangle
        L.rectangle(bounds, { color: 'red', fillOpacity: 0.5 }).addTo(map);

        // Store the map instance for cleanup
        leafletMapRef.current = map;

        // Force a map invalidation to refresh the display
        setTimeout(() => {
          if (leafletMapRef.current) {
            leafletMapRef.current.invalidateSize();
          }
        }, 100);
      } catch (error) {
        console.error('Error loading map:', error);
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full w-full bg-gray-100">
              <div class="text-center p-4">
                <p class="text-red-500 font-medium">Failed to load heat map</p>
                <p class="text-gray-500 text-sm mt-2">Please ensure you have a stable internet connection.</p>
              </div>
            </div>
          `;
        }
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [center, bounds]); // Dependencies

  return (
    <div 
      ref={mapRef}
      className="h-96 rounded-lg overflow-hidden bg-gray-100"
      id="heat-map"
    />
  );
};

export default HeatMap;