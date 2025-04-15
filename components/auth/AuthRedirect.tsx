'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

/**
 * This component handles redirects based on authentication state
 * It redirects authenticated users away from auth pages to the dashboard
 */
export default function AuthRedirect() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  
  useEffect(() => {
    // Wait for Clerk to load the authentication state
    if (!isLoaded) return;
    
    // If user is authenticated, redirect to dashboard
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  // This component doesn't render anything
  return null;
}
