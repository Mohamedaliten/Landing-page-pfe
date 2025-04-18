import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A very simple middleware that doesn't use any Clerk imports
// to avoid Edge Function compatibility issues
export default function middleware(request: NextRequest) {
  // Simply pass all requests through to avoid Edge Function issues
  return NextResponse.next();
}

// Keep the matcher minimal to avoid regex capturing group errors
export const config = {
  matcher: ['/dashboard/:path*'],
};
