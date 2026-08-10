import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { districtLinks } from '../data/districtRoutes';
import { districtsData } from '../data/districtsData';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTravelOpen, setMobileTravelOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Travel', path: '/travel', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileTravelOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          !isHomePage || isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-gold-glow'
            : 'bg-gradient-to-b from-neutral-950/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <img
              src={logo}
              alt="Hotel Shivaratna Logo"
              decoding="async"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links (Visible on lg and above) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-6">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-sans text-sm tracking-widest uppercase transition-colors duration-300 py-1 flex items-center gap-1 ${
                      isActive
                        ? 'text-gold font-medium'
                        : 'text-neutral-300 hover:text-gold-light'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-gold"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {/* Travel Mega Menu (Desktop) */}
                {link.hasDropdown && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-gold p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 z-50 cursor-default">
                    <div className="w-full lg:w-1/3 flex flex-col space-y-4 border-b border-neutral-100 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
                      <h4 className="font-serif text-2xl text-neutral-900 mb-2">Districts</h4>
                      <Link 
                        to="/explore-rinchenpong" 
                        className="text-gold font-medium hover:text-gold-dark text-sm font-sans transition-colors block mb-2 bg-gold/10 px-3 py-2 rounded-sm"
                      >
                        Explore Rinchenpong
                      </Link>
                      {districtLinks.map((dLink) => (
                        <Link key={dLink.id} to={dLink.to} className="text-neutral-500 hover:text-gold text-sm font-sans transition-colors block">
                          {dLink.name}
                        </Link>
                      ))}
                    </div>
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {districtLinks.slice(0, 4).map((dLink, idx) => {
                        const district = districtsData[dLink.id];
                        const cardImage = district?.topAttractions?.[0]?.img || district?.heroImage;
                        return (
                          <Link key={dLink.id} to={dLink.to} className="relative group/card overflow-hidden rounded bg-neutral-50 block shadow-sm hover:shadow-md transition-shadow">
                            {cardImage && (
                              <img src={cardImage} alt={district?.name} loading="lazy" decoding="async" className="w-full h-28 object-cover group-hover/card:scale-105 transition-transform duration-500" />
                            )}
                            <div className="absolute top-2 left-2 bg-gold/90 text-neutral-950 text-[10px] uppercase font-bold px-2 py-1">
                              {idx < 2 ? 'Popular' : 'Explore'}
                            </div>
                            <div className="p-2 text-center border-t border-neutral-100">
                              <h5 className="font-serif text-sm font-medium text-neutral-900">{district?.name}</h5>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="flex items-center bg-transparent border border-gold text-gold hover:bg-gold hover:text-neutral-950 px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-sans font-medium"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Now
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile/Tablet) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-gold transition-colors duration-300 p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] md:top-[76px] bg-neutral-950/95 backdrop-blur-lg border-b border-gold/10 z-40 lg:hidden py-6 px-6 max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="flex flex-col text-left">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-neutral-900">
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobileTravelOpen(!mobileTravelOpen)}
                        className="flex justify-between items-center w-full font-sans text-base tracking-widest uppercase py-4 text-neutral-400 hover:text-gold transition-all duration-300"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileTravelOpen ? 'rotate-180 text-gold' : ''}`} />
                      </button>
                      
                      {/* Mobile Submenu for Travel */}
                      <AnimatePresence>
                        {mobileTravelOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col space-y-3 pb-4 pl-4"
                          >
                            <Link to="/explore-rinchenpong" onClick={() => setIsOpen(false)} className="text-gold text-sm tracking-wider uppercase flex items-center gap-2">
                              <ChevronRight className="w-4 h-4" /> Explore Rinchenpong
                            </Link>
                            {districtLinks.map((dLink) => (
                              <Link 
                                key={dLink.id} 
                                to={dLink.to} 
                                onClick={() => setIsOpen(false)}
                                className="text-neutral-500 hover:text-gold text-sm tracking-wider uppercase flex items-center gap-2"
                              >
                                <ChevronRight className="w-4 h-4" /> {dLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `font-sans text-base tracking-widest uppercase py-4 block ${
                          isActive
                            ? 'text-gold font-medium'
                            : 'text-neutral-400 hover:text-gold transition-all duration-300'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
              
              <div className="pt-8 pb-4 flex flex-col space-y-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gold text-neutral-950 py-3.5 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-all duration-300 block rounded-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;