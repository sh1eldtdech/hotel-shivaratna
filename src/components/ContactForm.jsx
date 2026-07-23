import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
    
    // Read key from env or use standard fallback
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

    if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Simulate form submission for presentation if no key is provided yet
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: true,
          error: null,
        });
        // Clear form
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
                Connect With Our Concierge
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mt-4" />
              <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light leading-relaxed mt-4">
                Have questions about room choices, special requests, or airport pickup? Let us assist you in planning your unforgettable stay at Shivaratna.
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
                  <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light mt-1">
                    742 Evergreen Terrace, Shivaratna Hotel Lane,<br />
                    Bangalore, Karnataka, India - 560001
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
                  <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light mt-1">
                    <a href="tel:+919999999999" className="hover:text-gold transition-colors">+91 99999 99999</a><br />
                    <a href="tel:+918888888888" className="hover:text-gold transition-colors">+91 88888 88888</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Enquiries</h4>
                  <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light mt-1">
                    <a href="mailto:info@shivaratnahotel.com" className="hover:text-gold transition-colors">info@shivaratnahotel.com</a><br />
                    <a href="mailto:booking@shivaratnahotel.com" className="hover:text-gold transition-colors">booking@shivaratnahotel.com</a>
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start space-x-4">
                <div className="bg-white border border-gold/20 p-3 rounded-full text-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-gold">Working Hours</h4>
                  <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light mt-1">
                    Front Desk: 24 / 7 Available<br />
                    Spa & Pools: 06:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Google Map (Premium placeholder) */}
            <div className="relative h-[180px] md:h-[220px] bg-white border border-gold/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
                   style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80")' }} />
              <div className="absolute inset-0 bg-white/40" />
              <div className="z-10 text-center space-y-2.5 p-4">
                <MapPin className="w-8 h-8 text-gold mx-auto animate-bounce" />
                <h5 className="font-serif text-sm font-medium">Shivaratna Bangalore</h5>
                <p className="text-[10px] text-neutral-600 font-sans">Click below to open on Google Maps</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-[10px] text-neutral-950 bg-gold font-sans font-semibold uppercase tracking-widest px-4 py-1.5 hover:bg-gold-light transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Booking & Contact Form */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-gold/15 p-8 md:p-10 shadow-gold-glow">
            
            {/* Environment warning reminder if default key is used */}
            {import.meta.env.VITE_WEB3FORMS_KEY ? null : (
              <div className="mb-6 bg-gold/5 border border-gold/20 p-3 flex items-start space-x-2 text-left">
                <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-[10px] text-neutral-700 font-sans leading-normal">
                  <span className="text-gold font-semibold">Demo Mode:</span> A Web3Forms access key is not set. Submissions will simulate successful requests locally. Set VITE_WEB3FORMS_KEY in your env to send real emails.
                </span>
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-serif text-neutral-900 font-medium text-left mb-6">
              Reservation & Inquiry Form
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
                    Thank you! Your booking request was sent successfully. Our guest concierge team will email/call you within 2 hours.
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
