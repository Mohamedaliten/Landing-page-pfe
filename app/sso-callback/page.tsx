'use client';

import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SSOCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState('Processing authentication...');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Handle callback when component mounts
    const processAuth = async () => {
      try {
        setStatus('Initializing authentication...');
        
        // Dynamic import so this only runs on client side
        const { useClerk } = await import('@clerk/nextjs');
        const clerk = useClerk();
        
        if (!clerk || !clerk.loaded) {
          setStatus('Authentication system is loading...');
          return;
        }
        
        // Handle the callback
        await clerk.handleRedirectCallback({
          afterSignInUrl: '/dashboard',
          afterSignUpUrl: '/dashboard',
        });
        
        // If we reach here, it means the redirection didn't happen
        // So we should redirect manually
        router.push('/dashboard');
      } catch (error) {
        console.error('Error handling callback:', error);
        setStatus('Authentication failed. Redirecting to sign in...');
        
        // Redirect to sign-in after delay
        setTimeout(() => {
          router.push('/sign-in');
        }, 2000);
      }
    };
    
    if (mounted) {
      processAuth();
    }
  }, [router, mounted]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Flame className="h-12 w-12 text-orange-500 mb-6 animate-pulse" />
      <h1 className="text-2xl font-bold mb-2">Authenticating...</h1>
      <p className="text-gray-500">{status}</p>
    </div>
  );
}