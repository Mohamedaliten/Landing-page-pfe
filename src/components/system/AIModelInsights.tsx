'use client';

import React from 'react';
import { Brain, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// Sample prediction data - in a real app this would come from your AI model
const predictionData = [
  { hour: '00:00', riskLevel: 15 },
  { hour: '03:00', riskLevel: 12 },
  { hour: '06:00', riskLevel: 18 },
  { hour: '09:00', riskLevel: 25 },
  { hour: '12:00', riskLevel: 35 },
  { hour: '15:00', riskLevel: 30 },
  { hour: '18:00', riskLevel: 22 },
  { hour: '21:00', riskLevel: 17 },
];

const AIModelInsights = () => {
  // Calculate current risk level (would come from your model in a real app)
  const currentRiskLevel = 35; // percentage
  
  // Determine risk status
  const getRiskStatus = (level: number) => {
    if (level < 25) return { label: 'Low', color: 'text-green-500', bgColor: 'bg-green-500' };
    if (level < 50) return { label: 'Moderate', color: 'text-yellow-500', bgColor: 'bg-yellow-500' };
    if (level < 75) return { label: 'High', color: 'text-orange-500', bgColor: 'bg-orange-500' };
    return { label: 'Critical', color: 'text-red-500', bgColor: 'bg-red-500' };
  };
  
  const riskStatus = getRiskStatus(currentRiskLevel);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Brain className="h-5 w-5 text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold">AI Model Insights</h2>
        </div>
        <div className="text-sm text-gray-600">
          Updated 5 minutes ago
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Current risk level */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-600 mb-1">Current Fire Risk</h3>
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${riskStatus.color} mr-2`}>{riskStatus.label}</div>
            <div className="text-lg text-gray-700">{currentRiskLevel}%</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${riskStatus.bgColor} h-2 rounded-full`} 
              style={{ width: `${currentRiskLevel}%` }}
            ></div>
          </div>
        </div>
        
        {/* Model performance */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-600 mb-1">Model Performance</h3>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <div className="text-lg font-medium">97% accuracy</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Last calibration: 2 days ago
          </div>
        </div>
        
        {/* Alerts */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-600 mb-1">AI Alerts Today</h3>
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            <div className="text-lg font-medium">2 warnings</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            0 false positives in past 24h
          </div>
        </div>
      </div>
      
      {/* Risk prediction chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-700">24-Hour Risk Prediction</h3>
          <div className="flex items-center">
            <BarChart3 className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-xs text-gray-500">Real-time data</span>
          </div>
        </div>
        
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Risk Level']}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="riskLevel" 
                stroke="#f97316" 
                strokeWidth={2}
                dot={{ r: 3, fill: '#f97316', stroke: 'white', strokeWidth: 1 }}
                activeDot={{ r: 5, fill: '#f97316', stroke: 'white', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AIModelInsights;