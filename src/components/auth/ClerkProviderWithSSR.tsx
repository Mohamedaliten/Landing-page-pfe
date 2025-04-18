'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

export default function ClerkProviderWithSSR({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false);

  // Only render Clerk provider after component is mounted
  // This prevents hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, render children without Clerk
  if (!mounted) {
    // Return a minimal version without authentication wrapper
    return <div className="min-h-screen">{children}</div>;
  }

  // Client-side render with Clerk provider
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}