import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-200 font-sans border-t border-gold/10">
      
      {/* Upper Footer: Logo and Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Logo and About */}
          <div className="lg:col-span-4 text-left space-y-6">
            <Link to="/" className="flex flex-col items-start cursor-pointer group">
              <span className="font-serif text-2xl text-gold tracking-[0.2em] font-medium transition-colors duration-300 group-hover:text-gold-light">
                SHIVARATNA
              </span>
              <span className="text-[10px] text-neutral-300 tracking-[0.5em] -mt-1 font-sans">
                HOTEL
              </span>
            </Link>
            <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-300">
              Shivaratna Hotel is a premium boutique destination dedicated to crafting absolute luxury, refined comfort, and exceptional experiences for our valued guests.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* Youtube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 text-xs font-light">
              <Link to="/" className="hover:text-gold text-left transition-colors duration-300">Home</Link>
              <Link to="/about" className="hover:text-gold text-left transition-colors duration-300">About Us</Link>
              <Link to="/rooms" className="hover:text-gold text-left transition-colors duration-300">Rooms & Suites</Link>
              <Link to="/contact" className="hover:text-gold text-left transition-colors duration-300">Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white">Contact Info</h4>
            <div className="space-y-3 text-xs font-light text-neutral-300">
              <p className="leading-relaxed">
                742 Evergreen Terrace, Shivaratna Hotel Lane, Bangalore, Karnataka - 560001
              </p>
              <p>
                T. +91 99999 99999<br />
                M. info@shivaratnahotel.com
              </p>
            </div>
          </div>

          {/* Luxury Motto */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white">Our Motto</h4>
            <p className="text-xs font-light leading-relaxed text-neutral-300 italic">
              "Exceptional Service, Premium Luxury, Memories that Last."
            </p>
            <div className="w-10 h-[1.5px] bg-gold" />
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="border-t border-neutral-900 bg-neutral-950/50 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-300 select-none text-center lg:text-left">
          <p>© 2026 Shivaratna Hotel. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors duration-300">Terms & Conditions</Link>
          </div>
          
          <p className="flex items-center justify-center gap-1">
            Made with <span className="text-green-500 text-sm">💚</span> in Sikkim. Powered by <a href="https://sh1eldtech.com/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium ml-1 hover:text-gold-light transition-colors">SH1ELD Tech</a>.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
