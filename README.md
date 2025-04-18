# WildfireGuardian Frontend

This is the frontend application for WildfireGuardian, a next-generation wildfire detection and prediction system.

## Deployment Notes

### Vercel Deployment

When deploying to Vercel, be aware of the following:

1. **Edge Function Compatibility**: Clerk's server-side authentication functions aren't fully compatible with Vercel Edge Functions. The middleware has been simplified to avoid these issues.

2. **Server Components**: Authentication components have been updated to load Clerk hooks only on the client side to prevent "can only be used within ClerkProvider" errors during server-side rendering.

3. **Dynamic Imports**: For pages that use Clerk hooks, we use dynamic imports to ensure they're only loaded on the client side after hydration.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
