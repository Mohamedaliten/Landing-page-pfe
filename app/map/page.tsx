'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { MapLegend } from '@/components/map/MapLegend';

// Dynamically import the SafeMapContainer component with no SSR
const SafeMapContainer = dynamic(
  () => import('@/components/map/SafeMapContainer'),
  { ssr: false }
);

// Loading fallback for the map component
const MapLoading = () => (
  <div className="h-[75vh] bg-gray-100 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500 mb-2"></div>
      <p className="text-gray-500">Loading map data...</p>
    </div>
  </div>
);

export default function MapPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Kebili Fire Monitoring</h1>
      <p className="text-gray-600 mb-6">Real-time environmental sensors data</p>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Suspense fallback={<MapLoading />}>
          <div style={{ height: '75vh' }}>
            <SafeMapContainer compact={false} />
          </div>
        </Suspense>
      </div>

      {/* Map Legend */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-2">Map Legend</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600">High Alert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600">Normal Operation</span>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Monitoring Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Area Covered</span>
              <span className="font-semibold">42 sq km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Sensor Nodes</span>
              <span className="font-semibold">24 active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Update</span>
              <span className="font-semibold">2 minutes ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coverage Status</span>
              <span className="font-semibold text-green-500">Optimal</span>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Download Map Data
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Current Conditions</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-500 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-xl font-semibold">42%</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-orange-500 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-xl font-semibold">34°C</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-500 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Air Quality</p>
              <p className="text-xl font-semibold">Good</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-500 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">System Status</p>
              <p className="text-xl font-semibold">Normal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
