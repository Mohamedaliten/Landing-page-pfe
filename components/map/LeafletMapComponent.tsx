'use client';

import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Sample node data
interface Node {
  id: number;
  position: { lat: number; lng: number };
  status: 'connection' | 'high-alert' | string;
  firePercentage: number;
  cameraStatus: boolean;
  humidity: number;
  temperature: number;
  smokeLevel: number;
  gasLevel: number;
  gps: string;
}

// Sample data for nodes
const sampleNodes: Node[] = [
  {
    id: 1,
    position: { lat: 33.7041, lng: 8.9690 }, // Kebili, Tunisia
    status: 'connection',
    firePercentage: 8,
    cameraStatus: true,
    humidity: 42,
    temperature: 32,
    smokeLevel: 15,
    gasLevel: 8,
    gps: '33.7041, 8.9690'
  },
  {
    id: 2,
    position: { lat: 33.7141, lng: 8.9790 },
    status: 'high-alert',
    firePercentage: 62,
    cameraStatus: true,
    humidity: 28,
    temperature: 41,
    smokeLevel: 85,
    gasLevel: 42,
    gps: '33.7141, 8.9790'
  },
  {
    id: 3,
    position: { lat: 33.6941, lng: 8.9590 },
    status: 'connection',
    firePercentage: 12,
    cameraStatus: false,
    humidity: 38,
    temperature: 34,
    smokeLevel: 22,
    gasLevel: 11,
    gps: '33.6941, 8.9590'
  }
];

interface LeafletMapComponentProps {
  compact?: boolean;
}

export default function LeafletMapComponent({ compact = false }: LeafletMapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const popupRef = useRef<L.Popup | null>(null);

  // Handle Leaflet marker icons issue in Next.js
  useEffect(() => {
    // Fix Leaflet icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    // Initialize map if it doesn't exist yet
    if (mapRef.current && !leafletMap.current) {
      leafletMap.current = L.map(mapRef.current).setView([33.7041, 8.9690], 13);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap.current);

      // Add markers for each node
      sampleNodes.forEach(node => {
        const markerColor = node.status === 'high-alert' ? 'red' : 'blue';
        
        // Create custom icon
        const customIcon = L.divIcon({
          html: `<div class="w-4 h-4 rounded-full bg-${markerColor}-500 border-2 border-white"></div>`,
          className: 'custom-div-icon',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const marker = L.marker([node.position.lat, node.position.lng], { icon: customIcon })
          .addTo(leafletMap.current!);

        // Add click handler
        marker.on('click', () => {
          setSelectedNode(node);
          
          // Create popup content
          const popupContent = document.createElement('div');
          popupContent.className = 'min-w-[200px] p-2';
          popupContent.innerHTML = `
            <h3 class="font-semibold text-lg mb-2">Node ${node.id}</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="font-medium">Fire Risk:</span>
                <span class="${node.firePercentage > 50 ? 'text-red-500 font-bold' : ''}">
                  ${node.firePercentage}%
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-medium">Camera:</span>
                <span>${node.cameraStatus ? 'Working' : 'Offline'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-medium">Humidity:</span>
                <span>${node.humidity}%</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-medium">Temperature:</span>
                <span>${node.temperature}°C</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-medium">GPS:</span>
                <span>${node.gps}</span>
              </div>
            </div>
          `;

          // Open popup
          if (popupRef.current) {
            popupRef.current.remove();
          }
          popupRef.current = L.popup()
            .setLatLng([node.position.lat, node.position.lng])
            .setContent(popupContent)
            .openOn(leafletMap.current!);
        });
      });
    }

    // Cleanup function
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      className={`w-full ${compact ? 'h-full' : 'h-[500px]'} bg-gray-100 relative z-0 rounded-lg overflow-hidden`}
    />
  );
}
