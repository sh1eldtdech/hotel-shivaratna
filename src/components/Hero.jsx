import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/hotelData';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward (next), -1 for backward (prev)

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : dir > 0 ? '-100%' : 0,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 1.0 },
            opacity: { duration: 0.8 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Ken Burns Effect (Slow scale-up) */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 6, ease: 'linear' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
          {/* Dark Overlay mask */}
          <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[1px]" />

          {/* Hero Content (Arched Panel) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 text-center z-10 pt-20">
            <div className="max-w-2xl w-full px-6 md:px-16 py-12 flex flex-col items-center transition-all duration-300">


              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight tracking-wider uppercase font-serif">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              <p className="text-xs md:text-sm text-neutral-300 font-sans tracking-wide max-w-lg mx-auto leading-relaxed font-light mb-8">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('rooms');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
                  }
                }}
                className="bg-gold text-neutral-950 font-sans font-medium text-[10px] md:text-xs uppercase tracking-widest px-8 md:px-10 py-3.5 md:py-4 hover:bg-gold-light transition-all duration-300 shadow-gold-glow"
              >
                Discover Rooms
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-gold hover:text-white p-2 transition-all duration-300"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-gold hover:text-white p-2 transition-all duration-300"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 stroke-[1px]" />
      </button>

      {/* Slide Counter (Bottom Right) */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 text-white font-sans text-sm md:text-base tracking-widest select-none flex items-center">
        <span className="font-medium text-white">{currentSlide + 1}</span>
        <span className="text-neutral-500 mx-2">/</span>
        <span className="text-neutral-400">{HERO_SLIDES.length}</span>
      </div>
    </div>
  );
};

export default Hero;
