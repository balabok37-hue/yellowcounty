import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Eager load main page for fastest initial render
import Index from "./pages/Index";

// Lazy load less common pages
const Documents = lazy(() => import("./pages/Documents"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminMachines = lazy(() => import("./pages/admin/AdminMachines"));
const AdminMachineEdit = lazy(() => import("./pages/admin/AdminMachineEdit"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const ProtectedRoute = lazy(() => import("./components/admin/ProtectedRoute"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/documents" element={
              <Suspense fallback={<PageLoader />}>
                <Documents />
              </Suspense>
            } />
            <Route path="/thank-you" element={
              <Suspense fallback={<PageLoader />}>
                <ThankYou />
              </Suspense>
            } />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={
              <Suspense fallback={<PageLoader />}>
                <AdminLogin />
              </Suspense>
            } />
            <Route path="/admin" element={
              <Suspense fallback={<PageLoader />}>
                <ProtectedRoute>
                  <AdminLayout><AdminDashboard /></AdminLayout>
                </ProtectedRoute>
              </Suspense>
            } />
            <Route path="/admin/machines" element={
              <Suspense fallback={<PageLoader />}>
                <ProtectedRoute>
                  <AdminLayout><AdminMachines /></AdminLayout>
                </ProtectedRoute>
              </Suspense>
            } />
            <Route path="/admin/machines/:id" element={
              <Suspense fallback={<PageLoader />}>
                <ProtectedRoute>
                  <AdminLayout><AdminMachineEdit /></AdminLayout>
                </ProtectedRoute>
              </Suspense>
            } />
            
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;