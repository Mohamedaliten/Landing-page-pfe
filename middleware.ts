import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const publicPaths = ["/", "/sign-in", "/sign-up", "/sso-callback", "/api"];

function isPublic(path: string) {
  return publicPaths.some(publicPath => {
    if (publicPath === "/api" && path.startsWith("/api")) {
      return true;
    }
    return path === publicPath;
  });
}

// Use a simpler middleware approach that doesn't use unsupported modules
export default function middleware(request: NextRequest) {
  // Skip middleware for public paths to reduce Edge runtime issues
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const { userId } = getAuth(request);
  
  // If user is authenticated, allow the request
  if (userId) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the sign-in page
  const signInUrl = new URL("/sign-in", request.url);
  signInUrl.searchParams.set("redirect_url", request.nextUrl.pathname);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: [
    '/:path*',
  ],
};