import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ExploreHero from '../components/explore/ExploreHero';
import ExperiencesNearby from '../components/explore/ExperiencesNearby';
import NearbyPlaces from '../components/explore/NearbyPlaces';
import ExploreCTA from '../components/explore/ExploreCTA';

export default function ExploreRinchenpong() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-luxury-cream min-h-screen text-neutral-950 w-full"
    >
      <ExploreHero />
      

      {/* Unified sticky-scroll: intro + experiences nearby */}
      <ExperiencesNearby />

      <NearbyPlaces />
      <ExploreCTA />
    </motion.main>
  );
}
