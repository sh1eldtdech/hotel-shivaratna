import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function DestinationStoryScroll({ destinations }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // We'll create refs for each text section to observe them
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when the item is in the middle of the screen
      threshold: 0
    };

    destinations.forEach((_, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      }, observerOptions);

      if (sectionRefs.current[index]) {
        observer.observe(sectionRefs.current[index]);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [destinations]);

  return (
    <div className="relative bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left / Top Side: Pinned Image */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 h-[50vh] lg:h-[calc(100vh-6rem)] flex items-center justify-center pt-10 lg:pt-0">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden shadow-premium">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={destinations[activeIndex].image}
                  alt={destinations[activeIndex].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-neutral-950/10" />
            </div>
          </div>

          {/* Right Side: Scrolling Text Content */}
          <div className="lg:w-1/2 py-[10vh] lg:py-[30vh]">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                ref={el => sectionRefs.current[index] = el}
                className="min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-16 py-12"
              >
                <motion.div
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0.3,
                    x: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold font-serif text-2xl md:text-3xl italic">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-12 bg-gold/50" />
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-5xl text-neutral-900 mb-6 leading-tight">
                    {destination.name}
                  </h3>
                  
                  <p className="text-neutral-600 font-sans font-light text-base md:text-lg leading-relaxed mb-8">
                    {destination.description}
                  </p>
                  
                  {destination.distance && (
                    <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-gold font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {destination.distance}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
