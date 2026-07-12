import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const location = useLocation();

  // Extract booking details from query parameters
  const bookingInquiry = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    
    // Only return parsed values if they exist, to let form fall back to empty
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests');
    const roomType = searchParams.get('roomType');

    if (checkIn || checkOut || guests || roomType) {
      return {
        checkIn: checkIn || '',
        checkOut: checkOut || '',
        guests: guests || '1',
        roomType: roomType || 'standard-room',
      };
    }
    return null;
  }, [location.search]);

  return (
    <div>
      
      {/* Page Header (Parallax banner) */}
      <div className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Reservations
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            Contact Us
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact & Booking Inquiry Form */}
      <ContactForm bookingInquiry={bookingInquiry} />

    </div>
  );
};

export default Contact;
