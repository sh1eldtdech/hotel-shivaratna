import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomsSection from '../components/RoomsSection';
import rinchenpongBg from '../assets/westSikkimPhoto/Rinchenpong.avif';
import viewfromhotel from '../assets/room/viewfromhotel.jpg';

const Rooms = () => {
  const navigate = useNavigate();

  const handleSelectRoomForBooking = (roomId) => {
    // Navigate to contact/booking page with selected roomType as search param
    navigate(`/contact?roomType=${roomId}`);
  };

  return (
    <div>
      
      {/* Page Header (Parallax banner) */}
      <div className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
           style={{ backgroundImage: `url("${rinchenpongBg}")` }}>
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Luxurious Stays
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            Our Rooms & Suites
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">Rooms</span>
          </div>
        </div>
      </div>

      {/* Main Rooms Showcase (Includes filters and detail modals) */}
      <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />

      {/* View from Hotel / Starlit nights banner */}
      <section className="relative py-24 bg-neutral-950 text-white overflow-hidden border-t border-gold/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
             style={{ backgroundImage: `url("${viewfromhotel}")` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-semibold block">
            View from Hotel
          </span>
          <h3 className="text-xl md:text-3xl font-serif leading-relaxed italic text-neutral-200">
            “On clear, starlit nights, the majestic Kanchenjunga mountain range glows brilliantly beneath the open sky, creating a breathtaking spectacle that leaves every visitor in awe.”
          </h3>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.25em] font-sans block">
            Hotel Shivaratna · Rinchenpong
          </span>
        </div>
      </section>

    </div>
  );
};

export default Rooms;
