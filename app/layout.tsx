import type { Metadata } from "next";
import "./globals.css";
import "../public/styles/leaflet.css";
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/src/components/ui/sonner";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { ThemeProvider } from "@/src/components/theme-provider";
import ClerkProviderWithSSR from "@/src/components/auth/ClerkProviderWithSSR";

export const metadata: Metadata = {
  title: "WildfireGuardian - Advanced Wildfire Detection & Prediction",
  description: "Next-generation wildfire detection and prediction system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClerkProviderWithSSR>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <TooltipProvider>
              {children}
              <Toaster />
              <SonnerToaster />
            </TooltipProvider>
          </ThemeProvider>
        </ClerkProviderWithSSR>
      </body>
    </html>
  );
}