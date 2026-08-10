import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Compass, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import { RINCHENPONG_DESTINATIONS } from '../../data/exploreRinchenpong';
import MistRinchenpong from '../../assets/westSikkimPhoto/Rinchenpong.avif';

const CATEGORY_LABELS = [
  'Spiritual Heritage',
  'Nature Park',
  'Sacred Monastery',
  'Mysterious Lake',
  'Heritage Viewpoint',
  'Forest Sanctuary',
  'Fruit Winery',
  'Hidden Waterfall',
  'Mineral Spring',
  'Alpine Lake',
  'Sacred Cave',
  'Limbu Cultural Heritage',
  'Adventure & Viewpoint',
];

const ALL_EXPERIENCES = [
  {
    id: 'intro',
    name: 'A Sanctuary of Peace & Heritage',
    category: 'West Sikkim · 5,576 ft',
    distance: 'Rinchenpong Region',
    description: 'Nestled at an altitude of 5,576 feet, Rinchenpong is a peaceful mountain destination in West Sikkim, known for dramatic views of Kanchenjunga and its serene atmosphere. The region is filled with ancient monasteries, forest trails, and heritage landmarks, offering a soothing mix of nature, culture, and quiet reflection.',
    image: MistRinchenpong,
    isIntro: true,
  },
  ...RINCHENPONG_DESTINATIONS.map((dest, index) => ({
    ...dest,
    category: CATEGORY_LABELS[index] || 'Local Experience',
    isIntro: false,
  })),
];

const contentVariants = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function ExperiencesNearby() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightScrollRef = useRef(null);
  const imageRefs = useRef([]);
  const totalItems = ALL_EXPERIENCES.length;

  // Track scroll position inside the right container box
  const handleRightScroll = () => {
    const container = rightScrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollTop + container.clientHeight / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const elementTop = ref.offsetTop;
      const elementCenter = elementTop + ref.clientHeight / 2;
      const distance = Math.abs(elementCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToImage = (index) => {
    const container = rightScrollRef.current;
    const targetImage = imageRefs.current[index];
    if (container && targetImage) {
      const topPos = targetImage.offsetTop - (container.clientHeight - targetImage.clientHeight) / 2;
      container.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  };

  const activeItem = ALL_EXPERIENCES[activeIndex];

  return (
    <section className="bg-luxury-cream py-10 md:py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Title Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-3">
            <Compass size={13} />
            <span>West Sikkim Highlights</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-900 font-medium">
            Experiences Nearby
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-3" />
        </div>

        {/* Single Section Frame Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* LEFT COLUMN: Fixed Content Card in Same Section */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-md rounded-[28px] border border-gold/30 p-6 md:p-8 xl:p-10 shadow-[0_20px_50px_-20px_rgba(197,168,128,0.35)] relative min-h-[380px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-grow flex flex-col justify-between"
                >
                  <div>
                    {/* Category & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.28em] text-gold uppercase">
                        {activeItem.isIntro ? 'West Sikkim' : 'Experiences Nearby'}
                      </span>
                      <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                        {activeItem.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-2xl md:text-3xl xl:text-4xl text-neutral-900 font-medium leading-[1.2] mb-3">
                      {activeItem.name}
                    </h3>

                    {/* Distance Badge */}
                    {!activeItem.isIntro && activeItem.distance && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-wider mb-4">
                        <MapPin size={11} />
                        {activeItem.distance}
                      </div>
                    )}

                    {/* Description */}
                    <p className="font-sans font-normal text-xs md:text-sm xl:text-[15px] leading-relaxed text-neutral-700 mb-6 max-h-[140px] overflow-y-auto pr-2">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Controls & Counter Footer */}
                  <div>
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      {/* Counter */}
                      <div>
                        <span className="font-serif italic text-xl md:text-2xl text-gold font-bold">
                          {String(activeIndex === 0 ? 0 : activeIndex).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-xs text-neutral-400">
                          {' '}/ {String(RINCHENPONG_DESTINATIONS.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Interactive Dots */}
                      <div className="hidden sm:flex items-center gap-1.5">
                        {ALL_EXPERIENCES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => scrollToImage(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              i === activeIndex ? 'w-5 bg-gold' : 'w-2 bg-neutral-200 hover:bg-gold/50'
                            }`}
                            aria-label={`Scroll right panel to image ${i}`}
                          />
                        ))}
                      </div>

                      {/* Up/Down Arrow buttons for scrolling right side */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => scrollToImage(Math.max(0, activeIndex - 1))}
                          className="p-2 rounded-full border border-neutral-200 text-neutral-700 hover:border-gold hover:bg-gold hover:text-white transition-all shadow-sm"
                          aria-label="Previous experience image"
                        >
                          <ChevronUp size={16} />
                        </button>
                        <button
                          onClick={() => scrollToImage(Math.min(totalItems - 1, activeIndex + 1))}
                          className="p-2 rounded-full border border-neutral-200 text-neutral-700 hover:border-gold hover:bg-gold hover:text-white transition-all shadow-sm"
                          aria-label="Next experience image"
                        >
                          <ChevronDown size={16} />
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-5">
                      <Link
                        to="/contact"
                        className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white shadow-md transition-all duration-300 hover:bg-gold hover:shadow-lg group"
                      >
                        <span>Plan Your Visit</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* RIGHT COLUMN: Internal Scrollable Image Container in Same Section */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              
              {/* Scroll Container Box */}
              <div
                ref={rightScrollRef}
                onScroll={handleRightScroll}
                className="h-[52vw] min-h-[320px] sm:h-[420px] lg:h-[500px] xl:h-[540px] w-full rounded-[28px] overflow-y-auto snap-y snap-mandatory space-y-6 p-2 bg-neutral-950/90 shadow-2xl border border-neutral-800 scrollbar-thin scrollbar-thumb-gold/50 scrollbar-track-neutral-900"
              >
                {ALL_EXPERIENCES.map((item, index) => (
                  <div
                    key={item.id || index}
                    ref={(el) => (imageRefs.current[index] = el)}
                    className="h-full w-full rounded-[22px] overflow-hidden relative flex-shrink-0 snap-center shadow-lg group border border-white/10"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />

                    {/* Top Overlay Badge & Number */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-neutral-900/70 backdrop-blur-md border border-white/15 text-[10px] font-sans font-bold uppercase tracking-widest text-gold">
                        {item.category}
                      </span>
                      <span className="font-serif text-3xl sm:text-4xl italic text-white/40 font-light">
                        {String(index === 0 ? 0 : index).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Bottom Title Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-medium drop-shadow-md truncate">
                        {item.name}
                      </h4>
                      {!item.isIntro && item.distance && (
                        <p className="text-[11px] font-sans uppercase tracking-widest text-gold font-medium mt-0.5">
                          {item.distance}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Helper Scroll Hint Badge */}
              <div className="absolute top-4 right-4 pointer-events-none z-10 bg-neutral-900/80 backdrop-blur-md text-gold text-[9px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gold/30 shadow-md">
                Scroll images inside box ↓
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}





