'use client';
 
import { useEffect } from 'react';
import { Flame } from 'lucide-react';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error caught:', error);
  }, [error]);
 
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
          <Flame className="h-16 w-16 text-orange-500 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            We're sorry, but something went wrong. Our team has been notified.
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Try again
          </button>
          <a 
            href="/"
            className="mt-4 text-orange-500 hover:underline"
          >
            Return to home page
          </a>
        </div>
      </body>
    </html>
  );
}