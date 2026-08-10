import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout components — always loaded (critical)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingContact from './components/FloatingContact';

// Pages — code split via React.lazy() for smaller initial bundle
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Rooms = lazy(() => import('./pages/Rooms'));
const RoomDetail = lazy(() => import('./pages/RoomDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Travel = lazy(() => import('./pages/Travel'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ExploreRinchenpong = lazy(() => import('./pages/ExploreRinchenpong'));
const Dining = lazy(() => import('./pages/Dining'));
const WorkstationLounge = lazy(() => import('./pages/WorkstationLounge'));

// Lightweight page skeleton shown while lazy chunks are loading
const PageSkeleton = () => (
  <div className="min-h-screen bg-luxury-cream animate-pulse" aria-hidden="true" />
);

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-luxury-cream text-neutral-800 font-sans flex flex-col justify-between">
        
        {/* Sticky Global Top Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <div className="flex-grow">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/travel/:slug" element={<Travel />} />
               <Route path="/explore-rinchenpong" element={<ExploreRinchenpong />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/workstation-lounge" element={<WorkstationLounge />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global Footer */}
        <Footer />
        <BackToTop />
        <FloatingWhatsApp />
        <FloatingContact />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
