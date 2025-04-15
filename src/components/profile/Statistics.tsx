// components/profile/Statistics.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Logins',
      value: '142',
      icon: Activity,
      color: 'text-blue-500',
    },
    {
      id: 2,
      title: 'Reports Generated',
      value: '23',
      icon: Shield,
      color: 'text-green-500',
    },
    {
      id: 3,
      title: 'Alerts Received',
      value: '5',
      icon: AlertTriangle,
      color: 'text-red-500',
    },
    {
      id: 4,
      title: 'Tasks Completed',
      value: '18',
      icon: CheckCircle,
      color: 'text-orange-500',
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-20`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Statistics;