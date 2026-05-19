import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoaderScreen } from './components/common/LoaderScreen';
import { ScrollToTop } from './components/common/ScrollToTop';
import { initImageOptimization } from './utils/imageOptimization';

/* ===================================================
   ROUTE-BASED CODE SPLITTING
   Lazy load pages for better initial load performance
   =================================================== */
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

/* Loading fallback component */
function PageLoader() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
      <div style={{ animation: 'pulse 2s infinite', color: 'var(--muted)' }}>Loading...</div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.classList.contains('light') ? 'dark' : 'light';
    html.className = current;
    localStorage.setItem('theme', current);
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.className = theme;
  };

  useEffect(() => {
    // Init theme after loader
    const timer = window.setTimeout(() => {
      initTheme();

      // Initialize image optimization
      initImageOptimization();

      // Listen for system changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        if (!localStorage.getItem('theme')) {
          document.documentElement.className = mediaQuery.matches ? 'dark' : 'light';
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      setIsLoading(false);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderScreen isVisible />;
  }

  return (
    <BrowserRouter>
      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<AboutPage toggleTheme={toggleTheme} />} />
          <Route path="/services" element={<ServicesPage toggleTheme={toggleTheme} />} />
          <Route path="/projects" element={<ProjectsPage toggleTheme={toggleTheme} />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<ContactPage toggleTheme={toggleTheme} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
