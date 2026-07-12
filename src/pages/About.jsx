import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Waves, Dumbbell, Sparkles, Briefcase, Shirt, Star } from 'lucide-react';
import { CORE_FACILITIES, TEAM_MEMBERS } from '../data/hotelData';

const iconMap = {
  Utensils: Utensils,
  Waves: Waves,
  Dumbbell: Dumbbell,
  Flower: Sparkles,
  Briefcase: Briefcase,
  Shirt: Shirt,
};

const About = () => {
  return (
    <div>
      
      {/* Page Header (Parallax banner) */}
      <div className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Shivaratna Heritage
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            About Us
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">About Us</span>
          </div>
        </div>
      </div>

      {/* History & Rating Arches */}
      <section className="py-24 bg-luxury-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Curved Arches (Left) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold/15 rounded-full -z-10 pointer-events-none hidden md:block" />
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="arch-frame shadow-premium border border-gold/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
                  alt="Shivaratna Lobby"
                  className="w-full h-[280px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="arch-frame shadow-premium border border-gold/10 mt-12 md:mt-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80"
                  alt="Shivaratna Gourmet Dining"
                  className="w-full h-[280px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Copy (Right) */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Our History
              </span>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 font-serif">
                Exceptional Hospitality and Unmatched Relaxation
              </h2>

              <div className="inline-flex items-center space-x-3 bg-gold/5 border border-gold/20 px-4 py-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-neutral-800 tracking-wider font-sans">
                  4.9 out of 5 (1,200+ Reviews)
                </span>
              </div>

              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Shivaratna Hotel was founded with a clear directive: to merge the standard of luxury living with traditional Indian values of warm hospitality. Over the past decade, we have hosted thousands of global citizens, offering them a quiet sanctuary to rest, recharge, and inspire.
              </p>

              <p className="text-neutral-600 text-sm font-sans font-light leading-relaxed border-l-2 border-gold pl-4 italic">
                "We don't just provide rooms; we create timeless stories. Every detailing from linen density to aroma diffusers has been thoughtfully integrated to enchant your senses."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Facilities Grid */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Our Amenities
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
              World Class Facilities
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CORE_FACILITIES.map((facility, index) => {
              const IconComponent = iconMap[facility.icon] || Sparkles;
              return (
                <div
                  key={facility.id}
                  className="bg-neutral-50 border border-neutral-100 hover:border-gold/30 p-8 text-left transition-all duration-300 shadow-premium flex flex-col items-start group"
                >
                  <div className="bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-neutral-950 transition-colors duration-500 mb-6 text-gold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-neutral-900 font-serif mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Parallax Quote Banner */}
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <span className="text-gold text-3xl font-serif">“</span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-200 leading-relaxed font-light italic">
            Experience hospitality that goes beyond margins. In every layout, menu preparation, and customized spa therapy, we strive to exceed your expectations.
          </h3>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Shivaratna Hospitality
          </span>
        </div>
      </div>

      {/* Team Showcase */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Behind The Scenes
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
              Our Executive Team
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gold/10 p-4 shadow-premium group text-center"
              >
                <div className="overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
                <h3 className="text-base font-serif font-medium text-neutral-950 tracking-wider">
                  {member.name}
                </h3>
                <p className="text-gold text-xs font-sans tracking-widest uppercase mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
