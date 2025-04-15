import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/src/components/ui/sonner";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { ThemeProvider } from "@/src/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

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
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <TooltipProvider>
              <Toaster />
              <SonnerToaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
