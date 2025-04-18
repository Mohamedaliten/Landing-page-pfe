'use client';

import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

export default function SSOCallback() {
  const [isClientSide, setIsClientSide] = useState(false);
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    setIsClientSide(true);
    
    const handleCallback = async () => {
      try {
        const { useClerk } = await import('@clerk/nextjs');
        const clerk = useClerk();
        
        if (!clerk.loaded) {
          setStatus('Loading authentication...');
          return;
        }
        
        await clerk.handleRedirectCallback({
          afterSignInUrl: '/dashboard',
          afterSignUpUrl: '/dashboard',
        });
      } catch (error) {
        console.error('Error handling SSO callback:', error);
        setStatus('Authentication failed. Please try again.');
      }
    };
    
    handleCallback();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Flame className="h-12 w-12 text-orange-500 mb-6 animate-pulse" />
      <h1 className="text-2xl font-bold mb-2">Authenticating...</h1>
      <p className="text-gray-500">{status}</p>
    </div>
  );
}