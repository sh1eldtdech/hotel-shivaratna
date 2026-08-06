import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Sofa, Coffee, ArrowRight, Laptop, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local images from assets/homepage
import workstationsImg from '../assets/homepage/workstations.jpg';
import workstationImg2 from '../assets/homepage/workstation2.jpg';

const WorkstationLounge = () => {
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

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      className="bg-luxury-cream min-h-screen pt-24 font-sans text-neutral-800"
    >
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] sm:h-[55vh] min-h-[280px] sm:min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-neutral-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${workstationsImg})` }}
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
            Hotel Shivaratna Amenities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif font-medium text-white tracking-wide uppercase leading-tight"
          >
            Workstation &amp; Lounge
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
            className="text-white/85 font-serif text-lg md:text-xl font-light italic max-w-2xl mx-auto"
          >
            Where productivity meets Himalayan serenity.
          </motion.p>
        </div>
      </section>

      {/* Main Content Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content Column */}
            <motion.div {...fadeInUp()} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Work &amp; Unwind
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif leading-tight">
                Workstation &amp; Lounge
                <span className="block text-xl md:text-2xl text-neutral-600 font-sans font-light mt-2">Where Productivity Meets Comfort</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-gold" />
              
              <div className="space-y-5 text-neutral-700 font-sans font-light text-sm md:text-base leading-relaxed text-justify">
                <p>
                  Whether you're working remotely, attending virtual meetings, or simply catching up on emails while travelling, our Workstation &amp; Lounge offers the perfect balance of productivity and relaxation. Designed with comfort and convenience in mind, the space provides a peaceful atmosphere where you can focus without distractions.
                </p>
                <p>
                  Stay connected with complimentary high-speed Wi-Fi, comfortable seating, ample workspace, and a calm mountain ambience that inspires creativity and efficiency. Surrounded by the fresh Himalayan air and serene beauty of Rinchenpong, it's an ideal setting for digital nomads, business travellers, entrepreneurs, freelancers, and guests seeking a productive work-from-the-mountains experience.
                </p>
                <p className="font-serif italic text-neutral-800 text-base md:text-lg border-l-2 border-gold pl-4 mt-4 leading-relaxed">
                  At Hotel Shivaratna, you don't have to choose between work and a holiday—you can enjoy the best of both in a space thoughtfully designed to help you stay connected, comfortable, and inspired.
                </p>
              </div>

              {/* Workstation features checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">Complimentary High-Speed Wi-Fi</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">Reliable internet for smooth virtual meetings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Sofa className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">Comfortable Workspaces</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">Ergonomic seating with charging outlets close by.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">Coffee &amp; Refreshments</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">Hot beverages available to keep you going.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-luxury-cream border border-gold/10 rounded-full text-gold shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-neutral-900 text-sm">Digital Nomad Friendly</h4>
                    <p className="text-xs text-neutral-500 font-sans mt-0.5">Quiet environment designed for deep focus.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image/Images Column */}
            <motion.div {...fadeInUp(0.2)} className="lg:col-span-5 relative space-y-6">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gold/10 shadow-2xl relative group">
                <img
                  src={workstationsImg}
                  alt="Workstations lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neutral-950/10" />
              </div>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gold/10 shadow-2xl relative group">
                <img
                  src={workstationImg2}
                  alt="Comfortable work stay seating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neutral-950/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relax and Unwind Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
            Holiday &amp; Work
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white font-serif max-w-3xl mx-auto leading-tight">
            Workcation in Rinchenpong
          </h2>
          <div className="w-12 h-[1.5px] bg-gold mx-auto" />
          <p className="text-neutral-300 text-sm md:text-base font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Experience the fresh mountain breeze of West Sikkim. Start your day with a breathtaking view of Kanchenjunga, get your work done in a calm workspace, and spend your evenings exploring the trails.
          </p>
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold text-neutral-950 hover:bg-gold-dark text-xs uppercase tracking-widest font-sans font-semibold px-10 py-4 transition-all duration-300"
            >
              Book Your Work Stay
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkstationLounge;
