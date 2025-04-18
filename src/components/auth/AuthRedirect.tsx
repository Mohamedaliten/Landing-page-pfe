'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthRedirect() {
  const router = useRouter();
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
    
    // Import Clerk auth hook only on client side
    const checkAuth = async () => {
      try {
        const { useAuth } = await import('@clerk/nextjs');
        const { isLoaded, isSignedIn } = useAuth();
        
        if (isLoaded && isSignedIn) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Failed to check authentication status:', error);
      }
    };
    
    checkAuth();
  }, [router]);

  return null; // This component doesn't render anything
}