import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomsSection from '../components/RoomsSection';

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
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80")' }}>
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

    </div>
  );
};

export default Rooms;
