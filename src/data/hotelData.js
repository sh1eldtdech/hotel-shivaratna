import img1 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.11.00 AM.jpeg';
import img2 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.03 AM.jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.07 AM.jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.12 AM.jpeg';
import img5 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.15 AM.jpeg';
import img6 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.17 AM.jpeg';
import kanchenjungaImg from '../assets/gallery/kanchenjunga view from Hotel.JPG (1).jpeg';

import slider1 from '../assets/homepage/slider1.png';
import slider2 from '../assets/homepage/slider2.png';
import slider3 from '../assets/homepage/slider3.png';
import slider4 from '../assets/homepage/slider4.png';
import slider5 from '../assets/homepage/slider5.png';
import slider6 from '../assets/homepage/slider6.png';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Welcome to Hotel Shivaratna",
    tagline: "Live Your Paradise",
    subtitle: "Your peaceful mountain retreat in the heart of Rinchenpong, West Sikkim, surrounded by breathtaking Himalayan views and authentic Sikkimese hospitality.",
    image: slider1,
  },
  {
    id: 2,
    title: "Where Himalayas Meet Hospitality",
    tagline: "",
    subtitle: "Wake up to the majestic Kanchenjunga, breathe the fresh mountain air, and experience the warmth of a team dedicated to making every stay unforgettable.",
    image: slider2,
  },
  {
    id: 3,
    title: "Your Gateway to West Sikkim",
    tagline: "",
    subtitle: "Explore pristine forest trails, ancient monasteries, hidden lakes, and vibrant local culture — all from the perfect central base at Hotel Shivaratna.",
    image: slider3,
  }
];

// 12 + 2 premium amenities — logo emoji + name only (for home amenities strip)
export const AMENITIES_LIST = [
  { id: 1, emoji: "🏞️", name: "Gateway to Hidden Gems of West Sikkim" },
  { id: 2, emoji: "🛏️", name: "Comfortable Rooms & Premium Suites" },
  { id: 3, emoji: "🥗", name: "Fresh Organic Food & Refreshing Drinks" },
  { id: 4, emoji: "🍽️", name: "Multi-Cuisine Restaurant & Fully Stocked Bar" },
  { id: 5, emoji: "🚿", name: "24×7 Hot & Cold Water" },
  { id: 6, emoji: "🧹", name: "Daily Housekeeping" },
  { id: 7, emoji: "📶", name: "Complimentary High-Speed Wi-Fi" },
  { id: 8, emoji: "🎤", name: "Butterfly Stage – Karaoke & Live Entertainment" },
  { id: 9, emoji: "🛋️", name: "Comfortable Lounge & Relaxation Area" },
  { id: 10, emoji: "🏢", name: "Meeting, Conference & Event Hall" },
  { id: 11, emoji: "🚗", name: "Pick-up, Drop & Local Taxi Assistance" },
  { id: 12, emoji: "🅿️", name: "Free Private Parking" },
  { id: 13, emoji: "🌄", name: "Panoramic Himalayan View Terrace" },
  { id: 14, emoji: "🧘", name: "Peaceful Nature Walks & Trekking Trails" },
];

// Core facilities with descriptions (for Our Facilities section)
export const CORE_FACILITIES = [
  {
    id: "gateway",
    title: "Gateway to West Sikkim",
    description: "Perfectly located to explore all of West Sikkim's hidden gems — from ancient monasteries to mysterious lakes — all accessible as comfortable day trips.",
    emoji: "🏞️",
    icon: "Dumbbell",
  },
  {
    id: "rooms",
    title: "Comfortable Rooms & Suites",
    description: "14 thoughtfully designed rooms offering mountain views, cozy bedding, clean interiors, and every comfort for a peaceful Himalayan retreat.",
    emoji: "🛏️",
    icon: "Shirt",
  },
  {
    id: "restaurant",
    title: "Restaurant & Fully Stocked Bar",
    description: "Savour fresh organic food, Sikkimese specialties, and multi-cuisine dishes at our restaurant, paired with your choice from our fully stocked bar.",
    emoji: "🍽️",
    icon: "Utensils",
  },
  {
    id: "wifi",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed Wi-Fi throughout the hotel — perfect for remote workers, digital nomads, and business travellers.",
    emoji: "📶",
    icon: "Waves",
  },
  {
    id: "butterfly",
    title: "Butterfly Stage – Entertainment",
    description: "Unwind at our vibrant Butterfly Stage with karaoke, dancing, live performances, and memorable evenings with family and fellow travellers.",
    emoji: "🎤",
    icon: "Flower",
  },
  {
    id: "conference",
    title: "Meeting & Conference Hall",
    description: "Host corporate events, family gatherings, or group meetings in our spacious and well-equipped meeting and conference hall.",
    emoji: "🏢",
    icon: "Briefcase",
  },
  {
    id: "hotwater",
    title: "24×7 Hot & Cold Water",
    description: "Round-the-clock hot and cold water supply in every room, ensuring your comfort at all times regardless of season or weather.",
    emoji: "🚿",
    icon: "Waves",
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping",
    description: "Our dedicated housekeeping team maintains impeccable cleanliness and freshness in every room and common area each day.",
    emoji: "🧹",
    icon: "Shirt",
  },
  {
    id: "taxi",
    title: "Pick-up, Drop & Taxi Assistance",
    description: "Hassle-free pick-up, drop, and local taxi arrangements to help you explore Rinchenpong and all of West Sikkim at your own pace.",
    emoji: "🚗",
    icon: "Briefcase",
  },
  {
    id: "parking",
    title: "Free Private Parking",
    description: "Complimentary dedicated parking space for all hotel guests, ensuring your vehicle is safe and secure throughout your stay.",
    emoji: "🅿️",
    icon: "Shirt",
  },
  {
    id: "lounge",
    title: "Lounge & Relaxation Area",
    description: "A comfortable lounge area where guests can relax, socialise, read, or simply enjoy the fresh mountain air and scenic surroundings.",
    emoji: "🛋️",
    icon: "Dumbbell",
  },
  {
    id: "trekking",
    title: "Nature Walks & Trekking Trails",
    description: "Scenic trekking trails begin right behind the hotel, weaving through pristine forests with stunning Himalayan views at every turn.",
    emoji: "🌄",
    icon: "Dumbbell",
  },
];

