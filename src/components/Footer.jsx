import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-200 font-sans border-t border-gold/10">
      
      {/* Upper Footer: Logo and Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Logo and About */}
          <div className="lg:col-span-4 text-left space-y-6">
            <Link to="/" className="flex items-center cursor-pointer group">
              <img
                src={logo}
                alt="Hotel Shivaratna Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-300">
              Hotel Shivaratna is your peaceful mountain retreat in the heart of Rinchenpong, West Sikkim — offering comfort, nature, and authentic Sikkimese hospitality.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              {/* YouTube */}
              <a href="https://www.youtube.com/@ShivaRatnaHotel" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1L2oRvPjtn/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/hotel_shivaratna_official?igsh=MTZ3bDNxeGhlb2RsYQ==" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-gold transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
              <Link to="/rooms" className="hover:text-gold text-left transition-colors duration-300">Rooms &amp; Suites</Link>
              <Link to="/travel" className="hover:text-gold text-left transition-colors duration-300">Travel Guide</Link>
              <Link to="/gallery" className="hover:text-gold text-left transition-colors duration-300">Gallery</Link>
              <Link to="/explore-rinchenpong" className="hover:text-gold text-left transition-colors duration-300">Explore Rinchenpong</Link>
              <Link to="/contact" className="hover:text-gold text-left transition-colors duration-300">Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white">Contact Info</h4>
            <div className="space-y-3 text-xs font-light text-neutral-300">
              <p className="leading-relaxed">
                Hotel Shivaratna, Rinchenpong,<br />
                West Sikkim — 737121, India
              </p>
              <p>
                <a href="tel:+919733092426" className="hover:text-gold transition-colors">+91 97330 92426</a><br />
                <a href="tel:+917300643227" className="hover:text-gold transition-colors">+91 73006 43227</a><br />
                <a href="mailto:hotelshivaratna@gmail.com" className="hover:text-gold transition-colors">hotelshivaratna@gmail.com</a>
              </p>
              <p>
                <a href="https://wa.me/919733092426" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Motto */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white">Our Motto</h4>
            <p className="text-xs font-light leading-relaxed text-neutral-300 italic">
              "Live your Paradise"
            </p>
            <div className="w-10 h-[1.5px] bg-gold" />
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="border-t border-neutral-900 bg-neutral-950/50 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-300 select-none text-center lg:text-left">
          <p>© 2026 Hotel Shivaratna. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors duration-300">Terms & Conditions</Link>
          </div>
          
          <p className="flex items-center justify-center gap-1">
            Made with <span className="text-red-500 text-sm">❤️</span> in Gangtok · Designed by <a href="https://sh1eldtech.com/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium ml-1 hover:text-gold-light transition-colors">SH1ELD Tech</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
