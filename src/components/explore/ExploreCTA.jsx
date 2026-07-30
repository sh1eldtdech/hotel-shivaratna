import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExploreCTA() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542289659-19aa01f56608?auto=format&fit=crop&q=80"
          alt="Book your stay at Hotel Shivratna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold font-sans uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Experience the Magic
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-neutral-50 mb-8 leading-tight">
            Your Rinchenpong <br />
            <span className="italic text-gold">Journey Begins Here</span>
          </h2>
          
          <p className="text-neutral-300 font-sans text-base md:text-lg font-light mb-12 max-w-2xl mx-auto">
            Stay at Hotel Shivratna and discover the beauty of Sikkim from Rinchenpong. Let us make your stay memorable.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-neutral-950 font-sans uppercase tracking-widest text-sm font-semibold hover:bg-gold-light hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