export const ROOMS_DATA = [
  {
    id: "standard-room",
    title: "Standard Room",
    price: 999,
    rating: 4.6,
    guests: 2,
    size: "250 sq ft",
    bed: "Double Bed",
    view: "Mountain View",
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201806211726437264-2312-0def80540b4e11ecb14a0a58a9feac02.jpg",
    description: "Our Standard Room offers the perfect balance of comfort and value. Thoughtfully designed with cozy bedding, clean interiors, free high-speed Wi-Fi, and beautiful views of the surrounding mountains and greenery — everything you need for a peaceful Himalayan retreat.",
    amenities: ["Free Wi-Fi", "Mountain View", "Comfortable Bedding", "Clean Interiors", "Daily Housekeeping", "24×7 Hot Water", "In-Room Power Backup", "Tea/Coffee Maker"]
  },
  {
    id: "deluxe-room",
    title: "Deluxe Room",
    price: 1499,
    rating: 4.8,
    guests: 2,
    size: "320 sq ft",
    bed: "King Bed",
    view: "Himalayan View",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    description: "Elevate your stay in our Deluxe Room with a spacious layout, premium bedding, and stunning Himalayan views. Wake up to the fresh mountain breeze and enjoy modern amenities that make your stay both comfortable and memorable.",
    amenities: ["Free Wi-Fi", "Himalayan View", "King Bed", "Modern Amenities", "Daily Housekeeping", "24×7 Hot Water", "Room Service", "Sitting Area", "Tea/Coffee Maker"]
  },
  {
    id: "super-deluxe-room",
    title: "Super Deluxe Room",
    price: 1999,
    rating: 4.9,
    guests: 3,
    size: "420 sq ft",
    bed: "King Bed + Sofa",
    view: "Panoramic Kanchenjunga View",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    description: "Our Super Deluxe Room offers a premium mountain retreat experience with panoramic views of Kanchenjunga, superior furnishings, and extra space for a truly indulgent stay. The perfect choice for those who want a little more luxury amidst the Himalayan beauty.",
    amenities: ["Free Wi-Fi", "Panoramic Kanchenjunga View", "Premium Bedding", "Superior Furnishings", "Daily Housekeeping", "24×7 Hot Water", "Room Service", "Sitting Area", "Mini Fridge", "Tea/Coffee Maker"]
  },
  {
    id: "suite",
    title: "Suite",
    price: 2999,
    rating: 5.0,
    guests: 4,
    size: "600 sq ft",
    bed: "2 King Beds",
    view: "360° Kanchenjunga & Valley View",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    description: "The crown jewel of Hotel Shivaratna. Our Suite offers a spacious, luxurious experience with breathtaking 360° Kanchenjunga and valley views, a separate living area, premium amenities, and personalised service — perfect for families, couples, and special occasions.",
    amenities: ["Free Wi-Fi", "360° Kanchenjunga View", "Separate Living Area", "2 King Beds", "Premium Bedding", "Daily Housekeeping", "24×7 Hot Water", "Priority Room Service", "Complimentary Breakfast", "Mini Fridge", "Premium Toiletries", "Tea/Coffee Maker"]
  }
];

export const GALLERY_IMAGES = [
  kanchenjungaImg,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  slider1
];
