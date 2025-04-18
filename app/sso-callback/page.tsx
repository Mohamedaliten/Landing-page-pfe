'use client';

import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SSOCallback() {
  const [status, setStatus] = useState('Processing authentication...');
  const [clerkLoaded, setClerkLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initialize handling only on client side
    const initClerk = async () => {
      try {
        setStatus('Initializing authentication...');
        
        // Wait for Clerk to be available on window
        const waitForClerk = () => {
          if ((window as any).__clerk_client) {
            handleCallback();
            return;
          }
          
          setTimeout(waitForClerk, 100);
        };
        
        const handleCallback = async () => {
          try {
            const client = (window as any).__clerk_client;
            
            if (!client) {
              setStatus('Authentication client not available');
              return;
            }
            
            setClerkLoaded(true);
            
            // Handle the callback
            await client.handleRedirectCallback({
              afterSignInUrl: '/dashboard',
              afterSignUpUrl: '/dashboard',
            });
            
            // Redirect is handled by Clerk
          } catch (error) {
            console.error('Error handling callback:', error);
            setStatus('Authentication failed. Redirecting to sign in...');
            
            // Redirect to sign-in after delay
            setTimeout(() => {
              router.push('/sign-in');
            }, 2000);
          }
        };
        
        waitForClerk();
      } catch (error) {
        console.error('Failed to initialize clerk:', error);
        setStatus('Authentication system unavailable');
      }
    };
    
    initClerk();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Flame className="h-12 w-12 text-orange-500 mb-6 animate-pulse" />
      <h1 className="text-2xl font-bold mb-2">Authenticating...</h1>
      <p className="text-gray-500">{status}</p>
    </div>
  );
}