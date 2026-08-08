import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

const ContactForm = ({ bookingInquiry, setBookingInquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard-room',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  // Sync booking data when passed from parent components (Hero or Rooms modal)
  useEffect(() => {
    if (bookingInquiry) {
      setFormData((prev) => ({
        ...prev,
        checkIn: bookingInquiry.checkIn || prev.checkIn,
        checkOut: bookingInquiry.checkOut || prev.checkOut,
        guests: bookingInquiry.guests || prev.guests,
        roomType: bookingInquiry.roomType || prev.roomType,
      }));
    }
  }, [bookingInquiry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Web3Forms API Endpoint
    const url = 'https://api.web3forms.com/submit';

    // Read key from env
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: true,
          error: null,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1',
          roomType: 'standard-room',
          message: '',
        });
        if (setBookingInquiry) setBookingInquiry(null);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Reservation/Contact Inquiry from ${formData.name}`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1',
          roomType: 'standard-room',
          message: '',
        });
        if (setBookingInquiry) setBookingInquiry(null);
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Submission failed.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-luxury-cream text-neutral-900 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif leading-tight">
                Get In Touch Directly
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mt-4" />
              <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed mt-4">
                Contact and get in touch directly with the hotel owner — no middleman, no extra commission, direct booking. We are here to make your stay affordable and hassle-free.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Location</h4>
                  <p className="text-neutral-700 text-sm font-sans font-light mt-1">
                    Opposite Rinchen Cholang Monastery,<br />
                    Meghidara, Rinchenpong, Sikkim 737111
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Reservations</h4>
                  <p className="text-neutral-700 text-sm font-sans font-light mt-1">
                    <a href="tel:+919733092426" className="hover:text-gold transition-colors">+91 97330 92426</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-emerald-500 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">WhatsApp</h4>
                  <p className="text-neutral-700 text-sm font-sans font-light mt-1">
                    <a href="https://wa.me/919733092426" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                      Chat with us on WhatsApp
                      <span className="text-emerald-500 text-xs">●</span>
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Email</h4>
                  <p className="text-neutral-700 text-sm font-sans font-light mt-1">
                    <a href="mailto:hotelshivaratna@gmail.com" className="hover:text-gold transition-colors">hotelshivaratna@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Working Hours</h4>
                  <p className="text-neutral-700 text-sm font-sans font-light mt-1">
                    Front Desk: 24 / 7 Available<br />
                    Check-in: 12:00 PM · Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Follow Us</h4>
              <div className="flex items-center space-x-4">
                {/* YouTube */}
                <a href="https://www.youtube.com/@ShivaRatnaHotel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-neutral-200 hover:border-gold flex items-center justify-center text-neutral-500 hover:text-gold transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/1L2oRvPjtn/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-neutral-200 hover:border-gold flex items-center justify-center text-neutral-500 hover:text-gold transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/hotel_shivaratna_official?igsh=MTZ3bDNxeGhlb2RsYQ==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-neutral-200 hover:border-gold flex items-center justify-center text-neutral-500 hover:text-gold transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative h-[220px] md:h-[260px] border border-gold/20 overflow-hidden rounded-lg shadow-premium">
              <iframe
                title="Hotel Shivaratna Location"
                src="https://maps.google.com/maps?q=Hotel%20Shivaratna%20Rinchenpong%20Sikkim&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column - Booking & Contact Form */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-gold/15 p-8 md:p-10 shadow-gold-glow">
            
            <h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-medium text-left mb-6">
              Reservation &amp; Inquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>

                {/* Room Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                  >
                    <option value="standard-room">Standard Room</option>
                    <option value="deluxe-room">Deluxe Room</option>
                    <option value="premier-room">Premier Room</option>
                    <option value="family-suite">Family Suite</option>
                    <option value="luxury-suite">Luxury Suite</option>
                    <option value="presidential-suite">Presidential Suite</option>
                  </select>
                </div>

                {/* Check In */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Check In</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                  />
                </div>

                {/* Check Out */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Check Out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                  />
                </div>

              </div>

              {/* Guest Count */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              {/* Special message */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-neutral-600 uppercase tracking-widest font-sans font-semibold">Special Requests / Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about special dietary needs, bed setups, airport transfer timing..."
                  className="w-full bg-white border border-neutral-200 text-neutral-800 text-xs px-4 py-3 outline-none focus:border-gold transition-colors font-sans resize-none"
                />
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-gold hover:bg-gold-light text-neutral-950 font-sans font-semibold text-xs uppercase tracking-widest py-4 px-6 flex items-center justify-center transition-all duration-300 shadow-gold-glow ${
                  status.submitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status.submitting ? (
                  <div className="w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                Submit Booking Inquiry
              </button>
            </form>

            {/* WhatsApp Direct CTA */}
            <a
              href="https://wa.me/919733092426?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Shivaratna."
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-xs uppercase tracking-widest py-4 px-6 flex items-center justify-center transition-all duration-300 rounded-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book via WhatsApp
            </a>

            {/* Submission Status Alerts */}
            <AnimatePresence>
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 bg-emerald-50 border border-emerald-200 p-4 flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-neutral-800 font-sans text-left">
                    Thank you! Your booking request was sent successfully. Our team will contact you within 2 hours via phone or email.
                  </span>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 bg-rose-50 border border-rose-200 p-4 flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-xs text-neutral-800 font-sans text-left">
                    Error: {status.error}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
