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

  if (!mounted) {
    // Return a skeleton or loading state
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}