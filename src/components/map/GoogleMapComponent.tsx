'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import the Leaflet component instead of Google Maps
const LeafletMapComponent = dynamic(
  () => import('@/components/map/LeafletMapComponent'),
  { ssr: false }
);

interface GoogleMapComponentProps {
  apiKey: string;
  compact?: boolean;
}

// This is now a wrapper that renders Leaflet instead of Google Maps
export default function GoogleMapComponent({ apiKey, compact = false }: GoogleMapComponentProps) {
  return <LeafletMapComponent compact={compact} />;
}
