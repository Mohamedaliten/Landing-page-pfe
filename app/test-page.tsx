"use client";

import Link from "next/link";

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">WildfireGuardian Test Page</h1>
      <p className="text-xl mb-8">If you can see this page, the basic site is working!</p>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link 
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Go to Home Page
        </Link>
        
        <Link 
          href="/sign-in"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Sign In
        </Link>
        
        <Link 
          href="/sign-up"
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}