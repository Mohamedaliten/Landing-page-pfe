"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after component mounts
    setIsLoaded(true);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Simple landing page to test if basic functionality works
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple navbar */}
      <header className="p-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WildfireGuardian</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/sign-in" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/test-page" className="text-blue-600 hover:underline">
                  Test Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-grow">
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold mb-6">Advanced Wildfire Detection & Prediction</h2>
            <p className="text-xl mb-10">
              Next-generation technology to monitor, detect, and predict wildfires to protect communities and natural resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/sign-up" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/map"
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-md text-lg font-medium transition-colors" 
              >
                View Map
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <p className="text-center">© {new Date().getFullYear()} WildfireGuardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}