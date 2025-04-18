'use client';

import { ClerkProvider } from '@clerk/nextjs';

export default function ClerkProviderWithSSR({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}