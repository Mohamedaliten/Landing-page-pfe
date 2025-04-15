'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { dark } from '@clerk/themes';

export default function ClerkProviderWithSSR({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const router = useRouter();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: 'bg-orange-500 hover:bg-orange-600 text-sm normal-case',
        },
      }}
      navigate={(to) => router.push(to)}
      // Adding additional performance optimizations
      loadingStrategy="lazy"
      // Set more aggressive timeouts for SSO operations
      timeoutOptions={{
        maxTimeoutMs: 5000, // 5 seconds max timeout for operations
      }}
    >
      {children}
    </ClerkProvider>
  );
}