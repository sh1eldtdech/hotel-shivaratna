import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DestinationStory({ destinations }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.55,
          rootMargin: "-10% 0px -20% 0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [destinations]);

  const activeDestination = destinations[activeIndex];

  return (
    <section className="relative bg-luxury-cream">

      {/* ================= DESKTOP STORYTELLING ================= */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 gap-20">

            {/* LEFT - STICKY IMAGE */}
            <div className="sticky top-0 h-screen flex items-center">

              <div className="relative w-full h-[75vh] overflow-hidden rounded-sm shadow-premium">

                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeDestination.image}
                    src={activeDestination.image}
                    alt={activeDestination.name}
                    decoding="async"
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Image Number */}
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="font-serif text-5xl italic opacity-80">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT - STORY CONTENT */}
            <div className="relative">

              {destinations.map((destination, index) => (
                <div
                  key={destination.name}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="min-h-screen flex items-center py-24"
                >

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="max-w-xl"
                  >

                    {/* Number */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-gold font-serif text-3xl italic opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px w-16 bg-gold/40" />
                    </div>

                    {/* Heading */}
                    <h3 className="font-serif text-4xl xl:text-6xl text-neutral-900 leading-tight mb-8">
                      {destination.name}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 font-sans font-light text-lg leading-relaxed mb-10">
                      {destination.description}
                    </p>

                    {/* Distance */}
                    {destination.distance && (
                      <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold">
                        <span className="h-2 w-2 rounded-full bg-gold" />
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

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">

        {destinations.map((destination, index) => (
          <div
            key={destination.name}
            className="min-h-screen flex flex-col justify-center py-20 px-6"
          >

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-10"
            >
              <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <span className="absolute bottom-6 left-6 font-serif text-4xl italic text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >

              <div className="flex items-center gap-4 mb-5">
                <span className="text-gold font-serif text-2xl italic opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="h-px w-12 bg-gold/30" />
              </div>

              <h3 className="font-serif text-3xl text-neutral-900 mb-5">
                {destination.name}
              </h3>

              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                {destination.description}
              </p>

              {destination.distance && (
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {destination.distance}
                </div>
              )}

            </motion.div>

          </div>
        ))}

      </div>

    </section>
  );
}