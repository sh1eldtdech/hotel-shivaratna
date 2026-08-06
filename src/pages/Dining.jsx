import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Leaf, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local images from assets/diningbar
import diningImg from '../assets/diningbar/dining.png';
import dishesImg from '../assets/diningbar/dishes.png';
import dishesImg2 from '../assets/diningbar/dishes2.png';
import barImg from '../assets/diningbar/bar.png';
import barImg2 from '../assets/diningbar/bar2.png';
import rest1 from '../assets/diningbar/restaurant1.png';
import rest2 from '../assets/diningbar/restaurant2.jpg';
import rest3 from '../assets/diningbar/restaurant3.jpg';
import rest4 from '../assets/diningbar/restaurant4.jpg';
import rest5 from '../assets/diningbar/restaurant5.jpg';
import rest6 from '../assets/diningbar/restaurant6.jpg';
import rest7 from '../assets/diningbar/restaurant7.jpg';
import rest8 from '../assets/diningbar/restaurant8.jpg';
import rest9 from '../assets/diningbar/restaurant9.png';

const Dining = () => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }
  });

  const galleryImages = [
    { src: rest1, alt: "Classic Veg Meal" },
    { src: rest2, alt: "Vegetable Pakora" },
    { src: rest3, alt: "Sticky Honey Chilli Chicken Wings" },
    { src: rest4, alt: "Bar Counter / Beverage Collection" },
    { src: rest5, alt: "Grilled Veg Sandwich" },
    { src: rest6, alt: "Chicken Burger with French Fries" },
    { src: rest7, alt: "Steamed Chicken Momos" },
    { src: rest8, alt: "Chilli Paneer & Vegetable Pakora" },
    { src: rest9, alt: "Veg Rice Meal / Indian Lunch Thali" },
    { src: dishesImg, alt: "Organic Cuisine" },
    { src: dishesImg2, alt: "Veg Rice Meal / Indian Lunch Thali" }
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      className="bg-luxury-cream min-h-screen pt-24 font-sans text-neutral-800"
    >
      {/* Hero Banner Section */}
      <section className="relative h-[55vh] sm:h-[60vh] min-h-[320px] sm:min-h-[450px] w-full overflow-hidden flex items-center justify-center bg-neutral-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{ backgroundImage: `url(${diningImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950" />
        {/* Back button */}
        <Link
          to="/"
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-gold text-xs font-sans uppercase tracking-widest transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase block font-sans mb-3"
          >
            Hotel Shivaratna Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif font-medium text-white tracking-wide uppercase leading-tight"
          >
            Fine Dining &amp; Bar
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-[1.5px] bg-gold mx-auto my-6 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/85 font-serif text-lg md:text-2xl font-light italic max-w-2xl mx-auto"
          >
            We serve freshly harvested organic food cooked. From farm to table.<br/><br/>
            "Experience Sikkim's Organic &amp; Authentic Flavours, Fresh from the Himalayas."
          </motion.p>
        </div>
      </section>

      {/* Farm to Table Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div {...fadeInUp()} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Farm to Table
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif leading-tight">
                Organic Farm Fresh Cuisine
              </h2>
              <div className="w-12 h-[1.5px] bg-gold" />
              
              <div className="space-y-5 text-neutral-700 font-sans font-light text-sm md:text-base leading-relaxed text-justify">
                <p>
                  At Hotel Shivaratna, every meal begins at its source. We proudly embrace Sikkim's rich organic heritage by serving dishes prepared with freshly harvested, locally grown ingredients sourced directly from nearby farms. From crisp vegetables and aromatic herbs to seasonal produce, every ingredient is handpicked for its freshness, purity, and exceptional quality.
                </p>
                <p>
                  Our farm-to-table philosophy ensures that every meal is cooked fresh only after you order, preserving natural flavours, nutrients, and authenticity. Free from unnecessary chemicals and crafted with care, our cuisine celebrates the true taste of the Himalayas.
                </p>
                <p className="font-serif italic text-neutral-800 text-base md:text-lg border-l-2 border-gold pl-4 mt-4 leading-relaxed">
                  Experience the authentic flavours of Sikkim—mountain fresh, organically grown, and served with warmth.
                </p>
              </div>

              {/* Icon Info Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">100% Organically Sourced</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">Locally harvested from organic mountain farms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">Cooked Fresh on Order</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">No pre-cooked storage, ensuring max nutrition &amp; flavor.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image Collage */}
            <motion.div {...fadeInUp(0.2)} className="lg:col-span-5 relative">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-gold/10 shadow-2xl relative group">
                <img
                  src={dishesImg2}
                  alt="Delicious organic Sikkimese food platter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neutral-950/20" />
              </div>
              {/* Overlapping Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-neutral-950 text-white p-6 rounded-2xl border border-gold/20 shadow-2xl hidden md:block max-w-[240px]">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans font-semibold block mb-2">Our Signature</span>
                <p className="font-serif text-sm text-neutral-200 leading-relaxed">
                  Traditional organic Sikkimese recipes passed down through generations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Bar & Lounge Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${barImg2})` }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column - Large Image */}
            <motion.div {...fadeInUp(0.1)} className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden border border-gold/20 shadow-2xl">
                  <img
                    src={barImg}
                    alt="Premium bar cabinet display"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden border border-gold/20 shadow-2xl mt-8">
                  <img
                    src={barImg2}
                    alt="Bar seating area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div {...fadeInUp()} className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Premium Bar
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-white font-serif leading-tight">
                Fully Stocked Lounge &amp; Bar
              </h2>
              <div className="w-12 h-[1.5px] bg-gold" />
              <p className="text-neutral-300 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
                Our fully stocked bar features a wide selection of premium alcoholic beverages, including beer, whisky, rum, vodka, scotch, brandy, wine, gin, and other popular spirits, offering the perfect place to relax and unwind after a memorable day in the Himalayas.
              </p>
              
              <div className="pt-4">
                <h4 className="text-gold font-serif text-sm uppercase tracking-wider mb-3">Featuring Selection of:</h4>
                <div className="flex flex-wrap gap-2 text-xs font-sans">
                  {["Premium Scotch", "Single Malts", "Imported Wines", "Local Brews", "Artisanal Gin", "Classic Cocktails"].map((item, index) => (
                    <span key={index} className="bg-neutral-900 border border-gold/20 text-neutral-300 px-3.5 py-1.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Restaurant Showcase Gallery */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp()} className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-950 font-serif mt-2">Ambience &amp; Flavours</h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </motion.div>

          {/* Masonry-like grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gold/10 group shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Always-visible label at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent px-4 pt-8 pb-3 pointer-events-none">
                  <p className="text-white text-xs font-serif font-medium tracking-wide drop-shadow">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp()} className="mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold text-neutral-950 hover:bg-gold-dark text-xs uppercase tracking-widest font-sans font-semibold px-10 py-4 transition-all duration-300"
            >
              Reserve Your Experience
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dining;
