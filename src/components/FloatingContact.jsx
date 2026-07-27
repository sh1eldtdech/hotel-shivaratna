import React from 'react';
import { Phone } from 'lucide-react';

const FloatingContact = () => {
  // Replace with the actual phone number for the call link
  const phoneNumber = "+919876543210"; 

  return (
    <div className="fixed bottom-[10.5rem] right-8 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-gold hover:bg-gold-light text-neutral-950 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
