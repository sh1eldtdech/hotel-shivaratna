import React from 'react';
import { motion } from 'framer-motion';
import { Maximize, Users, BedDouble, Eye, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROOMS_DATA } from '../data/hotelData';

const RoomsSection = ({ onSelectRoomForBooking }) => {
  const navigate = useNavigate();

  const handleBookNow = (roomId) => {
    if (onSelectRoomForBooking) onSelectRoomForBooking(roomId);
    navigate(`/contact?roomType=${roomId}`);
  };

  const standardParent = ROOMS_DATA.find(r => r.category === 'StandardParent');
  const deluxeRoom = ROOMS_DATA.find(r => r.category === 'Deluxe');
  const suiteRoom = ROOMS_DATA.find(r => r.category === 'Suite');

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
            Accommodations
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif mt-2">
            Rooms &amp; Suites
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          <p className="text-neutral-700 text-sm md:text-base font-sans font-light mt-6 leading-relaxed text-justify">
            Experience comfort, warmth, and tranquillity in our thoughtfully designed rooms at Hotel Shivaratna. Whether you're travelling with family, friends, your partner, or on a business trip, our spacious and well-maintained accommodations provide the perfect place to relax after a day of exploring West Sikkim.
          </p>
          <p className="text-neutral-700 text-sm md:text-base font-sans font-light mt-3 leading-relaxed text-justify">
            Each room is designed to offer a peaceful stay with comfortable bedding, modern amenities, clean interiors, free high-speed Wi-Fi, and beautiful views of the surrounding mountains and greenery. Wake up to the fresh Himalayan breeze, enjoy the serenity of nature, and unwind in a cosy atmosphere that feels just like home.
          </p>
        </div>

        {/* General Amenities Note */}
        <div className="bg-neutral-50 border border-gold/15 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-sans font-light text-neutral-700 leading-relaxed text-center">
            <span className="text-gold font-semibold uppercase tracking-wider block mb-2">Standard In-Room Amenities</span>
            Each room is thoughtfully equipped with an LED Television, complimentary high-speed Wi-Fi, 24×7 hot & cold water, an electric kettle, comfortable seating, a spacious wardrobe, fresh linen, daily housekeeping, and essential guest amenities to ensure a relaxing and enjoyable stay.
          </p>
        </div>

        {/* SECTION 1: STANDARD ROOMS */}
        <div className="space-y-8">
          <div className="border-b border-neutral-100 pb-4">
            <h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-medium">1. Standard Rooms</h3>
            <p className="text-xs text-neutral-500 font-sans tracking-wide mt-1">Excellent comfort and value, with 9 standard rooms available</p>
          </div>

          {standardParent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-neutral-50 border border-neutral-100 hover:border-gold/30 hover:bg-white transition-all duration-500 shadow-premium rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Image side */}
              <div 
                className="lg:col-span-7 relative overflow-hidden cursor-pointer h-[250px] sm:h-[350px] lg:h-auto min-h-[300px]"
                onClick={() => navigate(`/rooms/${standardParent.id}`)}
              >
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 z-10" />
                <img
                  src={standardParent.image}
                  alt={standardParent.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white font-sans text-xs font-semibold px-4 py-2 border border-gold/30 z-20">
                  From ₹{standardParent.price.toLocaleString('en-IN')} <span className="text-neutral-400 font-light text-[10px]">/ Night</span>
                </div>
              </div>

              {/* Info side */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-gold uppercase block">Essential Comfort</span>
                  <h4
                    onClick={() => navigate(`/rooms/${standardParent.id}`)}
                    className="text-2xl font-serif text-neutral-950 font-medium hover:text-gold cursor-pointer transition-colors duration-300"
                  >
                    {standardParent.title}
                  </h4>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 text-neutral-600 text-xs font-sans">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold" /> Capacity: {standardParent.guests} People
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-gold" /> Size: {standardParent.size}
                    </span>
                    <span className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-gold" /> {standardParent.bed}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gold" /> {standardParent.view}
                    </span>
                  </div>

                  <p className="text-neutral-700 text-sm font-sans font-light leading-relaxed text-justify">
                    {standardParent.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/rooms/${standardParent.id}`)}
                    className="text-xs text-neutral-600 hover:text-gold uppercase tracking-widest font-sans font-semibold transition-colors"
                  >
                    View Sub-Categories &amp; Details →
                  </button>
                  <button
                    onClick={() => handleBookNow(standardParent.id)}
                    className="bg-gold hover:bg-gold-dark text-neutral-950 text-xs font-sans font-semibold uppercase tracking-widest py-3 px-6 shadow-gold-glow transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* SECTION 2: DELUXE FAMILY ROOM */}
        {deluxeRoom && (
          <div className="space-y-8">
            <div className="border-b border-neutral-100 pb-4">
              <h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-medium">2. Deluxe Family Rooms</h3>
              <p className="text-xs text-neutral-500 font-sans tracking-wide mt-1">Extra space for larger families and groups</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-neutral-50 border border-neutral-100 hover:border-gold/30 hover:bg-white transition-all duration-500 shadow-premium rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Image side */}
              <div 
                className="lg:col-span-7 relative overflow-hidden cursor-pointer h-[250px] sm:h-[350px] lg:h-auto min-h-[300px]"
                onClick={() => navigate(`/rooms/${deluxeRoom.id}`)}
              >
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 z-10" />
                <img
                  src={deluxeRoom.image}
                  alt={deluxeRoom.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white font-sans text-xs font-semibold px-4 py-2 border border-gold/30 z-20">
                  ₹{deluxeRoom.price.toLocaleString('en-IN')} <span className="text-neutral-400 font-light text-[10px]">/ Night</span>
                </div>
              </div>

              {/* Info side */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-gold uppercase block">Premium Comfort</span>
                  <h4
                    onClick={() => navigate(`/rooms/${deluxeRoom.id}`)}
                    className="text-2xl font-serif text-neutral-950 font-medium hover:text-gold cursor-pointer transition-colors duration-300"
                  >
                    {deluxeRoom.title}
                  </h4>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 text-neutral-600 text-xs font-sans">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold" /> Capacity: {deluxeRoom.guests} People
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-gold" /> Size: {deluxeRoom.size}
                    </span>
                    <span className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-gold" /> {deluxeRoom.bed}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gold" /> {deluxeRoom.view}
                    </span>
                  </div>

                  <p className="text-neutral-700 text-sm font-sans font-light leading-relaxed text-justify">
                    {deluxeRoom.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/rooms/${deluxeRoom.id}`)}
                    className="text-xs text-neutral-600 hover:text-gold uppercase tracking-widest font-sans font-semibold transition-colors"
                  >
                    View Gallery &amp; Details →
                  </button>
                  <button
                    onClick={() => handleBookNow(deluxeRoom.id)}
                    className="bg-gold hover:bg-gold-dark text-neutral-950 text-xs font-sans font-semibold uppercase tracking-widest py-3 px-6 shadow-gold-glow transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* SECTION 3: SUITE ROOMS */}
        {suiteRoom && (
          <div className="space-y-8">
            <div className="border-b border-neutral-100 pb-4">
              <h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-medium">3. Suite Rooms</h3>
              <p className="text-xs text-neutral-500 font-sans tracking-wide mt-1">Our ultimate luxury experience with premium wood furnishings and sofa seating</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-neutral-50 border border-neutral-100 hover:border-gold/30 hover:bg-white transition-all duration-500 shadow-premium rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Info side (left side for Suite Room to alternate visually) */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-gold uppercase block">Luxury Suite</span>
                  <h4
                    onClick={() => navigate(`/rooms/${suiteRoom.id}`)}
                    className="text-2xl font-serif text-neutral-900 font-medium hover:text-gold cursor-pointer transition-colors duration-300"
                  >
                    {suiteRoom.title}
                  </h4>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 text-neutral-600 text-xs font-sans">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold" /> Capacity: {suiteRoom.guests} People
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-gold" /> Size: {suiteRoom.size}
                    </span>
                    <span className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-gold" /> {suiteRoom.bed}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gold" /> {suiteRoom.view}
                    </span>
                  </div>

                  <p className="text-neutral-700 text-sm font-sans font-light leading-relaxed text-justify">
                    {suiteRoom.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/rooms/${suiteRoom.id}`)}
                    className="text-xs text-neutral-600 hover:text-gold uppercase tracking-widest font-sans font-semibold transition-colors"
                  >
                    View Gallery &amp; Details →
                  </button>
                  <button
                    onClick={() => handleBookNow(suiteRoom.id)}
                    className="bg-gold hover:bg-gold-dark text-neutral-950 text-xs font-sans font-semibold uppercase tracking-widest py-3 px-6 shadow-gold-glow transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Image side */}
              <div 
                className="lg:col-span-7 relative overflow-hidden cursor-pointer h-[250px] sm:h-[350px] lg:h-auto min-h-[300px] order-1 lg:order-2"
                onClick={() => navigate(`/rooms/${suiteRoom.id}`)}
              >
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 z-10" />
                <img
                  src={suiteRoom.image}
                  alt={suiteRoom.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-white font-sans text-xs font-semibold px-4 py-2 border border-gold/30 z-20">
                  ₹{suiteRoom.price.toLocaleString('en-IN')} <span className="text-neutral-400 font-light text-[10px]">/ Night</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RoomsSection;
