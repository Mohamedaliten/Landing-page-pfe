'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { redirect, useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in if the user is not authenticated
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading or redirect if not authenticated
  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isSignedIn) {
    return null; // Return null while redirecting
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}
