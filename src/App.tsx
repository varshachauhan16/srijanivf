import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import About from "./pages/about-us.tsx";
import PallaviSingh from "./pages/doctor/pallavi-singh.tsx";
// import SantoshArjun from "./pages/doctor/santosh-arjun.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/doctor/pallavi-singh" element={<PallaviSingh />} />
          {/* <Route path="/doctor/santosh-arjun" element={<SantoshArjun />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
