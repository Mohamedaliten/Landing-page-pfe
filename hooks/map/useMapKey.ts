import { useState, useEffect } from 'react';

/**
 * Hook that generates a unique key for maps
 * This is useful for forcing rerenders of map components
 */
export function useMapKey() {
  const [key, setKey] = useState(`map-${Date.now()}`);
  
  useEffect(() => {
    // Generate a new key when the component mounts
    setKey(`map-${Date.now()}`);
  }, []);
  
  return key;
}
