# WildfireGuardian Installation Guide

This guide will help you set up the WildfireGuardian application and ensure all dependencies are properly installed.

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

## Installation Steps

1. **Install Dependencies**

   Run the following commands in the project root directory:

   ```bash
   # Install authentication
   npm install @clerk/nextjs

   # Install map dependencies
   npm install leaflet @types/leaflet

   # Install UI dependencies (if not already installed)
   npm install sonner next-themes
   ```

2. **Environment Variables**

   Ensure the `.env` file contains the correct Clerk API keys:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FsbS1waWthLTYzLmNsZXJrLmFjY291bnRzLmRldiQ
   CLERK_SECRET_KEY=sk_test_k7sTVnuaakPUba3ZcexFULCCGgegwhF6I6TFPTAhGC
   ```

3. **Directory Structure**

   The project uses the following structure:
   - All components are in `/src/components/`
   - Pages are in `/app/`
   - Authentication is handled by Clerk

4. **Running the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

## Key Features and Routes

- `/`: Homepage with "Get Started" button that redirects to sign-in
- `/sign-in` and `/sign-up`: Authentication pages
- `/sso-callback`: Social login callback handling
- `/dashboard`: Main application dashboard (protected, requires authentication)

## Common Issues and Solutions

### Missing Dependencies

If you see errors about missing modules, install them:

```bash
npm install <missing-module-name>
```

### Client Component Errors

If you see errors about using hooks in server components, ensure the component has the `"use client"` directive at the top.

### Image Loading Errors

Make sure all referenced images exist in the `/public/images/` directory. We've included placeholder SVGs for:
- `/public/images/login.gif`
- `/public/images/signup.gif`

### Authentication Errors

Ensure Clerk is properly installed and configured. The application should redirect unauthenticated users trying to access the dashboard to the sign-in page.

## Testing Authentication Flow

1. Start the application
2. Click "Get Started" on the homepage
3. Sign in with test credentials (or create a new account)
4. You should be redirected to the dashboard after successful authentication

