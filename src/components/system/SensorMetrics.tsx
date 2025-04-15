'use client';

import React from 'react';
import { Thermometer, Droplets, Wind, Flame, BarChart, BatteryFull, Wifi } from 'lucide-react';

const SensorMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {/* Temperature Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="text-gray-600">Temperature</span>
          <Thermometer className="text-red-500" />
        </div>
        <div className="text-3xl font-semibold mb-1">26°C</div>
        <div className="text-xs text-gray-500">Average across all nodes</div>
      </div>

      {/* Humidity Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="text-gray-600">Humidity</span>
          <Droplets className="text-blue-500" />
        </div>
        <div className="text-3xl font-semibold mb-1">37%</div>
        <div className="text-xs text-gray-500">Lowest reading: 31%</div>
      </div>

      {/* Smoke Level Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="text-gray-600">Smoke Level (MQ135)</span>
          <Flame className="text-orange-500" />
        </div>
        <div className="text-3xl font-semibold mb-1">144 ppm</div>
        <div className="text-xs text-gray-500">Highest reading detected</div>
      </div>

      {/* Dust Sensor Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="text-gray-600">Dust Particles</span>
          <Wind className="text-green-500" />
        </div>
        <div className="text-3xl font-semibold mb-1">23 µg/m³</div>
        <div className="text-xs text-gray-500">PM2.5 measurement</div>
      </div>
    </div>
  );
};

export default SensorMetrics;