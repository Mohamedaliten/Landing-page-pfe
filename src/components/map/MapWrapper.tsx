'use client';
import React from 'react';
import DirectMapRenderer from './DirectMapRenderer';

// Define the Node type directly in this file
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

interface MapWrapperProps {
  nodes: Node[];
}

const MapWrapper: React.FC<MapWrapperProps> = ({ nodes }) => {
  // Instead of trying to use react-leaflet which isn't installed,
  // we'll use the DirectMapRenderer component that's already working
  return (
    <div className="h-full w-full">
      <DirectMapRenderer nodes={nodes} />
    </div>
  );
};

export default MapWrapper;