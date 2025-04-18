import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A minimal middleware that doesn't attempt any auth checks
// This avoids Edge Function incompatibilities
export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

// No matcher means this will run on all routes
// But since we're just passing through, it shouldn't cause any issues