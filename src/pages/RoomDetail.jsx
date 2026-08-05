import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Maximize, BedDouble, Eye, Check, Calendar, ArrowLeft, Star, Phone
} from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = ROOMS_DATA.find((r) => r.id === id);
  const [activeImg, setActiveImg] = React.useState(room?.image);

  React.useEffect(() => {
    if (room) {
      setActiveImg(room.image);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-luxury-cream pt-24">
        <h2 className="text-2xl font-serif text-neutral-900 mb-4">Room Not Found</h2>
        <Link to="/rooms" className="text-gold hover:text-gold-dark font-sans text-sm uppercase tracking-widest">
          ← Back to All Rooms
        </Link>
      </div>
    );
  }

  const otherRooms = ROOMS_DATA.filter((r) => r.id !== id);

  return (
    <div className="bg-luxury-cream min-h-screen">

      {/* Hero Banner */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={activeImg}
          alt={room.title}
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-neutral-950/50" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-gold text-xs font-sans uppercase tracking-widest transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Rooms
        </button>

        {/* Room title overlay */}
        <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-gold text-neutral-950 text-[9px] uppercase tracking-widest font-semibold px-3 py-1 font-sans mb-3">
              {room.view}
            </span>
            <h1 className="text-4xl md:text-6xl text-white font-serif font-medium tracking-wide">
              {room.title}
            </h1>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(room.rating) ? 'fill-current' : 'stroke-current'}`} />
                ))}
              </div>
              <span className="text-white/70 text-sm font-sans font-light">{room.rating}/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left — Description & Amenities */}
            <div className="lg:col-span-8 space-y-10">

              {/* Specs Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 overflow-hidden"
              >
                {[
                  { icon: Users, label: 'Capacity', value: `${room.guests} Guests` },
                  { icon: Maximize, label: 'Room Size', value: room.size },
                  { icon: BedDouble, label: 'Bed Type', value: room.bed },
                  { icon: Eye, label: 'View', value: room.view },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white p-5 text-center">
                    <Icon className="w-5 h-5 text-gold mx-auto mb-2" />
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-sans mb-1">{label}</span>
                    <span className="text-sm font-semibold font-sans text-neutral-900">{value}</span>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-sans font-semibold text-gold uppercase tracking-widest">Room Description</h2>
                <p className="text-neutral-700 font-sans font-light leading-relaxed text-sm md:text-base text-justify">
                  {room.description}
                </p>
              </motion.div>

              {/* Room Gallery */}
              {room.images && room.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-sans font-semibold text-gold uppercase tracking-widest">Room Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {room.images.map((imgUrl, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveImg(imgUrl)}
                        className={`cursor-pointer overflow-hidden border-2 aspect-[4/3] relative rounded-md transition-all duration-300 ${
                          activeImg === imgUrl ? 'border-gold shadow-md scale-[1.02]' : 'border-neutral-200 hover:border-gold/55'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${room.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-5"
              >
                <h2 className="text-xl font-sans font-semibold text-gold uppercase tracking-widest">Room Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.05 }}
                      className="flex items-center gap-3 bg-white border border-neutral-100 px-4 py-3 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div className="bg-gold/10 p-1.5 rounded-full shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-neutral-700 text-sm font-sans font-light">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right — Booking Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 sticky top-24 space-y-6"
            >
              {/* Price Card */}
              <div className="bg-white border border-gold/20 p-7 shadow-gold-glow">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans block mb-2">Starting From</span>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-semibold font-serif text-gold">
                    ₹{room.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-neutral-400 font-light font-sans">/ Night</span>
                </div>
                <p className="text-neutral-500 text-[11px] font-sans leading-relaxed mb-6">
                  *Taxes and service fees included. Cancellation terms apply.
                </p>

                <Link
                  to={`/contact?roomType=${room.id}`}
                  className="w-full bg-gold hover:bg-gold-dark text-neutral-950 font-sans font-semibold text-xs uppercase tracking-widest py-4 flex items-center justify-center transition-colors duration-300 shadow-gold-glow block text-center mb-3"
                >
                  <Calendar className="w-4 h-4 mr-2 inline" />
                  Book This Room
                </Link>

                <a
                  href="tel:+919999999999"
                  className="w-full border border-neutral-300 hover:border-gold text-neutral-700 hover:text-gold font-sans font-medium text-xs uppercase tracking-widest py-4 flex items-center justify-center transition-all duration-300 block text-center"
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Call to Reserve
                </a>
              </div>

              {/* Quick Info */}
              <div className="bg-neutral-950 border border-gold/10 p-6 space-y-3">
                <h4 className="font-serif text-white text-sm font-medium mb-4">Quick Info</h4>
                {[
                  ['Check-in', '12:00 Noon'],
                  ['Check-out', '11:00 AM'],
                  ['Cancellation', '24h before check-in'],
                  ['Pets', 'Not Allowed'],
                  ['Smoking', 'Non-Smoking Room'],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400 text-xs font-sans">{key}</span>
                    <span className="text-neutral-200 text-xs font-sans font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">Explore More</span>
            <h2 className="text-2xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">Other Room Categories</h2>
            <div className="w-12 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherRooms.map((otherRoom, index) => (
              <motion.div
                key={otherRoom.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/rooms/${otherRoom.id}`)}
              >
                <div className="relative overflow-hidden aspect-[4/3] border border-gold/10 shadow-premium">
                  <img
                    src={otherRoom.image}
                    alt={otherRoom.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif font-medium text-lg">{otherRoom.title}</h3>
                    <p className="text-gold text-xs font-sans mt-1">From ₹{otherRoom.price.toLocaleString('en-IN')} / Night</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/rooms"
              className="inline-flex items-center text-xs text-neutral-950 hover:text-gold border border-neutral-950 hover:border-gold uppercase tracking-widest font-sans font-semibold px-8 py-4 transition-all duration-300"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RoomDetail;
