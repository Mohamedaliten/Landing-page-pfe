import React from 'react';
import { Card } from '../../components/ui/card';

const RiskFactors = () => {
  const factors = [
    { name: 'Vegetation Density', value: 85, color: 'bg-red-500' },
    { name: 'Weather Conditions', value: 75, color: 'bg-orange-500' },
    { name: 'Historical Patterns', value: 60, color: 'bg-yellow-500' },
    { name: 'Human Activity', value: 45, color: 'bg-blue-500' },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Risk Factors Analysis</h3>
      <div className="space-y-4">
        {factors.map((factor) => (
          <div key={factor.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{factor.name}</span>
              <span>{factor.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${factor.color} h-2 rounded-full`}
                style={{ width: `${factor.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RiskFactors;