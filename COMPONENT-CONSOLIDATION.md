# Component Consolidation Guide

This document explains the consolidation of component folders in the WildfireGuardian application.

## Component Structure

All components have been consolidated into a single location:

```
/frontend/src/components/
```

## Import Path Updates

All import paths have been updated to use the consolidated location:

```typescript
// Before
import { Button } from "@/components/ui/button";
import AuthRedirect from "@/components/auth/AuthRedirect";

// After
import { Button } from "@/src/components/ui/button";
import AuthRedirect from "@/src/components/auth/AuthRedirect";
```

## Component Organization

The components are organized into the following structure:

1. **UI Components**: Basic building blocks (`/src/components/ui/`)
   - Buttons, forms, inputs, etc.

2. **Feature Components**: Specific features (`/src/components/[feature]/`)
   - `/src/components/auth/` - Authentication components
   - `/src/components/system/` - System monitoring components
   - `/src/components/map/` - Map-related components
   - `/src/components/alerts/` - Alert notification components

3. **Page Sections**: Landing page sections (`/src/components/`)
   - HeroSection, FeaturesSection, etc.

4. **Layout Components**: Layout-related components (`/src/components/`)
   - Navbar, Footer, etc.

## Authentication Components

Authentication components are now located in `/src/components/auth/`:

- `AuthRedirect.tsx`: Redirects authenticated users away from auth pages
- `ClerkProviderWithSSR.tsx`: Provides Clerk authentication with SSR support

## "Get Started" Functionality

The "Get Started" buttons in HeroSection and CTASection have been updated to redirect to the sign-in page:

```typescript
const handleGetStarted = () => {
  router.push('/sign-in');
};
```

## Next Steps

1. Remove the old components folder (`/frontend/components/`) after ensuring all components work properly
2. Update any remaining references to the old component paths
3. Test all functionality to ensure the consolidation did not break any features

