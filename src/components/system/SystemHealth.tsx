'use client';

import React from 'react';
import { Cpu, Database, Signal, BatteryMedium, Cloud, CheckCircle, XCircle, HardDrive } from 'lucide-react';

// Sample data - in production this would come from your system API
const systemData = {
  raspberryPi: {
    status: 'online',
    cpuUsage: 24,
    memoryUsage: 42,
    temperature: 46,
    uptime: '12 days, 5 hours',
    diskSpace: {
      total: '32 GB',
      used: '12.8 GB',
      percent: 40
    }
  },
  loraNetwork: {
    status: 'operational',
    signalStrength: 'good',
    activeConnections: 4,
    lastPing: 120 // ms
  },
  cloudConnection: {
    status: 'connected',
    latency: 250, // ms
    lastSync: '2 minutes ago',
    uploadSpeed: '1.2 Mbps'
  },
  batterySystem: {
    overallStatus: 'good',
    averageLevel: 82,
    lowestNode: 64,
    nodesBelowThreshold: 0
  }
};

// Function to determine color based on value
const getStatusColor = (value: number, thresholds: {low: number, high: number}) => {
  if (value <= thresholds.low) return 'text-green-500';
  if (value <= thresholds.high) return 'text-yellow-500';
  return 'text-red-500';
};

const SystemHealth = () => {
  const cpuColor = getStatusColor(systemData.raspberryPi.cpuUsage, {low: 60, high: 85});
  const memoryColor = getStatusColor(systemData.raspberryPi.memoryUsage, {low: 70, high: 90});
  const tempColor = getStatusColor(systemData.raspberryPi.temperature, {low: 60, high: 75});
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">System Health</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Overall Status:</span>
          <span className="text-sm font-medium text-green-500">Healthy</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Raspberry Pi Status */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Cpu className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="font-medium">Raspberry Pi</h3>
            <div className={`ml-auto flex items-center ${systemData.raspberryPi.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
              {systemData.raspberryPi.status === 'online' ? <CheckCircle className="h-4 w-4 mr-1" /> : <XCircle className="h-4 w-4 mr-1" />}
              <span className="text-sm">{systemData.raspberryPi.status}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <Cpu className={`h-4 w-4 mr-1 ${cpuColor}`} />
                <span>CPU Usage</span>
              </div>
              <span className={`font-medium ${cpuColor}`}>{systemData.raspberryPi.cpuUsage}%</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <Database className={`h-4 w-4 mr-1 ${memoryColor}`} />
                <span>Memory Usage</span>
              </div>
              <span className={`font-medium ${memoryColor}`}>{systemData.raspberryPi.memoryUsage}%</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <HardDrive className="h-4 w-4 mr-1 text-blue-500" />
                <span>Disk Space</span>
              </div>
              <span className="font-medium">{systemData.raspberryPi.diskSpace.used} / {systemData.raspberryPi.diskSpace.total}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <Cpu className={`h-4 w-4 mr-1 ${tempColor}`} />
                <span>Temperature</span>
              </div>
              <span className={`font-medium ${tempColor}`}>{systemData.raspberryPi.temperature}°C</span>
            </div>
          </div>
        </div>
        
        {/* Network Status */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Signal className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium">Connectivity</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Signal className="h-4 w-4 text-green-500 mr-1" />
                <span>LoRa Network</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-1 ${systemData.loraNetwork.status === 'operational' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm">{systemData.loraNetwork.status}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Cloud className="h-4 w-4 text-blue-500 mr-1" />
                <span>Cloud Connection</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-1 ${systemData.cloudConnection.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm">{systemData.cloudConnection.status}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <BatteryMedium className="h-4 w-4 text-green-500 mr-1" />
                <span>Node Battery Avg</span>
              </div>
              <span className="text-sm font-medium">{systemData.batterySystem.averageLevel}%</span>
            </div>
            
            <div className="mt-2 pt-2 border-t text-xs text-gray-500">
              <div className="flex justify-between">
                <span>Last cloud sync:</span>
                <span>{systemData.cloudConnection.lastSync}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Connected nodes:</span>
                <span>{systemData.loraNetwork.activeConnections}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;