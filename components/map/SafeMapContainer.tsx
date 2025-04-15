'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Load the map component dynamically to avoid SSR issues
const LeafletMapComponent = dynamic(
  () => import('./LeafletMapComponent'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full w-full bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500 mb-2"></div>
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    )
  }
);

interface SafeMapContainerProps {
  compact?: boolean;
}

/**
 * SafeMapContainer - A wrapper component that safely renders Leaflet Maps
 */
const SafeMapContainer: React.FC<SafeMapContainerProps> = ({ compact = false }) => {
  return (
    <div className={`w-full ${compact ? 'h-full' : 'h-[500px]'}`}>
      <LeafletMapComponent 
        compact={compact} 
      />
    </div>
  );
};

export default SafeMapContainer;
