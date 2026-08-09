import React from 'react';
import { Phone } from 'lucide-react';

const FloatingContact = () => {
  // Replace with the actual phone number for the call link
  const phoneNumber = "+919733092426"; 

  return (
    <div className="fixed bottom-40 sm:bottom-40 right-4 sm:right-6 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 bg-gold hover:bg-gold-light text-neutral-950 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
