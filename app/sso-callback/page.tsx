'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Flame } from 'lucide-react';

export default function SSOCallbackPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Force redirect to dashboard after a short timeout (500ms)
    // This ensures we don't wait for Clerk's automatic redirect which can be slow
    const redirectTimer = setTimeout(() => {
      router.push('/dashboard');
    }, 500);
    
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Flame className="h-12 w-12 text-orange-500 mb-4 animate-pulse" />
      <h1 className="text-2xl font-bold mb-2">Processing your authentication...</h1>
      <p className="text-gray-500">Redirecting you to dashboard...</p>
    </div>
  );
}