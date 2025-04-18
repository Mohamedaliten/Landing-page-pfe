import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Since this is a Next.js project, this file is likely legacy code.
// We'll create a simple version that doesn't depend on react-router-dom.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div>
        <Index />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
