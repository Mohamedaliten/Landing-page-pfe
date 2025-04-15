# Authentication Setup Instructions

This document provides instructions for setting up authentication with Clerk in the WildfireGuardian application.

## 1. Install Dependencies

First, you need to install the Clerk package:

```bash
npm install @clerk/nextjs
```

## 2. Environment Variables

The `.env` file already contains the necessary Clerk API keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FsbS1waWthLTYzLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_k7sTVnuaakPUba3ZcexFULCCGgegwhF6I6TFPTAhGC
```

## 3. Implementation Status

The following changes have been made:

- ✅ Added "Get Started" button in the Hero section that redirects to the sign-in page
- ✅ Updated the CTA section to redirect the form submission to the sign-in page
- ✅ Created the AuthRedirect component to handle redirecting authenticated users away from auth pages
- ✅ Added ClerkProvider to the root layout
- ✅ Created middleware for protected routes

## 4. What's Already Implemented

- Sign-in page (`/sign-in`)
- Sign-up page (`/sign-up`)
- SSO callback page (`/sso-callback`)
- Dashboard page (`/dashboard`)

## 5. Testing the Authentication Flow

After installing the dependencies, you can test the authentication flow:

1. Start the application: `npm run dev`
2. Click the "Get Started" button on the homepage
3. You should be redirected to the sign-in page
4. Sign in with the provided form or using social providers
5. After signing in, you should be redirected to the dashboard

## 6. Known Issues and Fixes

- If you encounter any issues with the Clerk authentication, ensure that:
  - The Clerk package is properly installed
  - The environment variables are correctly set
  - The ClerkProvider is properly wrapping the application

## 7. Next Steps

Once the authentication flow is working, you may want to:

1. Implement user profile and settings
2. Add role-based authorization
3. Create password reset functionality
4. Enhance the user onboarding process

