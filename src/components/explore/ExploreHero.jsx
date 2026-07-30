import { motion } from 'framer-motion';

export default function ExploreHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626014903706-53818e117498?auto=format&fit=crop&q=80&w=1920"
          alt="Rinchenpong Landscape"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-xs font-sans font-semibold mb-4 block"
        >
          West Sikkim
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-neutral-50 mb-6 tracking-wide drop-shadow-lg"
        >
          Explore <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 via-gold to-neutral-50">Rinchenpong</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-300 max-w-2xl text-lg md:text-xl font-sans font-light"
        >
          Discover the beauty, culture and hidden gems of West Sikkim.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-sans text-neutral-400">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
