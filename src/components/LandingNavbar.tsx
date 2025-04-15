'use client';

import { Flame, User } from 'lucide-react';
import Link from 'next/link';
import { useAuth, UserButton } from '@clerk/nextjs';

export default function LandingNavbar() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500" />
          <span className="text-lg font-semibold">BlazeDefend</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="#features" className="hover:text-orange-500">Features</Link>
          <Link href="#about" className="hover:text-orange-500">About</Link>
          
          {isLoaded && isSignedIn ? (
            <div className="flex items-center gap-4">
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          ) : (
            <Link href="/sign-in" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}