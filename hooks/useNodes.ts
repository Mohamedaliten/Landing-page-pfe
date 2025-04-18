import { useState, useEffect } from 'react';

// Define the Node type
export interface Node {
  id: number;
  position: [number, number];
  status: 'connection' | 'high-alert' | string;
  firePercentage: number;
  cameraStatus: boolean;
  humidity: number;
  temperature: number;
  smokeLevel: number;
  gasLevel: number;
  gps: string;
}

// Sample data for nodes
const sampleNodes: Node[] = [
  {
    id: 1,
    position: [33.7041, 8.9690], // Kebili, Tunisia
    status: 'connection',
    firePercentage: 8,
    cameraStatus: true,
    humidity: 42,
    temperature: 32,
    smokeLevel: 15,
    gasLevel: 8,
    gps: '33.7041, 8.9690'
  },
  {
    id: 2,
    position: [33.7141, 8.9790],
    status: 'high-alert',
    firePercentage: 62,
    cameraStatus: true,
    humidity: 28,
    temperature: 41,
    smokeLevel: 85,
    gasLevel: 42,
    gps: '33.7141, 8.9790'
  },
  {
    id: 3,
    position: [33.6941, 8.9590],
    status: 'connection',
    firePercentage: 12,
    cameraStatus: false,
    humidity: 38,
    temperature: 34,
    smokeLevel: 22,
    gasLevel: 11,
    gps: '33.6941, 8.9590'
  }
];

export function useNodes() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate fetching nodes from an API
    const fetchNodes = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll just return sample data after a delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setNodes(sampleNodes);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchNodes();
  }, []);

  return { nodes, loading, error };
}
