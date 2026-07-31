import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3 premium high-quality Himalayan / luxury hotel images
const HERO_SLIDES = [
  {
    id: 1,
    name: 'Himalayan Landscape',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    name: 'Hotel Shivaratna',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    name: 'Rinchenpong Experience',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1920&q=80',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayTimer = useRef(null);

  // Set up autoplay
  useEffect(() => {
    if (isPlaying) {
      autoplayTimer.current = setInterval(() => {
        nextSlide();
      }, 5500); // 5.5 seconds interval
    }
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleInteraction = (action) => {
    setIsPlaying(false); // Pause autoplay when interacting
    action();
  };

  // Variants for initial text load animations (micro-interactions on mount)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden bg-neutral-950 select-none font-sans"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Subtle continuous Ken Burns zoom effect */}
          <motion.div
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Strong Black Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/90 z-10" />

      {/* Content Area - Perfectly Centered Horizontally & Vertically */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 text-center z-20 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Welcome Label - small uppercase gold */}
          <motion.span
            variants={itemVariants}
            className="text-gold uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-4 block"
          >
            Welcome to Hotel Shivaratna
          </motion.span>

          {/* Heading - large serif with generous letter-spacing */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-serif text-white font-normal leading-tight tracking-[0.18em] mb-6 uppercase text-center"
          >
            Live Your Paradise
          </motion.h1>

          {/* Description - elegant white typography */}
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm lg:text-base text-white/90 tracking-widest max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            Your peaceful mountain retreat in the heart of Rinchenpong, West Sikkim, surrounded by breathtaking Himalayan views and authentic Sikkimese hospitality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
          >
            {/* Discover Rinchenpong - Transparent / glass-style black button with gold border */}
            <Link
              to="/explore-rinchenpong"
              className="px-8 py-4 border border-gold/50 text-white bg-black/45 backdrop-blur-md text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-neutral-950 hover:border-gold transition-all duration-500 rounded-sm font-medium w-full sm:w-[230px] text-center"
            >
              Discover Rinchenpong
            </Link>

            {/* Discover Rooms - Solid gold button with black text */}
            <Link
              to="/rooms"
              className="px-8 py-4 bg-gold text-neutral-950 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(197,168,128,0.5)] text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-sm font-medium w-full sm:w-[230px] text-center"
            >
              Discover Rooms
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Side Navigation Controls - Minimal Gold outlines */}
      <button
        onClick={() => handleInteraction(prevSlide)}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-gold-light hover:border-gold hover:bg-gold/5 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 stroke-[1.5px]" />
      </button>
      <button
        onClick={() => handleInteraction(nextSlide)}
        aria-label="Next Slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-gold-light hover:border-gold hover:bg-gold/5 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 stroke-[1.5px]" />
      </button>

      {/* Subtle Vertical EXPLORE Element (Bottom Left) */}
      <div className="absolute bottom-8 left-8 md:left-12 z-30 hidden md:flex flex-col items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.4em] text-gold select-none [writing-mode:vertical-lr] rotate-180">
          EXPLORE
        </span>
        <div className="w-[1px] h-14 bg-gold/60" />
      </div>

      {/* Pagination Indicators - Bottom Center - Thin Gold progress lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleInteraction(() => setCurrentSlide(index))}
            aria-label={`Go to slide ${index + 1}`}
            className="relative py-3 focus:outline-none"
          >
            {/* Base line */}
            <div className="h-[2px] w-12 bg-white/20 transition-colors duration-300 hover:bg-gold/30" />
            
            {/* Sliding Active line */}
            {currentSlide === index && (
              <motion.div
                layoutId="activeSlideBar"
                className="absolute top-3 left-0 right-0 h-[2px] bg-gold"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter - Bottom Right (01 / 03) */}
      <div className="absolute bottom-10 right-8 md:right-12 z-30 flex items-center text-xs md:text-sm tracking-[0.25em] text-white/50">
        <span className="font-semibold text-gold">0{currentSlide + 1}</span>
        <span className="mx-2 text-white/20">/</span>
        <span>0{HERO_SLIDES.length}</span>
      </div>
    </div>
  );
};

export default Hero;
