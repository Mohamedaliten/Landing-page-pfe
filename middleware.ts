import { clerkMiddleware } from "@clerk/nextjs/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default clerkMiddleware((auth, req) => {
  // Define public routes that don't require authentication
  const publicPaths = ["/", "/sign-in", "/sign-up", "/sso-callback", "/api(.*)"];
  
  // Check if the request path matches any of the public paths
  const isPublicPath = publicPaths.some((path) => {
    if (path.includes("(.*)")) {
      const pathWithoutWildcard = path.replace("(.*)", "");
      return req.nextUrl.pathname.startsWith(pathWithoutWildcard);
    }
    return req.nextUrl.pathname === path;
  });

  // If the path is public, allow the request
  if (isPublicPath) {
    return;
  }
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
