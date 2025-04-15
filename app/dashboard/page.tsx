'use client';

import React, { Suspense } from 'react';
import SystemStatus from '@/src/components/system/SystemStatus';
import SensorMetrics from '@/src/components/system/SensorMetrics';
import AlertButton from '@/src/components/alerts/AlertButton';
import NodeStatus from '@/src/components/system/NodeStatus';
import CameraFeeds from '@/src/components/system/CameraFeeds';
import AIModelInsights from '@/src/components/system/AIModelInsights';
import SystemHealth from '@/src/components/system/SystemHealth';
import dynamic from 'next/dynamic';
import { useUser } from '@clerk/nextjs';

// Dynamically import the SafeMapContainer component with no SSR
const SafeMapContainer = dynamic(
  () => import('@/src/components/map/SafeMapContainer'),
  { ssr: false }
);

// Loading fallback for the map component
const MapLoading = () => (
  <div className="h-[180px] bg-gray-100 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500 mb-2"></div>
      <p className="text-gray-500 text-sm">Loading map...</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  // Get first name for greeting
  const firstName = isLoaded && user ? user.firstName || 'there' : 'there';

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Hi {firstName}, Welcome here!</h1>
          <AlertButton />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">status of system</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            download Report
          </button>
        </div>
      </div>

      <SensorMetrics />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <AIModelInsights />
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Nodes Location</h2>
            </div>
            <div className="h-[180px] mb-2">
              <Suspense fallback={<MapLoading />}>
                <SafeMapContainer compact={true} />
              </Suspense>
            </div>
            <div className="flex justify-end">
              <button className="text-blue-500 flex items-center text-sm font-medium">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <NodeStatus />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <CameraFeeds />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <SystemHealth />
        </div>
      </div>
    </div>
  );
}
