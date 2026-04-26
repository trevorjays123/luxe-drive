import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Fleet from "./pages/Fleet.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route
            path="/fleet/:slug"
            element={
              <ComingSoon
                title="Vehicle Details"
                description="Full vehicle detail pages with pricing and overview sections are coming in the next stage."
                path="/fleet"
              />
            }
          />
          <Route
            path="/services"
            element={
              <ComingSoon
                title="Our Services"
                description="Airport transfers, corporate chauffeur, weddings, city tours and inter-state travel."
                path="/services"
              />
            }
          />
          <Route
            path="/about"
            element={
              <ComingSoon
                title="About Whyte Cars"
                description="Nigeria's editorial chauffeur house — our story, values and people."
                path="/about"
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ComingSoon
                title="Contact & Booking"
                description="Reach us by phone, WhatsApp, or our booking form on the home page."
                path="/contact"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
