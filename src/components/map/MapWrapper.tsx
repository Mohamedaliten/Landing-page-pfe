'use client';
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Node } from '@/hooks/types';

// Kebili, Tunisia coordinates
const KEBILLI_COORDINATES: [number, number] = [33.7041, 8.9690];

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface MapWrapperProps {
  nodes: {
    id: number;
    position: [number, number];
    status: 'connection' | 'high-alert' | string;
    firePercentage: number;
    cameraStatus: boolean;
    humidity: number;
    temperature: number;
    smokeLevel: number;
    gasLevel: number;
    gps: string;
  }[];
}

const MapWrapper: React.FC<MapWrapperProps> = ({ nodes }) => {
  const [isClient, setIsClient] = useState(false);
  const mapId = `map-${Date.now()}`; // Unique ID for this map instance
  const mapRef = useRef<any>(null);

  // Only render the map on the client side
  useEffect(() => {
    setIsClient(true);

    // Set default icon options for Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png', 
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png'
    });

    // Clean up function for when component unmounts
    return () => {
      // If we have a reference to the map, remove it properly
      if (mapRef.current) {
        try {
          mapRef.current.remove();
          mapRef.current = null;
        } catch (e) {
          console.error("Error cleaning up map:", e);
        }
      }

      // As a fallback, clean up any map instances that might be attached to containers
      try {
        const containers = document.querySelectorAll('.leaflet-container');
        containers.forEach(container => {
          // Try multiple cleanup approaches
          if ((container as any)._leaflet_id) {
            (container as any)._leaflet_id = null;
          }
          
          // Try to get the map instance from the container and remove it
          const map = (L as any).DomUtil.getMap(container);
          if (map) {
            map.remove();
          }
        });
      } catch (e) {
        console.error("Error in fallback map cleanup:", e);
      }
    };
  }, []);

  const createIcon = (status: string) => {
    const color = status === 'high-alert' ? 'red' : 'blue';
    return L.divIcon({
      html: `
        <div class="relative flex items-center justify-center w-6 h-6">
          <div class="absolute w-4 h-4 rounded-full bg-${color}-500 opacity-75 animate-ping"></div>
          <div class="absolute w-4 h-4 rounded-full bg-${color}-500 border-2 border-white"></div>
        </div>
      `,
      className: '',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  };

  // Helper function to store the map reference when it's created
  const whenCreated = (map: any) => {
    mapRef.current = map;
  };

  if (!isClient) {
    return <div className="h-full w-full bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <MapContainer
      center={KEBILLI_COORDINATES}
      zoom={13}
      className="h-full w-full"
      id={mapId}
      whenCreated={whenCreated}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nodes.map((node) => (
        <Marker
          key={`node-${node.id}`}
          position={node.position}
          icon={createIcon(node.status)}
        >
          <Popup className="min-w-[280px] text-sm">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Node {node.id}</h3>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span>Fire Risk: {node.firePercentage}%</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${node.cameraStatus ? 'text-green-500' : 'text-red-500'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span>Camera: {node.cameraStatus ? 'Working' : 'Offline'}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>Humidity: {node.humidity}%</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.663 17h4.673a2 2 0 002-2V9.663c0-.527-.214-1.042-.586-1.414l-4.673-4.673A2 2 0 009.663 3H6a2 2 0 00-2 2v12a2 2 0 002 2h3.663a2 2 0 001.414-.586l4.673-4.673A2 2 0 0017 13.337V15a2 2 0 01-2 2h-1v-3a2 2 0 00-2-2H8a2 2 0 00-2 2v3H6a4 4 0 01-4-4V5a4 4 0 014-4h3.663a4 4 0 012.828 1.172l4.673 4.673A4 4 0 0117 9.663V15a4 4 0 01-4 4h-4v-3a1 1 0 011-1h2a1 1 0 110 2h-2a3 3 0 00-3 3v3z" clipRule="evenodd" />
                </svg>
                <span>Temperature: {node.temperature}°C</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span>Smoke Level: {node.smokeLevel} ppm</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
                <span>Gas Level: {node.gasLevel} ppm</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>GPS: {node.gps}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWrapper;
