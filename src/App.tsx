import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

import { LoaderScreen } from './components/common/LoaderScreen';
import { GlobalCursor } from './components/common/GlobalCursor';
import { ScrollToTop } from './components/common/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
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

      {/* GLOBAL CURSOR MUST LIVE INSIDE STABLE DOM */}
      <GlobalCursor />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}