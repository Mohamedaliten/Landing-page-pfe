// components/profile/ActivityLog.tsx
import React from 'react';
import { Card } from '@/components/ui/card';

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      type: 'Login',
      description: 'Logged in to the system',
      timestamp: '2023-10-01T08:30:00Z',
    },
    {
      id: 2,
      type: 'Update',
      description: 'Updated profile information',
      timestamp: '2023-10-02T14:15:00Z',
    },
    {
      id: 3,
      type: 'Report',
      description: 'Generated fire risk report',
      timestamp: '2023-10-03T10:45:00Z',
    },
    {
      id: 4,
      type: 'Alert',
      description: 'Received high-risk alert for Sector A3',
      timestamp: '2023-10-04T16:20:00Z',
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
            <span className="text-sm text-gray-500">{activity.type}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityLog;