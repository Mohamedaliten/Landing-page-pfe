'use client';

import React from 'react';
import { Camera, Flame, AlertTriangle } from 'lucide-react';

  // Sample data - in a real app this would be actual camera streams
const cameraData = [
  { 
    id: 1, 
    nodeName: 'Node 1', 
    status: 'active', 
    detectionStatus: 'clear',
    lastCheck: '30 seconds ago'
  },
  { 
    id: 2, 
    nodeName: 'Node 2', 
    status: 'active', 
    detectionStatus: 'warning',
    lastCheck: '45 seconds ago'
  },
  { 
    id: 4, 
    nodeName: 'Node 4', 
    status: 'active', 
    detectionStatus: 'clear',
    lastCheck: '1 minute ago'
  }
];

const CameraFeeds = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">ESP32 Camera Feeds</h2>
        <div className="text-sm text-gray-600">
          {cameraData.length} active cameras
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cameraData.map((camera) => (
          <div key={camera.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
              {/* This would be an actual camera feed - using a placeholder for now */}
              <div className="text-gray-400 text-sm flex flex-col items-center">
                <Camera className="h-8 w-8 mb-2" />
                <span>Camera Feed {camera.id}</span>
              </div>
              
              {/* Status indicators */}
              <div className="absolute top-2 right-2 flex space-x-2">
                {camera.detectionStatus === 'warning' && (
                  <div className="bg-orange-500 text-white rounded-full p-1" title="Potential fire detected">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                )}
                {camera.detectionStatus === 'danger' && (
                  <div className="bg-red-500 text-white rounded-full p-1" title="Fire detected">
                    <Flame className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              {/* AI detection overlay - in a real app, this would show bounding boxes */}
              {camera.detectionStatus === 'warning' && (
                <div className="absolute inset-0 border-2 border-orange-500"></div>
              )}
              {camera.detectionStatus === 'danger' && (
                <div className="absolute inset-0 border-2 border-red-500"></div>
              )}
            </div>
            
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{camera.nodeName}</h3>
                <div className="flex items-center text-xs">
                  <div className={`w-2 h-2 rounded-full mr-1 ${camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span>{camera.status}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Last check: {camera.lastCheck}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="text-orange-500 text-sm font-medium flex items-center">
          View all cameras
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CameraFeeds;