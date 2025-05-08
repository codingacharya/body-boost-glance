
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import History from "./pages/History";
import Records from "./pages/Records";
import Progress from "./pages/Progress";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/history" element={
            <Layout>
              <History />
            </Layout>
          } />
          <Route path="/records" element={
            <Layout>
              <Records />
            </Layout>
          } />
          <Route path="/progress" element={
            <Layout>
              <Progress />
            </Layout>
          } />
          {/* Empty placeholder routes for future development */}
          <Route path="/profile" element={
            <Layout>
              <div className="p-6">
                <h2 className="text-3xl font-bold">Profile</h2>
                <p className="text-muted-foreground mt-2">Profile page coming soon.</p>
              </div>
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <div className="p-6">
                <h2 className="text-3xl font-bold">Settings</h2>
                <p className="text-muted-foreground mt-2">Settings page coming soon.</p>
              </div>
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
