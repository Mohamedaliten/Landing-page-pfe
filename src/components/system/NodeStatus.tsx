'use client';

import React from 'react';
import { BatteryFull, Wifi, Cpu, Camera } from 'lucide-react';

// Sample data - in a real app this would come from your API
const nodeData = [
  { id: 1, name: 'Node 1', status: 'online', battery: 92, signal: 78, cameraStatus: 'active', lastUpdate: '2 min ago' },
  { id: 2, name: 'Node 2', status: 'online', battery: 64, signal: 85, cameraStatus: 'active', lastUpdate: '4 min ago' },
  { id: 3, name: 'Node 3', status: 'offline', battery: 12, signal: 0, cameraStatus: 'inactive', lastUpdate: '2 hours ago' },
  { id: 4, name: 'Node 4', status: 'online', battery: 75, signal: 92, cameraStatus: 'active', lastUpdate: '1 min ago' },
];

// Determine the status color based on the battery level
const getBatteryColor = (batteryLevel: number) => {
  if (batteryLevel > 70) return 'text-green-500';
  if (batteryLevel > 30) return 'text-yellow-500';
  return 'text-red-500';
};

// Determine the status color based on signal strength
const getSignalColor = (signalStrength: number) => {
  if (signalStrength > 70) return 'text-green-500';
  if (signalStrength > 30) return 'text-yellow-500';
  return 'text-red-500';
};

const NodeStatus = () => {
  const onlineNodes = nodeData.filter(node => node.status === 'online').length;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Node Status</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">{onlineNodes} of {nodeData.length} nodes online</span>
          <div className={`w-3 h-3 rounded-full ${onlineNodes === nodeData.length ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left text-sm font-medium text-gray-500">Node</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Battery</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Signal</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Camera</th>
              <th className="py-2 text-left text-sm font-medium text-gray-500">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {nodeData.map((node) => (
              <tr key={node.id} className="border-b hover:bg-gray-50">
                <td className="py-3 text-sm">{node.name}</td>
                <td className="py-3 text-sm">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${node.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span>{node.status}</span>
                  </div>
                </td>
                <td className="py-3 text-sm">
                  <div className="flex items-center">
                    <BatteryFull className={`h-4 w-4 mr-1 ${getBatteryColor(node.battery)}`} />
                    <span>{node.battery}%</span>
                  </div>
                </td>
                <td className="py-3 text-sm">
                  <div className="flex items-center">
                    <Wifi className={`h-4 w-4 mr-1 ${getSignalColor(node.signal)}`} />
                    <span>{node.signal}%</span>
                  </div>
                </td>
                <td className="py-3 text-sm">
                  <div className="flex items-center">
                    <Camera className={`h-4 w-4 mr-1 ${node.cameraStatus === 'active' ? 'text-green-500' : 'text-gray-400'}`} />
                    <span>{node.cameraStatus}</span>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-500">{node.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="text-orange-500 text-sm font-medium flex items-center">
          View all nodes
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NodeStatus;