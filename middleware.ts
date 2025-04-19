import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook"],
  
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/api/public"],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/nextjs/middleware for more information
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};