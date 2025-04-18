import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal middleware that doesn't use any Clerk imports at all
 * to avoid Edge Function compatibility issues.
 */
export default function middleware(request: NextRequest) {
  // Simply pass through all requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/:path*',
  ],
};
