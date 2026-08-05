import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';

// Local uploaded videos
import vid1 from '../assets/gallery/20260712_132922.mp4';
import vid2 from '../assets/gallery/20260712_133035.mp4';
import vid3 from '../assets/gallery/20260712_133325.mp4';
import vid4 from '../assets/gallery/20260712_133510.mp4';
import vid5 from '../assets/gallery/20260712_134025.mp4';
import vid6 from '../assets/gallery/20260712_134356.mp4';
import vid7 from '../assets/gallery/20260712_134440.mp4';
import vid8 from '../assets/gallery/20260712_135048.mp4';
import vid9 from '../assets/gallery/20260712_151521.mp4';
import vid10 from '../assets/gallery/20260712_151822.mp4';
import vid11 from '../assets/gallery/20260712_151838.mp4';

// Local uploaded images
import img1 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.11.00 AM.jpeg';
import img2 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.03 AM.jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.07 AM.jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.12 AM.jpeg';
import img5 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.15 AM.jpeg';
import img6 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.17 AM.jpeg';
import kanchenjungaImg from '../assets/gallery/kanchenjunga view from Hotel.JPG (1).jpeg';
import viewFromHotelImg from '../assets/room/viewfromhotel.jpg';

const LOCAL_VIDEOS = [
  { id: 'v1', type: 'video', title: '20260712_132922', src: vid1, category: 'Hotel' },
  { id: 'v2', type: 'video', title: '20260712_133035', src: vid2, category: 'Views' },
  { id: 'v3', type: 'video', title: '20260712_133325', src: vid3, category: 'Rooms' },
  { id: 'v4', type: 'video', title: '20260712_133510', src: vid4, category: 'Dining' },
  { id: 'v5', type: 'video', title: '20260712_134025', src: vid5, category: 'Hotel' },
  { id: 'v6', type: 'video', title: '20260712_134356', src: vid6, category: 'Views' },
  { id: 'v7', type: 'video', title: '20260712_134440', src: vid7, category: 'Views' },
  { id: 'v8', type: 'video', title: '20260712_135048', src: vid8, category: 'Hotel' },
  { id: 'v9', type: 'video', title: '20260712_151521', src: vid9, category: 'Hotel' },
  { id: 'v10', type: 'video', title: '20260712_151822', src: vid10, category: 'Views' },
  { id: 'v11', type: 'video', title: '20260712_151838', src: vid11, category: 'Views' },
];

