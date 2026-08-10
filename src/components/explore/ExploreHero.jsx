import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RinchenpongBg from '../../assets/westSikkimPhoto/Rinchenpong.avif';

export default function ExploreHero() {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={RinchenpongBg}
          alt="Rinchenpong Landscape"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutral-950/65 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center mt-16 px-6 w-full max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-[11px] font-sans text-neutral-300 tracking-widest uppercase mb-6"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-500">&gt;</span>
          <Link to="/explore" className="hover:text-white transition-colors">Explore</Link>
          <span className="text-neutral-500">&gt;</span>
          <span className="text-white">Rinchenpong</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-widest uppercase mb-5 drop-shadow-lg"
        >
          Rinchenpong
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-neutral-300 text-sm md:text-base font-sans font-light max-w-xl leading-relaxed mb-8"
        >
          A peaceful mountain haven in West Sikkim, known for ancient monasteries, breathtaking Himalayan views, and serene forest trails.
        </motion.p>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-neutral-300 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={13} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
