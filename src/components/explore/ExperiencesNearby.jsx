import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
];

const panelVariants = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
};

export default function ExperiencesNearby() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const totalItems = 1 + RINCHENPONG_DESTINATIONS.length;

  useEffect(() => {
    const observers = [];
    Array.from({ length: totalItems }).forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { root: null, rootMargin: '-42% 0px -42% 0px', threshold: 0 }
      );
      if (sectionRefs.current[index]) observer.observe(sectionRefs.current[index]);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isIntro    = activeIndex === 0;
  const destIdx    = activeIndex - 1;
  const activeDest = isIntro ? null : RINCHENPONG_DESTINATIONS[destIdx];

  return (
    <section className="bg-luxury-cream">

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 items-start">

            {/* LEFT - sticky */}
            <div className="col-span-5 min-h-full">
              <div className="sticky top-0 h-screen flex items-center pr-16 xl:pr-24">
                <div className="w-full">
                  <AnimatePresence mode="wait">

                    {isIntro && (
                      <motion.div key="intro" variants={panelVariants} initial="initial" animate="animate" exit="exit">
                        <p className="text-[10px] font-sans font-bold tracking-[0.28em] text-gold uppercase mb-8">
                          West Sikkim
                        </p>
                        <h2 className="font-serif text-[34px] xl:text-[48px] leading-[1.1] text-neutral-900 mb-6">
                          A Sanctuary of <br />
                          <span className="italic text-gold">Peace &amp; Heritage</span>
                        </h2>
                        <div className="space-y-4 font-sans font-light text-[15px] xl:text-[16px] leading-[1.75] text-neutral-600">
                          <p>Nestled at an altitude of 5,576 feet, Rinchenpong is a pristine destination in West Sikkim. Known for its breathtaking views of the majestic Kanchenjunga range and its rich historical significance, it offers a serene escape from the bustling world.</p>
                          <p>The region is a treasure trove of ancient monasteries, lush forests, and historical landmarks. Every step here tells a story of spirituality and natural splendor.</p>
                          <p>Experience the authentic Sikkimese culture, explore the verdant landscapes, and find tranquility in the heart of the Himalayas.</p>
                        </div>
                        <p className="mt-10 text-[10px] font-sans font-bold tracking-[0.28em] text-gold/60 uppercase flex items-center gap-3">
                          <span className="h-px w-8 bg-gold/40 block" />
                          Scroll to explore
                        </p>
                      </motion.div>
                    )}

                    {!isIntro && activeDest && (
                      <motion.div key={`dest-${destIdx}`} variants={panelVariants} initial="initial" animate="animate" exit="exit">
                        <p className="text-[10px] font-sans font-bold tracking-[0.28em] text-gold uppercase mb-7">
                          Experiences Nearby
                        </p>
                        <p className="text-[11px] font-sans font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">
                          {CATEGORY_LABELS[destIdx]}
                        </p>
                        <h2 className="font-serif text-[30px] xl:text-[44px] leading-[1.1] text-neutral-900 mb-4">
                          {activeDest.name}
                        </h2>
                        <p className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold mb-6">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          {activeDest.distance}
                        </p>
                        <p className="font-sans font-light text-[15px] xl:text-[16px] leading-[1.75] text-neutral-600">
                          {activeDest.description}
                        </p>
                        <div className="flex items-center gap-2 mt-10">
                          {RINCHENPONG_DESTINATIONS.map((_, i) => (
                            <div key={i} className={`h-[2px] rounded-full transition-all duration-500 ${i === destIdx ? 'w-8 bg-gold' : 'w-3 bg-neutral-200'}`} />
                          ))}
                        </div>
                        <p className="mt-3 font-serif italic text-sm text-gold">
                          {String(destIdx + 1).padStart(2, '0')}
                          <span className="not-italic text-neutral-300"> / {String(RINCHENPONG_DESTINATIONS.length).padStart(2, '0')}</span>
                        </p>
                        <Link
                          to="/contact"
                          className="mt-10 inline-flex items-center gap-4 rounded-full border border-neutral-200 bg-white px-5 py-3 text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-neutral-800 shadow-sm transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold group"
                        >
                          <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/10">
                            <span className="text-[18px] leading-none">&#8250;</span>
                          </span>
                          <span>Plan Your Visit</span>
                        </Link>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT - scrolling */}
            <div className="col-span-7">
              <div className="space-y-20 xl:space-y-28 py-24">

                <div ref={(el) => (sectionRefs.current[0] = el)}>
                  <div className="relative h-[70vh] w-full overflow-hidden bg-neutral-100 shadow-[0_10px_35px_rgba(0,0,0,0.09)]">
                    <img
                      src={MistRinchenpong}
                      alt="Mist over Rinchenpong"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/10 to-transparent" />
                    <div className="absolute bottom-7 left-7">
                      <p className="font-serif text-lg text-white">Mist over Rinchenpong</p>
                      <p className="mt-1 text-[10px] font-sans uppercase tracking-widest text-gold">West Sikkim · 5,576 ft</p>
                    </div>
                  </div>
                </div>

                {RINCHENPONG_DESTINATIONS.map((dest, index) => (
                  <div key={dest.id} ref={(el) => (sectionRefs.current[index + 1] = el)}>
                    <div className="relative h-[70vh] w-full overflow-hidden bg-neutral-100 shadow-[0_10px_35px_rgba(0,0,0,0.09)]">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-neutral-950/10 to-transparent" />
                      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                        <div>
                          <p className="font-serif text-lg text-white leading-snug">{dest.name}</p>
                          <p className="mt-1 text-[10px] font-sans uppercase tracking-widest text-gold">{dest.distance}</p>
                        </div>
                        <span className="font-serif text-5xl italic text-white/25">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden px-6 py-20">
        <div className="mb-16">
          <p className="text-[10px] font-sans font-bold tracking-[0.28em] text-gold uppercase mb-3">West Sikkim</p>
          <h2 className="font-serif text-3xl text-neutral-900 mb-5 leading-tight">
            A Sanctuary of <br />
            <span className="italic text-gold">Peace &amp; Heritage</span>
          </h2>
          <div className="space-y-3 font-sans font-light text-[15px] leading-relaxed text-neutral-600">
            <p>Nestled at an altitude of 5,576 feet, Rinchenpong is a pristine destination in West Sikkim known for breathtaking views of the Kanchenjunga range.</p>
            <p>A treasure trove of ancient monasteries, lush forests, and historical landmarks — every step tells a story of spirituality and natural splendor.</p>
          </div>
        </div>

        <div className="relative h-[56vw] min-h-[240px] w-full overflow-hidden mb-16 shadow-[0_8px_28px_rgba(0,0,0,0.09)]">
          <img
            src={MistRinchenpong}
            alt="Mist over Rinchenpong"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <p className="font-serif text-base text-white">Mist over Rinchenpong</p>
          </div>
        </div>

        <p className="text-[10px] font-sans font-bold tracking-[0.28em] text-gold uppercase mb-2">Experiences Nearby</p>
        <h3 className="font-serif text-2xl text-neutral-900 mb-12">Discover the Region</h3>

        <div className="space-y-16">
          {RINCHENPONG_DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[56vw] min-h-[240px] w-full overflow-hidden bg-neutral-100 shadow-[0_8px_28px_rgba(0,0,0,0.09)] mb-5">
                <img src={dest.image} alt={dest.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-3xl italic text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-[10px] font-sans font-bold tracking-[0.25em] text-gold uppercase mb-1.5">{CATEGORY_LABELS[index]}</p>
              <h4 className="font-serif text-xl text-neutral-900 mb-1">{dest.name}</h4>
              <p className="text-[11px] font-sans uppercase tracking-widest text-neutral-400 mb-3">{dest.distance}</p>
              <p className="font-sans font-light text-[15px] leading-relaxed text-neutral-600">{dest.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-neutral-800 shadow-sm transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>

    </section>
  );
}
