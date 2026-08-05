// High-quality data for Hotel Shivaratna

import stdSingle1 from '../assets/room/Standard_SingleBed.jpg';
import stdSingle2 from '../assets/room/Standard_SingleBed2.jpg';
import stdDouble from '../assets/room/Standard_DoubleBed.jpg';
import stdTriple1 from '../assets/room/Standard_TripleBed.jpg';
import stdTriple2 from '../assets/room/Standard_TripleBed2.jpg';
import deluxeQuad1 from '../assets/room/deluxe_fourbed.jpg';
import deluxeQuad2 from '../assets/room/deluxe_fourbed2.jpg';
import deluxeQuad3 from '../assets/room/deluxe_fourbed3.jpg';
import suite1 from '../assets/room/Suite_Room.png';
import suite2 from '../assets/room/SuiteRoom2.jpg';
import suite3 from '../assets/room/Suite_Room3.jpg';
import suite4 from '../assets/room/Suite_Room4.jpg';
import bathroom from '../assets/room/bathroom.jpg';

// Gallery images
import galImg1 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.11.00 AM.jpeg';
import galImg2 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.03 AM.jpeg';
import galImg3 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.07 AM.jpeg';
import galImg4 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.12 AM.jpeg';
import galImg5 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.15 AM.jpeg';
import galImg6 from '../assets/gallery/WhatsApp Image 2026-08-01 at 11.13.17 AM.jpeg';
import kanchenjungaImg from '../assets/gallery/kanchenjunga view from Hotel.JPG (1).jpeg';
import viewFromHotelImg from '../assets/room/viewfromhotel.jpg';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Welcome to Hotel Shivaratna",
    tagline: "Live Your Paradise",
    subtitle: "Your peaceful mountain retreat in the heart of Rinchenpong, West Sikkim, surrounded by breathtaking Himalayan views and authentic Sikkimese hospitality.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Where Himalayas Meet Hospitality",
    tagline: "",
    subtitle: "Wake up to the majestic Kanchenjunga, breathe the fresh mountain air, and experience the warmth of a team dedicated to making every stay unforgettable.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Your Gateway to West Sikkim",
    tagline: "",
    subtitle: "Explore pristine forest trails, ancient monasteries, hidden lakes, and vibrant local culture — all from the perfect central base at Hotel Shivaratna.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
  }
];

// 12 premium amenities — logo emoji + name only (for home amenities strip)
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
];

