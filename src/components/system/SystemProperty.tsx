'use client';

import React from 'react';
import { CheckCircle, Flame, Thermometer, Droplets, Wifi } from 'lucide-react';

const SystemProperty = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Panel with Status */}
      <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center justify-center">
        <div className="bg-white rounded-full p-3 mb-2">
          <Flame className="h-8 w-8 text-green-500" />
        </div>
        <div className="text-3xl font-bold text-green-700">2%</div>
        <div className="text-sm text-green-600">chance of fire</div>
      </div>

      {/* Middle Panel with Status Items */}
      <div className="col-span-2 grid grid-cols-1 gap-2">
        <div className="flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">spectral analysis</span>
          <div className="flex items-center">
            <span className="text-sm mr-2">normal</span>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">air quality</span>
          <div className="flex items-center">
            <span className="text-sm mr-2">normal</span>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">humidity</span>
          <div className="flex items-center">
            <span className="text-sm mr-2">normal</span>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
        </div>

        <div className="flex justify-between items-center p-2">
          <span className="text-gray-600">temperature</span>
          <div className="flex items-center">
            <span className="text-sm mr-2">normal</span>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
        </div>
      </div>

      {/* Bottom Status Indicators */}
      <div className="md:col-span-3 grid grid-cols-3 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Thermometer className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-xs">37°C</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Droplets className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-xs">48%</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <Wifi className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-xs">Connected</span>
        </div>
      </div>
    </div>
  );
};

export default SystemProperty;