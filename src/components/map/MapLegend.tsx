'use client';
import React from 'react';

const statusConfig = [
  { 
    status: 'high-alert',
    color: 'bg-red-500',
    label: 'High Alert',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    status: 'connection',
    color: 'bg-blue-500',
    label: 'Connection',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  }
];

export const MapLegend = () => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 px-4 pb-2">
      {statusConfig.map((config) => (
        <div key={config.status} className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white border-2 border-current flex items-center justify-center">
            {config.icon}
          </div>
          <span className="text-sm text-gray-600">{config.label}</span>
        </div>
      ))}
    </div>
  );
};