import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Waves, Dumbbell, Sparkles, Briefcase, Shirt, Star } from 'lucide-react';
import { CORE_FACILITIES } from '../data/hotelData';

const iconMap = {
  Utensils: Utensils,
  Waves: Waves,
  Dumbbell: Dumbbell,
  Flower: Sparkles, // mapped to Sparkles for high-end look
  Briefcase: Briefcase,
  Shirt: Shirt,
};

const AboutSection = () => {
  return (
    <section id="about" className="relative pt-28 pb-20 bg-white overflow-hidden">

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Box Image Frame */}
          <div className="flex justify-center w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden shadow-2xl relative"
            >
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                alt="Shivaratna Luxury"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4 flex flex-col items-center lg:items-start"
            >
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Welcome to Shivaratna
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-900 font-serif">
                Exceptional Hospitality and Unmatched Relaxation
              </h2>
            </motion.div>

            {/* Rating block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center lg:items-start space-y-2 mt-4"
            >
              <span className="text-sm font-medium text-neutral-800 tracking-wide font-sans">
                4.9 out of 5
              </span>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-gold" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs text-neutral-500 font-sans tracking-wide">
                Based on 25000+ reviews
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
            World Class Facilities
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CORE_FACILITIES.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || Sparkles;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-gold/10 hover:border-gold/30 p-8 text-center md:text-left transition-all duration-300 shadow-premium flex flex-col items-center md:items-start group"
              >
                <div className="bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-neutral-950 transition-colors duration-500 mb-6 text-gold">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-[21px] font-medium tracking-wide text-neutral-900 font-serif mb-3">
                  {facility.title}
                </h3>
                <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] leading-relaxed font-sans font-light">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Parallax Quote Banner (Middle Section) */}
      <div className="relative w-full h-[320px] md:h-[450px] mt-28 flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80")' }}>

        {/* Banner Overlay */}
        <div className="absolute inset-0 bg-neutral-950/70" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <span className="text-gold text-3xl font-serif">“</span>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-200 leading-relaxed font-light italic"
          >
            Experience unparalleled luxury and personalized service at Shivaratna Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.
          </motion.h3>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Shivaratna Hospitality
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
