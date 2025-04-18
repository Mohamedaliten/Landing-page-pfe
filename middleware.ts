import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal middleware that doesn't use any Clerk imports at all
 * to avoid Edge Function compatibility issues.
 * 
 * This approach defers all authentication handling to client-side
 * or server components.
 */
export default function middleware(request: NextRequest) {
  // Simply pass through all requests
  // Authentication will be handled by client components
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths to ensure middleware runs but doesn't block
    '/:path*',
  ],
};
