import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

export default function NearbyPlaceCard({ place }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-lg overflow-hidden bg-white border border-neutral-100 hover:border-gold/30 transition-all duration-500 shadow-premium hover:shadow-gold-glow hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-3 py-1 rounded-full text-[10px] uppercase font-sans tracking-wider text-gold">
          {place.category}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 bg-white">
        <h4 className="font-serif text-xl text-neutral-900 mb-2 group-hover:text-gold transition-colors">
          {place.name}
        </h4>
        <p className="text-sm text-neutral-600 font-sans font-light mb-4 line-clamp-2">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-sans uppercase tracking-widest">
            <MapPin size={12} className="text-gold" />
            {place.distance}
          </div>
          
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span>Explore</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
