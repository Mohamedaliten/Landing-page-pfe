import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes that don't require authentication
const publicPaths = ["/", "/sign-in", "/sign-up", "/sso-callback"];

function isPublic(path: string) {
  return publicPaths.some(publicPath => path === publicPath || 
    path.startsWith("/api/") || 
    path.startsWith("/_next/") || 
    path.startsWith("/favicon.ico"));
}

// Simple middleware that doesn't use Clerk's server-side functions
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for public paths
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Check for auth token in cookies
  const hasAuthToken = request.cookies.has("__clerk_session");
  
  // If not authenticated, redirect to sign-in
  if (!hasAuthToken) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect_url", pathname);
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