const LOCAL_PHOTOS = [
  { id: 'p1', type: 'photo', title: 'kanchenjunga view from Hotel.JPG (1)', src: kanchenjungaImg, category: 'Views' },
  { id: 'p2', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.11.00 AM', src: img1, category: 'Hotel' },
  { id: 'p3', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.13.03 AM', src: img2, category: 'Hotel' },
  { id: 'p4', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.13.07 AM', src: img3, category: 'Hotel' },
  { id: 'p5', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.13.12 AM', src: img4, category: 'Dining' },
  { id: 'p6', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.13.15 AM', src: img5, category: 'Hotel' },
  { id: 'p7', type: 'photo', title: 'WhatsApp Image 2026-08-01 at 11.13.17 AM', src: img6, category: 'Hotel' },
  { id: 'p8', type: 'photo', title: 'viewfromhotel', src: viewFromHotelImg, category: 'Views' }
];

const ALL_MEDIA = [...LOCAL_VIDEOS, ...LOCAL_PHOTOS];
const CATEGORIES = ['All', 'Photos', 'Videos', 'Views', 'Hotel', 'Rooms', 'Dining'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [coverflowIndex, setCoverflowIndex] = useState(0);
  const [playingCoverId, setPlayingCoverId] = useState(null);
  const coverVideoRefs = useRef({});

  const handleCoverClick = useCallback((idx, itemId) => {
    if (coverflowIndex !== idx) {
      // Pause any currently playing video
      if (playingCoverId && coverVideoRefs.current[playingCoverId]) {
        coverVideoRefs.current[playingCoverId].pause();
      }
      setCoverflowIndex(idx);
      setPlayingCoverId(null);
      return;
    }
    // Toggle play/pause on the active card
    const videoEl = coverVideoRefs.current[itemId];
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      setPlayingCoverId(itemId);
    } else {
      videoEl.pause();
      setPlayingCoverId(null);
    }
  }, [coverflowIndex, playingCoverId]);

  const filteredMedia = ALL_MEDIA.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Photos') return item.type === 'photo';
    if (activeCategory === 'Videos') return item.type === 'video';
    return item.category === activeCategory;
  });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevMedia = () => setLightboxIndex((prev) => (prev === 0 ? filteredMedia.length - 1 : prev - 1));
  const nextMedia = () => setLightboxIndex((prev) => (prev === filteredMedia.length - 1 ? 0 : prev + 1));

  const coverflowItems = LOCAL_VIDEOS.slice(0, 5);

  return (
    <div className="bg-luxury-cream min-h-screen">

      {/* Page Header */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
        style={{ backgroundImage: `url("${kanchenjungaImg}")` }}
      >
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3 px-4">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> 3D Interactive Media Experience
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            Photo &amp; Video Gallery
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">Gallery</span>
          </div>
        </div>
      </div>

      {/* 3D Showcase Coverflow Banner */}
      <section className="py-12 bg-neutral-950 text-white overflow-hidden relative border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-sans font-semibold tracking-[0.3em] text-gold uppercase block mb-2">
            Featured Video Highlights
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-medium text-white mb-8">
            Experience Hotel Shivaratna in Motion
          </h2>

          {/* 3D Carousel Slider */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[380px] flex items-center justify-center [perspective:1200px]">
            {coverflowItems.map((item, idx) => {
              const offset = idx - coverflowIndex;
              const isActive = offset === 0;
              const isPlaying = playingCoverId === item.id;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    rotateY: offset * -25,
                    scale: isActive ? 1 : 0.82,
                    x: offset * 240,
                    zIndex: 10 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleCoverClick(idx, item.id)}
                  className={`absolute w-[260px] sm:w-[380px] md:w-[480px] aspect-video rounded-xl overflow-hidden border border-gold/30 shadow-2xl cursor-pointer bg-neutral-900 [transform-style:preserve-3d] ${
                    isActive ? 'ring-2 ring-gold shadow-[0_0_30px_rgba(197,168,128,0.4)]' : ''
                  }`}
                >
                  <video
                    ref={(el) => { if (el) coverVideoRefs.current[item.id] = el; }}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Play / Pause Overlay */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <motion.div
                        key={isPlaying ? 'pause' : 'play'}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: isPlaying ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-full bg-neutral-950/70 backdrop-blur-sm border-2 border-gold/60 flex items-center justify-center shadow-2xl"
                      >
                        {isPlaying ? (
                          <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                        ) : (
                          <Play className="w-7 h-7 text-gold fill-current translate-x-0.5" />
                        )}
                      </motion.div>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent p-4 flex flex-col justify-end text-left transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    <span className="text-gold text-[10px] uppercase tracking-widest font-sans font-semibold flex items-center gap-1.5">
                      <Play className="w-3 h-3 fill-current" /> {isPlaying ? 'Now Playing' : 'Click to Play'}
                    </span>
                    <h4 className="text-white text-xs sm:text-sm font-serif font-medium truncate">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Coverflow Navigation Controls */}
          <div className="flex justify-center gap-4 mt-6 z-20 relative">
            <button
              onClick={() => setCoverflowIndex((prev) => (prev === 0 ? coverflowItems.length - 1 : prev - 1))}
              className="w-9 h-9 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {coverflowItems.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCoverflowIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === coverflowIndex ? 'w-6 bg-gold' : 'w-2 bg-neutral-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCoverflowIndex((prev) => (prev === coverflowItems.length - 1 ? 0 : prev + 1))}
              className="w-9 h-9 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Filterable 3D Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-widest px-6 py-2.5 border transition-all duration-300 font-medium rounded-full ${
                  activeCategory === cat
                    ? 'bg-gold text-neutral-950 border-gold shadow-gold-glow'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'Photos' && <ImageIcon className="w-3.5 h-3.5 inline mr-1.5 stroke-[2]" />}
                {cat === 'Videos' && <Video className="w-3.5 h-3.5 inline mr-1.5 stroke-[2]" />}
                {cat}
              </button>
            ))}
          </div>

          {/* 3D Animated Card Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 [perspective:1000px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.06 }}
                  whileHover={{
                    scale: 1.04,
                    rotateY: (idx % 2 === 0 ? 1 : -1) * 6,
                    rotateX: -4,
                    z: 20,
                    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.2)',
                    transition: { duration: 0.25 }
                  }}
                  onClick={() => openLightbox(idx)}
                  className="relative overflow-hidden rounded-lg bg-white border border-gold/15 shadow-premium group cursor-pointer aspect-[4/3] flex flex-col justify-end [transform-style:preserve-3d]"
                >
                  {/* Media Rendering */}
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      muted
                      loop
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent group-hover:from-neutral-950/90 transition-all duration-300" />

                  {/* Media Type Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-neutral-950/75 backdrop-blur-md text-gold text-[9px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 border border-gold/30 rounded flex items-center gap-1.5">
                      {item.type === 'video' ? (
                        <>
                          <Video className="w-3 h-3 text-gold" /> Video Clip
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-3 h-3 text-gold" /> Photo
                        </>
                      )}
                    </span>
                  </div>

                  {/* Hover Action & Title */}
                  <div className="relative z-10 p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white text-xs font-serif font-medium tracking-wide group-hover:text-gold transition-colors duration-300 truncate">
                        {item.title}
                      </h4>
                      {item.type === 'video' && (
                        <div className="w-7 h-7 bg-gold text-neutral-950 rounded-full flex items-center justify-center shrink-0 shadow-gold-glow">
                          <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                        </div>
                      )}
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Fullscreen Lightbox Modal (Photos + Videos) */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredMedia[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gold flex items-center gap-1.5 text-xs tracking-wider uppercase font-sans font-medium"
              >
                Close <X className="w-4 h-4" />
              </button>

              {/* Media Player / Image */}
              {filteredMedia[lightboxIndex].type === 'video' ? (
                <div className="w-full aspect-video border border-gold/30 shadow-2xl bg-black rounded-lg overflow-hidden">
                  <video
                    src={filteredMedia[lightboxIndex].src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={filteredMedia[lightboxIndex].src}
                  alt={filteredMedia[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain border border-gold/20 shadow-2xl rounded-sm"
                />
              )}

              {/* Title Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-white font-serif text-base md:text-lg">
                  {filteredMedia[lightboxIndex].title}
                </h3>
                <span className="text-gold font-sans text-xs uppercase tracking-widest block mt-1">
                  Category: {filteredMedia[lightboxIndex].category}
                </span>
              </div>

              {/* Prev Button */}
              <button
                onClick={prevMedia}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/40 bg-neutral-900/80 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextMedia}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/40 bg-neutral-900/80 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-sans tracking-widest">
                {lightboxIndex + 1} / {filteredMedia.length}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
