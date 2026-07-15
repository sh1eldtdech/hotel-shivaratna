import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import Travel from './pages/Travel';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BackToTop from './components/BackToTop';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/:slug" element={<Travel />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
        <BackToTop />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
