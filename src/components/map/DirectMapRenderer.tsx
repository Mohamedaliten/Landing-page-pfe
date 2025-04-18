'use client';

import React, { useEffect, useRef } from 'react';
// Use dynamic imports for Leaflet
let L: any;

interface Node {
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
}

// Sample data for nodes
const sampleNodes: Node[] = [
  {
    id: 1,
    position: [33.7041, 8.9690], // Kebili, Tunisia
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
    position: [33.7141, 8.9790],
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
    position: [33.6941, 8.9590],
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

interface DirectMapRendererProps {
  compact?: boolean;
  nodes?: Node[];
}

/**
 * DirectMapRenderer - A component that directly creates a Leaflet map without React components
 * This avoids issues with map re-initialization
 */
const DirectMapRenderer: React.FC<DirectMapRendererProps> = ({ compact = false, nodes }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Skip server-side rendering
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    // Dynamically import Leaflet
    const initializeMap = async () => {
      try {
        // Dynamically import Leaflet
        const leaflet = await import('leaflet');
        // Using public CSS file instead of direct import
        L = leaflet.default;
        
        // Clean up any existing map
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Check if this container already has a map
        const existingMap = L.DomUtil.get(mapContainerRef.current);
        if (existingMap && existingMap._leaflet_id) {
          // Clear the ID to let Leaflet know this container is available
          existingMap._leaflet_id = null;
        }

        // Set default icon options for Leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: '/leaflet/marker-icon-2x.png', 
          iconUrl: '/leaflet/marker-icon.png',
          shadowUrl: '/leaflet/marker-shadow.png'
        });

        // Create a new map with a lower z-index to stay below navbar
        const map = L.map(mapContainerRef.current, {
          // Set attributionControl to false to avoid "Map container is already initialized" error
          attributionControl: false,
          zoomControl: true,
          // Set a lower z-index for all map elements
          zoomSnap: 0.5
        }).setView([33.7041, 8.9690], 13);
        
        // Set z-index for map panes to ensure they don't overlap with navbar
        Object.values(map.getPanes()).forEach((pane: any) => {
          if (pane && pane.style) {
            pane.style.zIndex = "400"; // Lower than navbar's z-index
          }
        });
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Create custom marker icons
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

        // Add markers for each node
        const nodesToDisplay = nodes || sampleNodes;
        nodesToDisplay.forEach(node => {
          const marker = L.marker(node.position, { 
            icon: createIcon(node.status) 
          }).addTo(map);
          
          // Add popup with node information
          const popupContent = `
            <div class="min-w-[250px] p-2">
              <h3 class="font-semibold text-lg mb-2">Node ${node.id}</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="font-medium">Fire Risk:</span>
                  <span>${node.firePercentage}%</span>
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
            </div>
          `;
          marker.bindPopup(popupContent);
        });

        // Store the map instance for cleanup
        mapInstanceRef.current = map;

        // Force a map invalidation to refresh the display
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        }, 100);
      } catch (error) {
        console.error('Error loading map:', error);
        // Show error message in the map container
        if (mapContainerRef.current) {
          mapContainerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full w-full bg-gray-100">
              <div class="text-center p-4">
                <p class="text-red-500 font-medium">Failed to load map</p>
                <p class="text-gray-500 text-sm mt-2">Please ensure you have installed the leaflet package.</p>
              </div>
            </div>
          `;
        }
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [compact, nodes]); // Added nodes as dependency

  return (
    <div 
      ref={mapContainerRef}
      className={`w-full ${compact ? 'h-full' : 'h-[500px]'} bg-gray-100 relative z-0`}
      style={{ zIndex: 0 }} // Explicitly set z-index to 0 for the container
    />
  );
};

export default DirectMapRenderer;
