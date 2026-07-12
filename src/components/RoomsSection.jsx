import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Maximize, Users, BedDouble, Eye, Check, X, Calendar } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

const RoomsSection = ({ onSelectRoomForBooking }) => {
  const [filter, setFilter] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Filter logic
  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'rooms') return !room.title.toLowerCase().includes('suite');
    if (filter === 'suites') return room.title.toLowerCase().includes('suite');
    return true;
  });

  const handleBookNow = (room) => {
    setSelectedRoom(null); // close modal
    if (onSelectRoomForBooking) {
      onSelectRoomForBooking(room.id);
    }
    // Scroll to contact form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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
            Rooms & Suites
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          <p className="text-neutral-500 text-xs md:text-sm font-sans font-light mt-4 leading-relaxed">
            Indulge in the ultimate blend of elegance and comfort in our meticulously designed rooms. Choose your perfect sanctuary.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          {['all', 'rooms', 'suites'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`font-sans text-xs uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 font-medium ${filter === type
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-neutral-400 hover:text-neutral-950'
                }`}
            >
              {type === 'all' ? 'All Accommodations' : type === 'rooms' ? 'Rooms' : 'Suites'}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
                {/* Image Wrap */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedRoom(room)}>
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 z-10" />

                  {/* Search Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="bg-white/90 text-neutral-950 p-3 rounded-full shadow-lg">
                      <Maximize className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-[250px] md:h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-white font-sans text-xs font-semibold px-4 py-2 border border-gold/30 z-20">
                    ${room.price} <span className="text-neutral-400 font-light text-[10px]">/ Night</span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 md:p-8 space-y-4 text-center md:text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedRoom(room)}
                      className="text-lg md:text-xl font-serif text-neutral-950 font-medium hover:text-gold cursor-pointer transition-colors duration-300"
                    >
                      {room.title}
                    </h3>

                    {/* Specifications Bar */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-neutral-500 text-xs font-sans font-light mt-3">
                      <span className="flex items-center">
                        <Users className="w-3.5 h-3.5 text-gold mr-1.5" />
                        {room.guests} Guests
                      </span>
                      <span className="text-neutral-300">|</span>
                      <span className="flex items-center">
                        <Maximize className="w-3.5 h-3.5 text-gold mr-1.5" />
                        {room.size}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="w-full sm:w-auto text-center text-[10px] text-neutral-600 hover:text-gold uppercase tracking-widest font-sans font-medium transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookNow(room)}
                      className="w-full sm:w-auto text-center bg-gold hover:bg-gold-dark text-neutral-950 text-[10px] font-sans font-semibold uppercase tracking-widest py-2.5 px-4 shadow-gold-glow transition-all duration-300"
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

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white border border-gold/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 bg-neutral-950/50 hover:bg-gold text-white hover:text-neutral-950 p-2 rounded-full transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image Slider/Banner */}
              <div className="h-[250px] md:h-[380px] relative">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10 text-left">
                  <span className="bg-gold text-neutral-950 text-[9px] uppercase tracking-widest font-semibold px-3 py-1 font-sans mb-2 inline-block">
                    Exclusive Suite
                  </span>
                  <h3 className="text-2xl md:text-4xl text-white font-serif font-semibold">
                    {selectedRoom.title}
                  </h3>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">

                {/* Left Description Side */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-base uppercase tracking-widest font-sans font-semibold text-gold">
                      Room Description
                    </h4>
                    <p className="text-neutral-600 font-sans font-light leading-relaxed text-sm md:text-base">
                      {selectedRoom.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-neutral-50 p-4 border border-neutral-100">
                    <div className="text-center p-2 border-r border-neutral-200 last:border-r-0">
                      <Users className="w-5 h-5 text-gold mx-auto mb-1.5" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">Capacity</span>
                      <span className="text-xs font-semibold font-sans">{selectedRoom.guests} Guests</span>
                    </div>
                    <div className="text-center p-2 border-r border-neutral-200 last:border-r-0">
                      <Maximize className="w-5 h-5 text-gold mx-auto mb-1.5" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">Size</span>
                      <span className="text-xs font-semibold font-sans">{selectedRoom.size}</span>
                    </div>
                    <div className="text-center p-2 border-r border-neutral-200 last:border-r-0">
                      <BedDouble className="w-5 h-5 text-gold mx-auto mb-1.5" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">Beds</span>
                      <span className="text-xs font-semibold font-sans">{selectedRoom.bed}</span>
                    </div>
                    <div className="text-center p-2 last:border-0">
                      <Eye className="w-5 h-5 text-gold mx-auto mb-1.5" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans">View</span>
                      <span className="text-xs font-semibold font-sans">{selectedRoom.view}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3">
                    <h4 className="text-base uppercase tracking-widest font-sans font-semibold text-gold">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedRoom.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-neutral-600 text-xs font-sans">
                          <div className="bg-gold/10 p-1 rounded-full mr-2">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Side */}
                <div className="lg:col-span-4 bg-neutral-50 border border-neutral-100 p-6 md:p-8 flex flex-col justify-between shadow-premium h-fit">
                  <div className="space-y-4">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans block">Pricing Details</span>
                    <div className="flex items-baseline text-neutral-900">
                      <span className="text-3xl md:text-4xl font-semibold font-sans text-gold">${selectedRoom.price}</span>
                      <span className="text-xs text-neutral-500 font-light ml-1.5 font-sans">/ Night</span>
                    </div>
                    <p className="text-neutral-500 text-[11px] font-sans leading-relaxed">
                      *Taxes and service fees are included. Cancellation fees may apply depending on reservation date.
                    </p>
                  </div>

                  <button
                    onClick={() => handleBookNow(selectedRoom)}
                    className="w-full bg-neutral-950 text-gold hover:bg-gold hover:text-neutral-950 font-sans font-semibold text-xs uppercase tracking-widest py-4 mt-8 flex items-center justify-center transition-colors duration-300 shadow-gold-glow"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book This Room
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RoomsSection;
