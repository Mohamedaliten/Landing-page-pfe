/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['randomuser.me'],
    unoptimized: true, // For static exports
  },
  // Enable static optimization for certain paths
  experimental: {
    // Optimize for faster builds on Vercel
    optimizePackageImports: ['@clerk/nextjs'],
  },
  // Disable server-side static optimization for auth pages
  // to ensure they only run on client side
  staticPageGenerationTimeout: 120,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
