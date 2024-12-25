import { HashRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load your pages
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const FeaturesPage = lazy(() => import('./pages/Features'));
const DownloadPage = lazy(() => import('./pages/Download'));
const DevelopersPage = lazy(() => import('./pages/Developers'));
const DonatePage = lazy(() => import('./pages/Donate'));
const GalleryPage = lazy(() => import('./pages/Gallery'));

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-cornflower-blue" />
    </div>
  );
}

// AppRoutes component with HashRouter
export function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
