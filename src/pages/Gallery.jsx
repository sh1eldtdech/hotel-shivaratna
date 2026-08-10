import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';

const CLOUDINARY_VIDEO_EMBED_URL = 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_133035_mlggcx';
const CLOUDINARY_VIDEO_THUMB_URL = 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_133035_mlggcx.jpg';
const CLOUDINARY_VIDEO_EMBED_URL_ADDITIONAL = 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_133510_fs8flc';
const CLOUDINARY_VIDEO_THUMB_URL_ADDITIONAL = 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_133510_fs8flc.jpg';
const CLOUDINARY_VIDEO_EMBED_URL_BEDROOM = 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_134440_frmbvo';
const CLOUDINARY_VIDEO_THUMB_URL_BEDROOM = 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134440_frmbvo.jpg';
const CLOUDINARY_VIDEO_EMBED_URL_CHEF = 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_151822_fphscz';
const CLOUDINARY_VIDEO_THUMB_URL_CHEF = 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_151822_fphscz.jpg';
const CLOUDINARY_VIDEO_EMBED_URL_BONUS = 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_134025_mzzfka';
const CLOUDINARY_VIDEO_THUMB_URL_BONUS = 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134025_mzzfka.jpg';

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
  {
    id: 'v1',
    type: 'embed',
    title: 'Triple Bed Room with Monastery View',
    src: CLOUDINARY_VIDEO_EMBED_URL,
    poster: CLOUDINARY_VIDEO_THUMB_URL,
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_133035_mlggcx.mp4',
    category: 'Hotel'
  },
  {
    id: 'v3',
    type: 'embed',
    title: 'window view',
    src: CLOUDINARY_VIDEO_EMBED_URL_ADDITIONAL,
    poster: CLOUDINARY_VIDEO_THUMB_URL_ADDITIONAL,
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_133510_fs8flc.mp4',
    category: 'Rooms'
  },
  {
    id: 'v4',
    type: 'embed',
    title: 'Cozy Bedroom & Comfortable Bedding',
    src: CLOUDINARY_VIDEO_EMBED_URL_BEDROOM,
    poster: CLOUDINARY_VIDEO_THUMB_URL_BEDROOM,
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134440_frmbvo.mp4',
    category: 'Rooms'
  },
  {
    id: 'v5',
    type: 'embed',
    title: 'Scenic Blue Sky & Mountain View',
    src: 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_135048_msu521',
    poster: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_135048_msu521.jpg',
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_135048_msu521.mp4',
    category: 'Views'
  },
  {
    id: 'v6',
    type: 'embed',
    title: 'Hotel Exterior & Surrounding Landscape',
    src: 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_134356_v7envj',
    poster: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134356_v7envj.jpg',
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134356_v7envj.mp4',
    category: 'Hotel'
  },
  {
    id: 'v8',
    type: 'embed',
    title: 'window blue sky view',
    src: CLOUDINARY_VIDEO_EMBED_URL_BONUS,
    poster: CLOUDINARY_VIDEO_THUMB_URL_BONUS,
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_134025_mzzfka.mp4',
    category: 'Rooms'
  },
  {
    id: 'v10',
    type: 'embed',
    title: "veg rice meal",
    src: CLOUDINARY_VIDEO_EMBED_URL_CHEF,
    poster: CLOUDINARY_VIDEO_THUMB_URL_CHEF,
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_151822_fphscz.mp4',
    category: 'Dining'
  },
  {
    id: 'v11',
    type: 'embed',
    title: 'Hotel Kitchen Tour',
    src: 'https://player.cloudinary.com/embed/?cloud_name=sbmngyjf&public_id=20260712_151838_kqvhjp',
    poster: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_151838_kqvhjp.jpg',
    previewSrc: 'https://res.cloudinary.com/sbmngyjf/video/upload/20260712_151838_kqvhjp.mp4',
    category: 'Hotel'
  },
];
const LOCAL_PHOTOS = [
  { id: 'p1', type: 'photo', title: 'Kanchenjunga Mountain View', src: kanchenjungaImg, category: 'Views' },
  { id: 'p2', type: 'photo', title: 'Corridor', src: img1, category: 'Hotel' },
  { id: 'p3', type: 'photo', title: 'Hotel Exterior View', src: img2, category: 'Hotel' },
  { id: 'p4', type: 'photo', title: 'Modern Attached Bathroom', src: img3, category: 'Hotel' },
  { id: 'p5', type: 'photo', title: 'Marble Staircase', src: img4, category: 'Dining' },
  { id: 'p6', type: 'photo', title: 'Hotel Back View', src: img5, category: 'Hotel' },
  { id: 'p7', type: 'photo', title: 'Hotel Corridor', src: img6, category: 'Hotel' },
  { id: 'p8', type: 'photo', title: 'Sunrise View of Kanchenjunga', src: viewFromHotelImg, category: 'Views' }
];

const ALL_MEDIA = [...LOCAL_VIDEOS, ...LOCAL_PHOTOS];
const CATEGORIES = ['All', 'Photos', 'Videos', 'Views', 'Hotel', 'Rooms', 'Dining'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [coverflowIndex, setCoverflowIndex] = useState(0);
  const [playingCoverId, setPlayingCoverId] = useState(null);
  const coverVideoRefs = useRef({});

  const filteredMedia = ALL_MEDIA.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Photos') return item.type === 'photo';
    if (activeCategory === 'Videos') return item.type === 'video' || item.type === 'embed';
    return item.category === activeCategory;
  });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevMedia = () => setLightboxIndex((prev) => (prev === 0 ? filteredMedia.length - 1 : prev - 1));
  const nextMedia = () => setLightboxIndex((prev) => (prev === filteredMedia.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-luxury-cream min-h-screen">

      {/* Page Header */}
      <div
        className="relative min-h-[260px] h-auto sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
        style={{ backgroundImage: `url("${kanchenjungaImg}")` }}
      >
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            Photo &amp; Video Gallery
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">Gallery</span>
          </div>
        </div>
      </div>

      {/* Main Filterable 3D Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-5 py-2 border transition-all duration-300 font-medium rounded-full ${
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 [perspective:1000px]"
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
                  className="relative overflow-hidden rounded-lg bg-white border border-gold/15 shadow-premium group cursor-pointer aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] flex flex-col justify-end [transform-style:preserve-3d]"
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
                  ) : item.type === 'embed' ? (
                    <img
                      src={item.poster}
                      alt={item.title}
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
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-neutral-950/75 backdrop-blur-md text-gold text-[8px] sm:text-[9px] font-sans font-semibold uppercase tracking-widest px-2 py-1 border border-gold/30 rounded flex items-center gap-1.5">
                      {item.type !== 'photo' ? (
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
                  <div className="relative z-10 p-3 sm:p-4 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-white text-[11px] sm:text-[12px] md:text-xs font-serif font-medium tracking-wide group-hover:text-gold transition-colors duration-300 truncate">
                        {item.title}
                      </h4>
                      {item.type !== 'photo' && (
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
              className="relative max-w-full sm:max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-4 sm:right-4 md:-top-12 md:right-0 text-white hover:text-gold flex items-center gap-1.5 text-xs tracking-wider uppercase font-sans font-medium"
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
              ) : filteredMedia[lightboxIndex].type === 'embed' ? (
                <div className="w-full aspect-video border border-gold/30 shadow-2xl bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={filteredMedia[lightboxIndex].src}
                    title={filteredMedia[lightboxIndex].title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
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
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/40 bg-neutral-900/80 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextMedia}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/40 bg-neutral-900/80 text-gold flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all duration-300"
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