// Core facilities with descriptions (for Our Facilities section)
export const CORE_FACILITIES = [
  {
    id: "gateway",
    title: "Gateway to Hidden Gems of West Sikkim",
    description: "Perfectly located to explore all of West Sikkim's hidden gems — from ancient monasteries to mysterious lakes — all accessible as comfortable day trips.",
    emoji: "🏞️",
    icon: "Dumbbell",
  },
  {
    id: "rooms",
    title: "Comfortable Rooms & Premium Suites",
    description: "14 thoughtfully designed rooms and premium suites offering mountain views, cozy bedding, clean interiors, and every comfort for a peaceful Himalayan retreat.",
    emoji: "🛏️",
    icon: "Shirt",
  },
  {
    id: "restaurant",
    title: "Fresh Organic Food & Refreshing Drinks",
    description: "Savour freshly prepared organic meals, refreshing drinks, and healthy Himalayan flavours served with care in a warm mountain setting.",
    emoji: "🥗",
    icon: "Utensils",
  },
  {
    id: "bar",
    title: "Multi-Cuisine Restaurant & Fully Stocked Bar",
    description: "Enjoy authentic Sikkimese, Indian, and continental dishes in our restaurant, paired with a thoughtfully curated bar experience.",
    emoji: "🍽️",
    icon: "Utensils",
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
    id: "wifi",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed Wi-Fi throughout the hotel — perfect for remote workers, digital nomads, and business travellers.",
    emoji: "📶",
    icon: "Waves",
  },
  {
    id: "butterfly",
    title: "Butterfly Stage – Karaoke & Live Entertainment",
    description: "Unwind at our vibrant Butterfly Stage with karaoke, dancing, live performances, and memorable evenings with family and fellow travellers.",
    emoji: "🎤",
    icon: "Flower",
  },
  {
    id: "lounge",
    title: "Comfortable Lounge & Relaxation Area",
    description: "A comfortable lounge area where guests can relax, socialise, read, or simply enjoy the fresh mountain air and scenic surroundings.",
    emoji: "🛋️",
    icon: "Dumbbell",
  },
  {
    id: "conference",
    title: "Meeting, Conference & Event Hall",
    description: "Host corporate events, family gatherings, or group meetings in our spacious and well-equipped meeting and conference hall.",
    emoji: "🏢",
    icon: "Briefcase",
  },
  {
    id: "taxi",
    title: "Pick-up, Drop & Local Taxi Assistance",
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
];

export const ROOMS_DATA = [
  {
    id: "standard-rooms",
    title: "Standard Rooms",
    price: 999,
    rating: 4.7,
    guests: "1-3",
    size: "12' x 8' to 12' x 10'",
    bed: "Single / Double / Triple",
    view: "Mountain View",
    category: "StandardParent",
    image: stdDouble,
    images: [stdDouble, stdSingle1, stdTriple1, bathroom],
    description: "Our Standard Rooms offer exceptional comfort and value with multiple configurations. Choose from Single, Double, or Triple bed setups to perfectly suit your needs. Each room features comfortable bedding, modern amenities, complimentary high-speed Wi-Fi, and 24×7 hot & cold water, ensuring a peaceful Himalayan stay.",
    amenities: ["Free Wi-Fi", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Comfortable Seating", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 9
  },
  {
    id: "standard-single",
    title: "Standard Single Bed Room",
    price: 999,
    rating: 4.6,
    guests: 1,
    size: "12' x 8'",
    bed: "Single Bed",
    view: "Mountain View",
    category: "Standard",
    image: stdSingle1,
    images: [stdSingle1, stdSingle2, bathroom],
    description: "Perfect for solo travellers, pilgrims, and business guests, our Standard Single Bed Room offers a peaceful and comfortable retreat. The room features a cosy single bed, bedside table, television, large window, hot water kettle, complimentary high-speed Wi-Fi, and 24×7 hot & cold water, providing everything you need for a relaxing Himalayan stay.",
    amenities: ["Free Wi-Fi", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Comfortable Seating", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 2
  },
  {
    id: "standard-double",
    title: "Standard Double Bed Room",
    price: 1399,
    rating: 4.8,
    guests: 2,
    size: "12' x 10'",
    bed: "Double Bed",
    view: "Mountain View",
    category: "Standard",
    image: stdDouble,
    images: [stdDouble, bathroom],
    description: "Designed for couples and two guests, our Standard Double Bed Room combines comfort with convenience. Featuring a comfortable double bed, work desk with chair, television, large window, hot water kettle, complimentary high-speed Wi-Fi, and 24×7 hot & cold water, the room offers a warm and inviting atmosphere for your mountain getaway.",
    amenities: ["Free Wi-Fi", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Work Desk & Chair", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 2
  },
  {
    id: "standard-triple",
    title: "Standard Triple Bed Room",
    price: 1799,
    rating: 4.8,
    guests: 3,
    size: "12' x 10'",
    bed: "1 Double + 1 Single Bed",
    view: "Scenic Mountain View",
    category: "Standard",
    image: stdTriple1,
    images: [stdTriple1, stdTriple2, bathroom],
    description: "Ideal for families and small groups, our Standard Triple Bed Room offers spacious accommodation with modern comforts. Featuring one double bed and one single bed, a work desk with chair, television, private balcony, hot water kettle, complimentary high-speed Wi-Fi, and 24×7 hot & cold water, it ensures a relaxing stay with scenic mountain views.",
    amenities: ["Free Wi-Fi", "Private Balcony", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Work Desk & Chair", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 5
  },
  {
    id: "deluxe-quadruple",
    title: "Deluxe Family Quadruple Four Bed Room",
    price: 2499,
    rating: 4.9,
    guests: 4,
    size: "12' x 22'",
    bed: "Four Beds",
    view: "Scenic Mountain View",
    category: "Deluxe",
    image: deluxeQuad1,
    images: [deluxeQuad1, deluxeQuad2, deluxeQuad3, bathroom],
    description: "Perfect for larger families and groups, our Family Deluxe Quadruple Room offers generous space, comfort, and breathtaking mountain views. The room features four comfortable beds, a work desk with chair, television, private balcony, scenic view windows, hot water kettle, complimentary high-speed Wi-Fi, and 24×7 hot & cold water for a memorable family holiday.",
    amenities: ["Free Wi-Fi", "Private Balcony", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Scenic View Windows", "Work Desk & Chair", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 1
  },
  {
    id: "suite-room",
    title: "Suite Room",
    price: 3499,
    rating: 5.0,
    guests: 2,
    size: "12' x 12'",
    bed: "King Bed + Sofa & Table",
    view: "Himalayan View",
    category: "Suite",
    image: suite1,
    images: [suite1, suite2, suite3, suite4, bathroom],
    description: "Experience luxury and elegance in our Premium Suite Room, thoughtfully designed with premium wooden furnishings and sophisticated interiors. Featuring artistic wall décor, modern lighting, large sliding windows, a spacious wardrobe, comfortable seating area (with sofa and table), work desk, television, hot water kettle, complimentary high-speed Wi-Fi, and 24×7 hot & cold water, the suite offers the perfect blend of comfort, style, and Himalayan charm.",
    amenities: ["Free Wi-Fi", "Sofa & Table Seating", "Premium Wooden Furnishings", "Artistic Wall Décor", "Large Sliding Windows", "LED Television", "24×7 Hot & Cold Water", "Electric Kettle", "Spacious Wardrobe", "Fresh Linen", "Daily Housekeeping", "Essential Toiletries"],
    totalRooms: 4
  }
];

export const GALLERY_IMAGES = [
  kanchenjungaImg,
  galImg1,
  galImg2,
  galImg3,
  galImg4,
  galImg5,
  galImg6,
  viewFromHotelImg
];
