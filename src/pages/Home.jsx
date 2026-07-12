import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, ArrowRight, Play, Utensils, Waves, Dumbbell, Sparkles, Briefcase, Shirt, X } from 'lucide-react';
import Hero from '../components/Hero';
import { ROOMS_DATA, GALLERY_IMAGES, CORE_FACILITIES } from '../data/hotelData';

const AnimatedCounter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // easeOutQuad
      const easedProgress = progress * (2 - progress);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const iconMap = {
  Utensils: Utensils,
  Waves: Waves,
  Dumbbell: Dumbbell,
  Flower: Sparkles,
  Briefcase: Briefcase,
  Shirt: Shirt,
};

const Home = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Highlights only first 3 rooms for Homepage preview
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <div>
      {/* Hero Carousel */}
      <Hero />

      {/* Welcome & 6 Facilities Section (Section 2 of Almaris Mockup) */}
      <section id="about-intro" className="pt-32 pb-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Welcome Intro row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Curved Arches (Left) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold/15 rounded-full -z-10 pointer-events-none hidden md:block" />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="arch-frame shadow-premium border border-gold/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
                  alt="Shivaratna Lobby"
                  className="w-full h-[280px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="arch-frame shadow-premium border border-gold/10 mt-12 md:mt-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80"
                  alt="Shivaratna Gourmet Dining"
                  className="w-full h-[280px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Intro Copy (Right) */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Welcome to Shivaratna
              </span>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 font-serif">
                Exceptional Hospitality and Unmatched Relaxation
              </h2>
              
              <div className="flex items-center space-x-3 bg-gold/5 border border-gold/20 px-4 py-2 w-fit">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-neutral-800 tracking-wider font-sans">
                  4.9 out of 5 (1,200+ Reviews)
                </span>
              </div>

              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Nestled at the crossroads of cultural grandeur and modern luxury, Shivaratna Hotel offers an oasis of calm. Our premium accommodations, custom curated spaces, and signature cuisines are tailored to provide a home away from home.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center text-xs text-gold hover:text-gold-dark uppercase tracking-widest font-sans font-semibold group pt-2 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 6 Facilities Cards (Replicating Section 2 details) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-28">
            {CORE_FACILITIES.map((facility, index) => {
              const IconComponent = iconMap[facility.icon] || Sparkles;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gold/10 hover:border-gold/30 p-8 text-center md:text-left transition-all duration-300 shadow-premium flex flex-col items-center md:items-start group"
                >
                  <div className="bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-neutral-950 transition-colors duration-500 mb-6 text-gold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-neutral-900 font-serif mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Quote Block Banner (Section 3 of Almaris Mockup) */}
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <span className="text-gold text-3xl font-serif">“</span>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-200 leading-relaxed font-light italic"
          >
            Experience unparalleled luxury and personalized service at Shivaratna Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Shivaratna Hospitality
          </span>
        </div>
      </div>

      {/* Accommodation Rooms Showcase with Curved Arches (Section 4 of Almaris Mockup) */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Rooms & Suites
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif mt-2">
              Accommodation
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => navigate('/rooms')}
              >
                {/* Curved Arch Image Container */}
                <div className="arch-frame w-full aspect-[4/5] relative overflow-hidden border border-gold/15 shadow-premium">
                  {/* Room Image */}
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Bottom gradient for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Price Tag Overlay at the bottom (visible by default, hidden on hover) */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-950/85 backdrop-blur-md text-white font-sans text-xs px-4 py-2 border border-gold/30 z-20 whitespace-nowrap tracking-wider transition-opacity duration-500 group-hover:opacity-0">
                    ${room.price} <span className="text-neutral-400 font-light text-[9.5px]">/ Night</span>
                  </div>

                  {/* Hover Overlay - Gold fill from bottom to top */}
                  <div className="absolute inset-0 bg-[#b59473] flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-30">
                    <span className="text-white/80 text-sm font-sans font-light tracking-wider mb-1">
                      From
                    </span>
                    <span className="text-white text-4xl md:text-5xl font-serif font-normal tracking-wide mb-6">
                      ${room.price}
                    </span>
                    <span className="text-white text-[10px] md:text-xs font-sans font-medium uppercase tracking-[0.25em] border-b border-white/40 pb-1">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Room Info Below Card */}
                <h3 className="mt-6 text-xl font-serif text-neutral-950 font-medium group-hover:text-gold transition-colors duration-300">
                  {room.title}
                </h3>
                <p className="text-neutral-400 text-[10px] font-sans uppercase tracking-widest mt-1.5">
                  {room.size} | {room.guests} Guests
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Facilities Metrics Grid Section (Section 5 of Almaris Mockup) */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Exclusive Statistics
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
              Our Facilities
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Rooms Available Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[320px] md:h-[400px] overflow-hidden group shadow-premium border border-gold/15"
            >
              {/* Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80")' }}
              />
              <div className="absolute inset-0 bg-neutral-950/20" />
              
              {/* Bottom Gold Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 backdrop-blur-md border border-gold/20 p-5 flex items-center justify-between text-left">
                <div className="flex items-center space-x-5">
                  <span className="text-3xl md:text-4xl font-serif font-medium text-gold">
                    <AnimatedCounter value="120" />+
                  </span>
                  <div className="w-[1px] h-10 bg-gold/30" />
                  <div className="text-white">
                    <span className="text-xs font-semibold tracking-widest uppercase block font-sans">Rooms Available</span>
                    <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">Luxurious spaces catalogued</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Menu Selection Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[320px] md:h-[400px] overflow-hidden group shadow-premium border border-gold/15"
            >
              {/* Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80")' }}
              />
              <div className="absolute inset-0 bg-neutral-950/20" />
              
              {/* Bottom Gold Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 backdrop-blur-md border border-gold/20 p-5 flex items-center justify-between text-left">
                <div className="flex items-center space-x-5">
                  <span className="text-3xl md:text-4xl font-serif font-medium text-gold">
                    <AnimatedCounter value="105" />+
                  </span>
                  <div className="w-[1px] h-10 bg-gold/30" />
                  <div className="text-white">
                    <span className="text-xs font-semibold tracking-widest uppercase block font-sans">Menu Selection</span>
                    <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">Dishes prepared by master chefs</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Video Preview Banner Section (Section 6 of Almaris Mockup) */}
      <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80")' }}
        />
        <div className="absolute inset-0 bg-neutral-950/65" />
        
        {/* Play Circle Icon */}
        <div className="z-10 text-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoOpen(true)}
            className="w-16 h-16 md:w-20 md:h-20 bg-gold text-neutral-950 rounded-full flex items-center justify-center shadow-gold-glow relative group cursor-pointer"
          >
            {/* Pulse rings */}
            <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping group-hover:animate-none" />
            <Play className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5" />
          </motion.button>
          <div className="space-y-1">
            <span className="text-[9px] md:text-xs text-gold uppercase tracking-[0.35em] font-sans font-semibold block">
              Watch Preview Video
            </span>
            <span className="text-white font-serif text-sm font-medium tracking-wide">
              A Glimpse of Shivaratna Grandeur
            </span>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Grid Section (Section 7 of Almaris Mockup) */}
      <section className="py-24 bg-luxury-cream border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Stories & Moments
            </span>
            <h2 className="text-xl md:text-2xl font-medium text-neutral-950 font-serif mt-2 tracking-widest uppercase">
              @shivaratna_hotel_theme
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
          </div>

          {/* 8 Images Grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden aspect-square border border-gold/10 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <img
                  src={img}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/85 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-black max-w-4xl w-full aspect-video border border-gold/30 relative flex items-center justify-center"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gold flex items-center text-xs tracking-wider uppercase font-sans font-medium"
              >
                Close <X className="w-4 h-4 ml-1.5" />
              </button>
              
              {/* Embedded simulated video player */}
              <iframe
                title="Shivaratna Hotel Preview"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
