'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Flame, Map, Home, BarChart3, Settings } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

export default function MainNav() {
  const pathname = usePathname();
  
  const isActive = (path: string): boolean => {
    return pathname === path;
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[1000]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500" />
            <span className="text-lg font-semibold">BlazeDefend</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/dashboard" 
              className={`flex items-center gap-1.5 ${isActive('/dashboard') ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link 
              href="/map" 
              className={`flex items-center gap-1.5 ${isActive('/map') ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
            >
              <Map className="h-5 w-5" />
              <span>Map</span>
            </Link>
            
            <Link 
              href="/analytics" 
              className={`flex items-center gap-1.5 ${isActive('/analytics') ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            
            <Link 
              href="/settings" 
              className={`flex items-center gap-1.5 ${isActive('/settings') ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}
