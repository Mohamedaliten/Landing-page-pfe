'use client';

import React, { useEffect, useState } from 'react';
import MapWrapper from './MapWrapper';
import { useNodes, Node } from '../../../hooks/useNodes';
import { MapLegend } from './MapLegend';
import { useMapKey } from '../../../hooks/map/useMapKey';

interface NodesMapProps {
  compact?: boolean;
}

const NodesMap = ({ compact = false }: NodesMapProps) => {
  const { nodes, loading, error } = useNodes();
  // Use the custom hook to get a unique key for the map
  const mapKey = useMapKey();
  
  if (loading) {
    return (
      <div className={`w-full ${compact ? 'h-full' : 'h-[500px]'} bg-gray-100 flex items-center justify-center`}>
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500 mb-2"></div>
          <p className="text-gray-500">Loading map data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${compact ? 'h-full' : 'h-[500px]'} bg-gray-100 flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-red-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-gray-700 font-medium">Unable to load map data</p>
          <p className="text-gray-500 text-sm mt-1">Please try again later</p>
        </div>
      </div>
    );
  }

  // Sample data for demonstration with explicit typing
  const sampleNodes: Node[] = nodes.length > 0 ? nodes : [
    {
      id: 1,
      position: [33.7041, 8.9690] as [number, number], // Kebili, Tunisia
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
      position: [33.7141, 8.9790] as [number, number],
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
      position: [33.6941, 8.9590] as [number, number],
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

  return (
    <div className="flex flex-col h-full">
      <div className={`w-full ${compact ? 'h-full' : 'h-[500px]'} bg-gray-100 relative`}>
        {/* Use the key from the custom hook to force remount of the map component */}
        <MapWrapper nodes={sampleNodes} key={mapKey} />
      </div>
      {!compact && <MapLegend />}
    </div>
  );
};

export default NodesMap;
