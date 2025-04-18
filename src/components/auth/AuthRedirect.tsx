'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthRedirect() {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize only on client-side
    const checkAuth = () => {
      // Check if Clerk client is available in window
      const client = (window as any).__clerk_client;
      
      if (client && client.session) {
        router.push('/dashboard');
      }
    };
    
    // Wait for Clerk to initialize
    const waitForClerk = () => {
      if ((window as any).__clerk_client) {
        checkAuth();
        setInitialized(true);
        return;
      }
      
      // Retry after short delay
      setTimeout(waitForClerk, 100);
    };
    
    // Start waiting for Clerk
    waitForClerk();
    
    // Set a timeout to stop waiting after 3 seconds
    const timeout = setTimeout(() => {
      setInitialized(true);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [router]);

  return null; // This component doesn't render anything
}