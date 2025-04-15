"use client"; // intial

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Flame, Droplets, Wind } from 'lucide-react';

const Prediction = () => {
  const predictionData = Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    risk: 20 + i * 7,
  }));

  const recommendations = [
    'Increase patrols in high-risk areas',
    'Ensure all firefighting equipment is ready for deployment',
    'Update emergency response teams about potential situations',
    'Monitor weather conditions closely',
    'Implement fire prevention measures in vulnerable locations',
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Fire Prediction Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Current Fire Risk</h2>
          <div className="flex items-center space-x-2">
            <Flame className="text-orange-500 h-6 w-6" />
            <span className="text-2xl font-bold">High</span>
            <span className="text-xl text-gray-600">65%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Real-Time Data</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Flame className="text-orange-500 h-5 w-5" />
              <div>
                <div className="text-lg font-semibold">32°C</div>
                <div className="text-sm text-gray-600">Temperature</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="text-blue-500 h-5 w-5" />
              <div>
                <div className="text-lg font-semibold">45%</div>
                <div className="text-sm text-gray-600">Humidity</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="text-green-500 h-5 w-5" />
              <div>
                <div className="text-lg font-semibold">15 km/h</div>
                <div className="text-sm text-gray-600">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Fire Risk Prediction</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="monotone" dataKey="risk" stroke="#f97316" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
        <ul className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prediction;