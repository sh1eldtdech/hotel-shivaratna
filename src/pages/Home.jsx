import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Star, ArrowRight, Play, X } from 'lucide-react';
import Hero from '../components/Hero';
import { ROOMS_DATA, GALLERY_IMAGES } from '../data/hotelData';
import hotelVideo from '../assets/homepage/hotel video.mp4';
import aboutHome from '../assets/homepage/about_home.png';
import sunriseImage from '../assets/homepage/sunrise.jpg';
import organicCuisineImage from '../assets/homepage/organic_cuisine.jpg';
import workstationsImage from '../assets/homepage/workstations.jpg';
import previewImage from '../assets/homepage/slider3.png';

// Animated counter
const AnimatedCounter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  React.useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Home = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const featuredRooms = ROOMS_DATA.slice(0, 3);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <div>
      {/* Hero Carousel */}
      <Hero />

      {/* Stats Bar */}
      <div className="bg-neutral-950 border-b border-gold/20 py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
            {[
              { label: 'In the heart of town', value: null },
              { label: 'Room Categories', value: '3+' },
              { label: 'Dining Seats', value: '30+' },
              { label: 'Amenities', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="hidden md:block w-px h-8 bg-gold/20" />}
                <div className="text-center">
                  {stat.value ? (
                    <div className="text-xl md:text-2xl font-serif text-gold font-medium">{stat.value}</div>
                  ) : (
                    <div className="text-xs font-sans text-gold uppercase tracking-widest font-semibold">📍</div>
                  )}
                  <div className="text-[10px] md:text-xs text-neutral-400 font-sans tracking-wider mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about-intro" className="pt-28 pb-20 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Left */}
            <motion.div
              className="lg:col-span-6"
              variants={{
                hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -80, scale: shouldReduceMotion ? 1 : 0.95 },
                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gold/10">
                <motion.img
                  src={aboutHome}
                  alt="Hotel Shivaratna"
                  className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              className="lg:col-span-6 text-left space-y-5"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
              }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans"
              >
                Rinchenpong, West Sikkim
              </motion.span>
              <motion.h2
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 font-serif"
              >
                About Hotel Shivaratna
              </motion.h2>

              <motion.div
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="flex items-center space-x-3 bg-gold/5 border border-gold/20 px-4 py-2 w-fit"
              >
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-semibold text-neutral-800 tracking-wider font-sans">
                  4.9 out of 5
                </span>
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                Welcome to Hotel Shivaratna, your peaceful mountain retreat in Rinchenpong, West Sikkim, where breathtaking Himalayan views, fresh mountain air, and warm Sikkimese hospitality come together to create an unforgettable stay.
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                Our hotel offers 14 comfortable and affordable rooms, a multi-cuisine restaurant, fully stocked bar, meeting &amp; conference hall, free high-speed Wi-Fi, and complete fooding and lodging facilities. Whether you're a leisure traveller, pilgrim, nature enthusiast, adventure seeker, business guest, or remote worker, our dedicated team ensures every guest feels at home.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs text-gold hover:text-gold-dark uppercase tracking-widest font-sans font-semibold border border-gold/30 hover:border-gold px-6 py-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Quote Banner — "Every sunrise brings…" */}
      <div
        className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url("${sunriseImage}")` }}
      >
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <span className="text-gold text-3xl font-serif">"</span>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-200 leading-relaxed font-light italic"
          >
            Every sunrise brings Himalayan beauty, every breeze carries the freshness of the mountains, and every stay at Hotel Shivaratna becomes a cherished memory.
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Hotel Shivaratna · Rinchenpong, West Sikkim
          </span>
        </div>
      </div>

      {/* Accommodation — Rectangle shape with hover video effect */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp()} className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">Rooms &amp; Suites</span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif mt-2">Accommodation</h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featuredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => navigate(`/rooms/${room.id}`)}
              >
                {/* Rectangle image container with video-like hover effect */}
                <div className="w-full aspect-[4/3] relative overflow-hidden border border-gold/15 shadow-premium rounded-sm">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                  {/* Price tag */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-950/85 backdrop-blur-md text-white font-sans text-xs px-4 py-2 border border-gold/30 z-20 whitespace-nowrap tracking-wider transition-opacity duration-500 group-hover:opacity-0">
                    ₹{room.price.toLocaleString('en-IN')} <span className="text-neutral-400 font-light text-[9.5px]">/ Night</span>
                  </div>
                  {/* Hover overlay — slides up like a video reveal */}
                  <div className="absolute inset-0 bg-neutral-950/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-30">
                    <span className="text-white/80 text-sm font-sans font-light tracking-wider mb-2">From</span>
                    <span className="text-gold text-4xl md:text-5xl font-serif font-normal tracking-wide mb-4">₹{room.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-gold font-sans font-medium uppercase tracking-[0.25em] flex items-center gap-2">
                      <Play className="w-3 h-3 fill-current" /> View Room Details
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-serif text-neutral-950 font-medium group-hover:text-gold transition-colors duration-300">{room.title}</h3>
                <p className="text-neutral-500 text-[11px] font-sans uppercase tracking-widest mt-1.5">
                  {room.size} | {room.guests} Guests | {room.bed}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.2)} className="mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center text-xs text-neutral-950 hover:text-gold border border-neutral-950 hover:border-gold uppercase tracking-widest font-sans font-semibold px-10 py-4 transition-all duration-300"
            >
              View All Rooms &amp; Suites
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Section 1 — Organic Farm Fresh Cuisine */}
      <section className="py-24 bg-luxury-cream border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="rounded-xl overflow-hidden shadow-2xl border border-gold/10"
            >
              <img
                src={organicCuisineImage}
                alt="Organic Farm Fresh Cuisine at Hotel Shivaratna"
                className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {/* Content */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
              className="text-left space-y-5"
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans"
              >
                Farm to Table
              </motion.span>
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-3xl md:text-4xl font-medium leading-tight text-neutral-900 font-serif"
              >
                Organic Farm Fresh Cuisine
              </motion.h2>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-12 h-[1.5px] bg-gold" />
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                At Hotel Shivaratna, every meal is a celebration of the Himalayan harvest. We source the freshest seasonal vegetables, herbs, and produce from local organic farms nestled in the hills of West Sikkim, bringing nature's best flavours directly to your table.
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                Our multi-cuisine restaurant serves authentic Sikkimese dishes, Indian comfort food, and continental favourites — all prepared with love by our kitchen team. Pair your meal with refreshing drinks or explore our fully stocked bar for the perfect mountain dining experience.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link
                  to="/about#restaurant"
                  className="inline-flex items-center bg-gold text-neutral-950 hover:bg-gold-dark text-xs uppercase tracking-widest font-sans font-semibold px-6 py-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section 2 — Workstation & Lounge */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Content — Left */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
              className="text-left space-y-5 order-2 lg:order-1"
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans"
              >
                Work & Unwind
              </motion.span>
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-3xl md:text-4xl font-medium leading-tight text-neutral-900 font-serif"
              >
                Workstation &amp; Lounge
                <span className="block text-xl md:text-2xl text-neutral-600 font-sans font-light mt-2">Where Productivity Meets Comfort</span>
              </motion.h2>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-12 h-[1.5px] bg-gold" />
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                Whether you're a remote worker, digital nomad, or a business traveller on the move, Hotel Shivaratna's dedicated workstation and lounge provides everything you need to stay productive — high-speed Wi-Fi, comfortable seating, and the inspiring backdrop of the Himalayas.
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify"
              >
                When the workday is done, transition seamlessly to relaxation mode in our comfortable lounge — a serene space to unwind, connect with fellow travellers, or simply soak in the peaceful mountain atmosphere.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link
                  to="/rooms"
                  className="inline-flex items-center bg-gold text-neutral-950 hover:bg-gold-dark text-xs uppercase tracking-widest font-sans font-semibold px-6 py-3 transition-all duration-300"
                >
                  Book Your Work Stay
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            {/* Image — Right */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="rounded-xl overflow-hidden shadow-2xl border border-gold/10 order-1 lg:order-2"
            >
              <img
                src={workstationsImage}
                alt="Workstation and Lounge at Hotel Shivaratna"
                className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${previewImage}")` }}
        />
        <div className="absolute inset-0 bg-neutral-950/65" />
        <div className="z-10 text-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoOpen(true)}
            className="w-20 h-20 md:w-24 md:h-24 bg-gold text-neutral-950 rounded-full flex items-center justify-center shadow-gold-glow relative group cursor-pointer mx-auto"
          >
            <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping group-hover:animate-none" />
            <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
          </motion.button>
          <div className="space-y-2">
            <span className="text-[9px] md:text-xs text-gold uppercase tracking-[0.35em] font-sans font-semibold block">
              Watch Preview Video
            </span>
            <span className="text-white font-serif text-base md:text-xl font-medium tracking-wide block">
              A Glimpse of Shivaratna Grandeur
            </span>
            <span className="text-neutral-400 font-sans text-xs font-light block">
              Rinchenpong, West Sikkim · Landscape Experience
            </span>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Grid Section (Original Design) */}
      <section className="py-24 bg-luxury-cream border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Stories &amp; Moments
            </span>
            <h2 className="text-xl md:text-2xl font-medium text-neutral-950 font-serif mt-2 tracking-widest uppercase">
              @shivaratna_hotel_theme
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {GALLERY_IMAGES.slice(0, 3).map((img, idx) => {
              const isQuoteTile = idx === 1;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: shouldReduceMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className={`relative overflow-hidden rounded-[28px] border border-gold/10 group ${idx === 0 ? 'sm:row-span-2' : ''} ${idx === 1 ? 'sm:col-span-1' : ''}`}
                >
                  {isQuoteTile ? (
                    <div className="w-full h-full bg-neutral-950 text-white flex flex-col items-center justify-center px-6 text-center">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-sans mb-3">
                        Our Promise
                      </span>
                      <p className="font-serif text-lg md:text-2xl leading-tight tracking-wide max-w-[15ch]">
                        “Warm stays, mountain views, and moments worth returning for.”
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <img
                        src={img}
                        alt={`Gallery item ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-black max-w-5xl w-full aspect-video border border-gold/30 relative flex items-center justify-center"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gold flex items-center text-xs tracking-wider uppercase font-sans font-medium z-10"
              >
                Close <X className="w-4 h-4 ml-1.5" />
              </button>
              <video
                src={hotelVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
