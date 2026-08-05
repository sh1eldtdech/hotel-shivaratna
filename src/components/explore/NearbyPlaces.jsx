import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NearbyPlaceCard from './NearbyPlaceCard';
import { NEARBY_PLACES, NEARBY_PLACES_CATEGORIES } from '../../data/exploreRinchenpong';

export default function NearbyPlaces() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlaces = activeCategory === "All" 
    ? NEARBY_PLACES 
    : NEARBY_PLACES.filter(place => place.category === activeCategory);

  return (
    <section className="py-24 bg-luxury-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase font-sans tracking-[0.3em] text-xs font-semibold mb-4 block"
          >
            Discover More
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-neutral-900 mb-6"
          >
            Explore Nearby Hidden Gems
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 font-sans font-light text-base md:text-lg"
          >
            Discover beautiful attractions and experiences around Rinchenpong and West Sikkim.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {NEARBY_PLACES_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-neutral-950 font-medium shadow-gold-glow'
                  : 'border border-neutral-300 text-neutral-600 hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlaces.map(place => (
              <NearbyPlaceCard key={place.id} place={place} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPlaces.length === 0 && (
          <div className="text-center font-sans text-neutral-500 py-12">
            No places found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
