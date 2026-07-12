import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { districtLinks } from '../data/districtRoutes';
import { districtsData } from '../data/districtsData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Travel', path: '/travel' },
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
          <Link 
            to="/" 
            className="flex flex-col items-center group cursor-pointer"
          >
            <span className="font-serif text-2xl md:text-3xl text-gold tracking-[0.2em] font-medium transition-colors duration-300 group-hover:text-gold-light">
              SHIVARATNA
            </span>
            <span className="text-[10px] text-neutral-400 tracking-[0.5em] -mt-1 font-sans">
              HOTEL
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
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
                      {link.name === 'Travel' && (
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

                {/* Travel Mega Menu */}
                {link.name === 'Travel' && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[700px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t-2 border-gold p-8 flex gap-8 z-50 cursor-default">
                    <div className="w-1/3 flex flex-col space-y-4 border-r border-neutral-100 pr-4">
                      <h4 className="font-serif text-2xl text-neutral-900 mb-2">Districts</h4>
                      {districtLinks.map(dLink => (
                        <Link key={dLink.id} to={dLink.to} className="text-neutral-500 hover:text-gold text-sm font-sans transition-colors block">
                          {dLink.name}
                        </Link>
                      ))}
                    </div>
                    <div className="w-2/3 grid grid-cols-2 gap-4">
                      {districtLinks.slice(0, 4).map((dLink, idx) => {
                        const district = districtsData[dLink.id];
                        const cardImage = district.topAttractions?.[0]?.img || district.heroImage;
                        return (
                          <Link key={dLink.id} to={dLink.to} className="relative group/card overflow-hidden rounded bg-neutral-50 block shadow-sm hover:shadow-md transition-shadow">
                            <img src={cardImage} alt={district.name} className="w-full h-28 object-cover group-hover/card:scale-105 transition-transform duration-500" />
                            <div className="absolute top-2 left-2 bg-gold/90 text-neutral-950 text-[10px] uppercase font-bold px-2 py-1">
                              {idx < 2 ? 'Popular' : 'Explore'}
                            </div>
                            <div className="p-2 text-center border-t border-neutral-100">
                              <h5 className="font-serif text-sm font-medium text-neutral-900">{district.name}</h5>
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

          {/* Reservation Button & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+919999999999"
              className="flex items-center text-neutral-300 hover:text-gold text-xs tracking-wider font-sans transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-gold mr-2" />
              +91 99999 99999
            </a>
            <Link
              to="/contact"
              className="flex items-center bg-transparent border border-gold text-gold hover:bg-gold hover:text-neutral-950 px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-sans font-medium"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Reservation
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-gold transition-colors duration-300 p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-x-0 top-[70px] bg-neutral-950/95 backdrop-blur-lg border-b border-gold/10 z-40 md:hidden py-6 px-6"
          >
            <div className="flex flex-col space-y-5 text-left">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-left font-sans text-base tracking-widest uppercase py-1 border-b border-neutral-900 block ${
                      isActive
                        ? 'text-gold pl-2 font-medium'
                        : 'text-neutral-400 hover:text-gold pl-0 transition-all duration-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <a
                  href="tel:+919999999999"
                  className="flex items-center text-neutral-400 hover:text-gold text-sm tracking-wider font-sans"
                >
                  <Phone className="w-4 h-4 text-gold mr-3" />
                  +91 99999 99999
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gold text-neutral-950 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-all duration-300 block"
                >
                  Book Reservation
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
