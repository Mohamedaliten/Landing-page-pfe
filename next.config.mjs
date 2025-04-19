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
  // Server-side rendering configuration
  experimental: {
    // Optimize for faster builds on Vercel
    optimizePackageImports: ['@clerk/nextjs'],
  },
  // Clerk-specific configuration
  transpilePackages: ['@clerk/nextjs'], 
  
  // Runtime configuration
  eslint: {
    // Ignore rule violations during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  }
};

export default nextConfig;