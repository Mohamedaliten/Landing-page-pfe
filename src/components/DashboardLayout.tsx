'use client';

import MainNav from './MainNav';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar (Always Visible) */}
      <MainNav />

      {/* Page Content Below Navbar */}
      <main className="flex-1 container mx-auto px-4 pt-20 pb-8">
        {/* Dashboard container */}
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 BlazeDefend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
