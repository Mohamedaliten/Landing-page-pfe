import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const publicRoutes = ["/", "/sign-in", "/sign-up", "/sso-callback"];

export default function middleware(request: NextRequest) {
  // Check if the path is a public route or API route
  const { pathname } = request.nextUrl;
  
  // Skip public routes
  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Get auth session
  const { userId } = getAuth(request);
  
  // If user is not signed in, redirect to sign-in page
  if (!userId) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect_url", pathname);
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
}

// Simpler matcher configuration
export const config = {
  matcher: [
    '/',
    '/:path*',
  ],
};
