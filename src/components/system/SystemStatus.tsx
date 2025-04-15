'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const SystemStatus = () => {
  // Generate yearly data for the graph
  const generateYearlyData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => {
      return {
        month,
        value: Math.floor(Math.random() * 10) + 20 // Random value between 20-30
      };
    });
  };

  const yearlyData = generateYearlyData();

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 border rounded-md flex justify-center items-center mr-2 text-xs">22</div>
          <div className="w-6 h-6 border rounded-md flex justify-center items-center mr-2 text-xs">24</div>
          <div className="w-6 h-6 border rounded-md flex justify-center items-center mr-2 text-xs">26</div>
          <div className="w-6 h-6 border rounded-md flex justify-center items-center mr-2 text-xs">28</div>
          <div className="w-6 h-6 border rounded-md flex justify-center items-center mr-2 text-xs">30</div>
        </div>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={yearlyData} margin={{ top: 5, right: 20, bottom: 5, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={[15, 35]} />
            <Tooltip 
              cursor={false}
              contentStyle={{ background: 'white', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#f97316" 
              strokeWidth={2}
              dot={false} 
              activeDot={{ r: 6, fill: '#f97316', stroke: 'white', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SystemStatus;