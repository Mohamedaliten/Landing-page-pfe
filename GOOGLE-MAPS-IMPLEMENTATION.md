# Google Maps Implementation Guide

This guide explains how to implement Google Maps in the WildfireGuardian application.

## 1. Google Maps API Setup

### 1.1. Create a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Navigate to "APIs & Services" > "Library"
4. Search for and enable "Maps JavaScript API"
5. Go to "APIs & Services" > "Credentials"
6. Create a new API key
7. Set up restrictions (recommended):
   - Application restrictions: HTTP referrers
   - Website restrictions: Add your domains (e.g., `localhost/*` for development)

### 1.2. Add API Key to Environment Variables

Add your Google Maps API key to your `.env` file:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## 2. Installation

Install the Google Maps React package:

```bash
npm install @react-google-maps/api
```

## 3. Implementation Details

### 3.1. Components Structure

The Google Maps implementation consists of two main components:

1. **SafeMapContainer**: A wrapper component that:
   - Dynamically imports the map component to avoid SSR issues
   - Provides a loading state
   - Passes the API key securely

2. **GoogleMapComponent**: The actual map component that:
   - Handles loading the Google Maps JavaScript API
   - Renders the map with markers for sensor nodes
   - Provides interactive info windows for each node
   - Adapts to different sizes (compact/full)

### 3.2. Key Features

- **Responsive Design**: The map adapts to both compact and full-size views
- **Custom Markers**: Different colors for regular and high-alert nodes
- **Interactive**: Click on markers to see detailed node information
- **Error Handling**: Graceful error states when maps can't load
- **Optimized Loading**: Dynamically loaded to improve initial page load time

## 4. Usage Examples

### 4.1. Basic Usage

```jsx
import SafeMapContainer from '@/src/components/map/SafeMapContainer';

export default function MapPage() {
  return (
    <div className="h-[500px] w-full">
      <SafeMapContainer />
    </div>
  );
}
```

### 4.2. Compact Mode

```jsx
import SafeMapContainer from '@/src/components/map/SafeMapContainer';

export default function DashboardWidget() {
  return (
    <div className="h-[200px] w-full">
      <SafeMapContainer compact={true} />
    </div>
  );
}
```

## 5. Troubleshooting

### 5.1. Map Not Loading

- Check if your API key is correctly set in the `.env` file
- Verify that your API key has the Maps JavaScript API enabled
- Check for any errors in the browser console

### 5.2. Markers Not Appearing

- Ensure the marker SVG files exist in `/public/images/`
- Check the network tab for any 404 errors loading marker assets

### 5.3. API Key Restrictions

- During development, make sure `localhost` is added to the allowed domains
- For production, add your production domain to the allowed domains

## 6. Security Considerations

- Keep your API key restricted to your domains
- Use environment variables to avoid committing API keys to your repository
- Consider setting up usage quotas in Google Cloud Console to avoid unexpected billing

## 7. Next Steps

- Add functionality to fetch real node data from your backend
- Implement map controls for filtering nodes by status
- Add clustering for handling many nodes
- Create a heatmap view for visualization of fire risk areas
