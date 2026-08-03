import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Users, BedDouble, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROOMS_DATA } from '../data/hotelData';

const RoomsSection = ({ onSelectRoomForBooking }) => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'rooms') return !room.title.toLowerCase().includes('suite');
    if (filter === 'suites') return room.title.toLowerCase().includes('suite');
    return true;
  });

  const handleBookNow = (room) => {
    if (onSelectRoomForBooking) onSelectRoomForBooking(room.id);
    navigate(`/contact?roomType=${room.id}`);
  };

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
            Accommodations
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif mt-2">
            Rooms &amp; Suites
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          <p className="text-neutral-700 text-xs md:text-base font-sans font-light mt-5 leading-relaxed text-justify">
            Experience comfort, warmth, and tranquillity in our thoughtfully designed rooms at Hotel Shivaratna. Whether you're travelling with family, friends, your partner, or on a business trip, our spacious and well-maintained accommodations provide the perfect place to relax after a day of exploring West Sikkim.
          </p>
          <p className="text-neutral-700 text-xs md:text-base font-sans font-light mt-3 leading-relaxed text-justify">
            Each room is designed to offer a peaceful stay with comfortable bedding, modern amenities, clean interiors, free high-speed Wi-Fi, and beautiful views of the surrounding mountains and greenery.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          {['all', 'rooms', 'suites'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`font-sans text-xs uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 font-medium ${
                filter === type
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-neutral-400 hover:text-neutral-950'
              }`}
            >
              {type === 'all' ? 'All Accommodations' : type === 'rooms' ? 'Rooms' : 'Suites'}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-50 border border-neutral-100 hover:border-gold/30 hover:bg-white transition-all duration-500 shadow-premium group flex flex-col justify-between"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/rooms/${room.id}`)}
                >
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="bg-white/90 text-neutral-950 px-4 py-2 text-xs font-sans font-semibold uppercase tracking-widest flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-gold" />
                      View Full Details
                    </div>
                  </div>
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[250px] md:h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-white font-sans text-xs font-semibold px-4 py-2 border border-gold/30 z-20">
                    ₹{room.price.toLocaleString('en-IN')} <span className="text-neutral-400 font-light text-[10px]">/ Night</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 md:p-8 space-y-4 text-center md:text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => navigate(`/rooms/${room.id}`)}
                      className="text-lg md:text-xl font-serif text-neutral-950 font-medium hover:text-gold cursor-pointer transition-colors duration-300"
                    >
                      {room.title}
                    </h3>

                    {/* Specs */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-neutral-500 text-xs font-sans font-light mt-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold" /> {room.guests} Guests
                      </span>
                      <span className="text-neutral-300">|</span>
                      <span className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5 text-gold" /> {room.size}
                      </span>
                      <span className="text-neutral-300">|</span>
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-gold" /> {room.bed}
                      </span>
                      <span className="text-neutral-300">|</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-gold" /> {room.view}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <button
                      onClick={() => navigate(`/rooms/${room.id}`)}
                      className="w-full sm:w-auto text-center text-[10px] text-neutral-600 hover:text-gold uppercase tracking-widest font-sans font-medium transition-colors"
                    >
                      View Details →
                    </button>
                    <button
                      onClick={() => handleBookNow(room)}
                      className="w-full sm:w-auto text-center bg-gold hover:bg-gold-dark text-neutral-950 text-[10px] font-sans font-semibold uppercase tracking-widest py-2.5 px-5 shadow-gold-glow transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default RoomsSection;
