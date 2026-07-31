import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Waves, Dumbbell, Sparkles, Briefcase, Shirt, Star, MapPin, Clock } from 'lucide-react';
import { CORE_FACILITIES } from '../data/hotelData';

// Local assets for places to explore around the hotel
import ngagyur from '../assets/aroundhotel/Ngagyur.jpg';
import rabindranath from '../assets/aroundhotel/Rabindranath.jpg';
import rinchenpongMonastery from '../assets/aroundhotel/Rinchenpong_Monastery.jpg';
import poisonLake from '../assets/aroundhotel/Poison_Lake.jpg';
import dakBungalow from '../assets/aroundhotel/Dak_Bungalow.jpg';
import reshiMonastery from '../assets/aroundhotel/Reshi_Monastery.jpg';
import ajingFarm from '../assets/aroundhotel/Ajing_Farm.jpg';
import sribadamWaterfall from '../assets/aroundhotel/Sribadam_Waterfall.jpg';
import bombhir from '../assets/aroundhotel/Bombhir.jpg';
import chaayatalLake from '../assets/aroundhotel/Chaayatal_Lake.jpg';
import bermiokShiva from '../assets/aroundhotel/Bermiok_Shiva.jpg';

const iconMap = {
  Utensils: Utensils,
  Waves: Waves,
  Dumbbell: Dumbbell,
  Flower: Sparkles,
  Briefcase: Briefcase,
  Shirt: Shirt,
};

const exploreData = [
  {
    id: 1,
    name: "Ngagyur Rinchen Chholing Monastery",
    distance: "50–100 m",
    time: "1-min walk",
    description: "One of the most significant landmarks of Rinchenpong, located just opposite the hotel. Experience traditional Himalayan architecture, colourful prayer flags, and serene Buddhist heritage.",
    category: "Spiritual",
    image: ngagyur,
  },
  {
    id: 2,
    name: "Rabindranath Van",
    distance: "50 m",
    time: "1-min walk",
    description: "A peaceful natural retreat directly opposite the hotel, dedicated to Nobel Laureate Rabindranath Tagore — perfect for relaxation and photography amidst mountain views.",
    category: "Nature",
    image: rabindranath,
  },
  {
    id: 3,
    name: "Rinchenpong Monastery (Sang Ngag Yangtse)",
    distance: "1.8 km",
    time: "6 min drive",
    description: "Established in 1730, the third oldest monastery in Sikkim. Houses a globally rare Ati Buddha statue with breathtaking panoramic views of Mount Kanchenjunga.",
    category: "Spiritual",
    image: rinchenpongMonastery,
  },
  {
    id: 4,
    name: "Poison Lake (Bikh Pokhri)",
    distance: "2 km",
    time: "25–30 min walk",
    description: "A mysterious lake hidden within peaceful forests, steeped in local folklore of ancient conflicts. A beautiful forest trail leads to this unique natural wonder.",
    category: "Nature",
    image: poisonLake,
  },
  {
    id: 5,
    name: "Dak Bungalow Viewpoint",
    distance: "1 km",
    time: "12–15 min walk",
    description: "A historic heritage site with spectacular views of the Himalayan ranges. Ideal for sunrise and sunset viewing, with old-world charm and mountain panoramas.",
    category: "Viewpoint",
    image: dakBungalow,
  },
  {
    id: 6,
    name: "Reshi Monastery",
    distance: "4 km",
    time: "45–60 min walk",
    description: "A peaceful spiritual destination nestled amidst beautiful forests. The scenic forest route offers fresh mountain air and the deep tranquillity of the Himalayan landscape.",
    category: "Spiritual",
    image: reshiMonastery,
  },
  {
    id: 7,
    name: "Ajing Farm & Winery",
    distance: "8 km",
    time: "20–25 min drive",
    description: "Famous for locally produced fruit wines and traditional winemaking. Explore the farm, discover unique local flavours, and enjoy scenic countryside views.",
    category: "Day Trip",
    image: ajingFarm,
  },
  {
    id: 8,
    name: "Sribadam Waterfall",
    distance: "12 km",
    time: "25–30 min drive",
    description: "A hidden gem surrounded by pine forests and lush greenery — perfect for photography, relaxation, and quality time with loved ones in nature.",
    category: "Nature",
    image: sribadamWaterfall,
  },
  {
    id: 9,
    name: "Bombhir Natural Mineral Spring",
    distance: "18 km",
    time: "35–40 min drive",
    description: "Naturally flowing mineral-rich spring water from the mountains. Famous as a natural 'free car wash' and a refreshing stop — the spring water is safe to drink, rich in minerals.",
    category: "Nature",
    image: bombhir,
  },
  {
    id: 10,
    name: "Chaayatal Lake",
    distance: "30 km",
    time: "60–70 min drive",
    description: "A beautiful high-altitude lake surrounded by forests, connected with local legends of the Subba King. Ideal for nature walks, birdwatching, and photography.",
    category: "Adventure",
    image: chaayatalLake,
  },
  {
    id: 11,
    name: "Bermiok Shiva Cave",
    distance: "30 km",
    time: "60–70 min drive",
    description: "A sacred pilgrimage destination dedicated to Lord Shiva. The cave offers a unique blend of faith, nature, and rich local traditions, attracting devotees and travellers alike.",
    category: "Spiritual",
    image: bermiokShiva,
  },
];


const categoryColors = {
  Spiritual: "bg-amber-50 text-amber-700 border-amber-200",
  Nature: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Viewpoint: "bg-blue-50 text-blue-700 border-blue-200",
  "Day Trip": "bg-purple-50 text-purple-700 border-purple-200",
  Adventure: "bg-red-50 text-red-700 border-red-200",
};

const About = () => {
  return (
    <div>
      
      {/* Page Header (Parallax banner) */}
      <div className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Rinchenpong, West Sikkim
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            About Us
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-gold">About Us</span>
          </div>
        </div>
      </div>

      {/* About Hotel Shivaratna — Main Section */}
      <section className="py-24 bg-luxury-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image (Left) */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-xl overflow-hidden shadow-2xl border border-gold/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                  alt="Hotel Shivaratna"
                  className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Copy (Right) */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                About Hotel Shivaratna
              </span>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-neutral-900 font-serif">
                Your Peaceful Mountain Retreat
              </h2>

              <div className="inline-flex items-center space-x-3 bg-gold/5 border border-gold/20 px-4 py-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-neutral-800 tracking-wider font-sans">
                  4.9 out of 5 (1,200+ Reviews)
                </span>
              </div>

              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Welcome to Hotel Shivaratna, your peaceful mountain retreat in Rinchenpong, West Sikkim, where breathtaking Himalayan views, fresh mountain air, and warm Sikkimese hospitality come together to create an unforgettable stay.
              </p>

              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Our hotel offers 14 comfortable and affordable rooms, a multi-cuisine restaurant, fully stocked bar, meeting & conference hall, free high-speed Wi-Fi, and complete fooding and lodging facilities. Whether you're a leisure traveller, pilgrim, nature enthusiast, adventure seeker, business guest, or remote worker, our dedicated team ensures every guest feels at home.
              </p>

              <p className="text-neutral-600 text-sm font-sans font-light leading-relaxed border-l-2 border-gold pl-4 italic">
                "At Hotel Shivaratna, every sunrise brings Himalayan beauty, every breeze carries the freshness of the mountains, and every stay becomes a cherished memory."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Location & Views Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Strategic Location
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
              Panoramic Views & Prime Position
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Ideally located opposite the historic <strong className="text-neutral-800">Rinchen Cholang Monastery</strong> and near Rabindranath Van, Hotel Shivaratna is the perfect base for exploring the hidden gems of West Sikkim.
              </p>
              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                From the hotel, guests can enjoy panoramic views stretching across the valleys. On clear days, witness the majestic <strong className="text-neutral-800">Kanchenjunga</strong>, the bustling Geyzing Bazaar, Pelling's Chenrezig Statue, Ravangla, and even the magnificent <strong className="text-neutral-800">108-foot Statue of Lord Shiva at Namchi</strong>.
              </p>
              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                Scenic forest trekking trails begin just behind the hotel, while Rinchenpong Bazaar is only 1 kilometre away. Most of West Sikkim's attractions can be comfortably explored as day trips, making us the ideal hub for sightseeing, trekking, photography, family holidays, and spiritual journeys.
              </p>
              <p className="text-neutral-600 text-sm md:text-base font-sans font-light leading-relaxed">
                As evening falls, unwind at our vibrant <strong className="text-neutral-800">Butterfly Stage</strong>, where guests can enjoy karaoke, music, dancing, and live performances, creating memorable moments with family and fellow travellers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-gold/10"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Himalayan views from Hotel Shivaratna"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Core Facilities Grid */}
      <section className="py-24 bg-luxury-cream border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Our Amenities
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
              Hotel Facilities
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CORE_FACILITIES.map((facility, index) => {
              const IconComponent = iconMap[facility.icon] || Sparkles;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-neutral-100 hover:border-gold/30 p-8 text-left transition-all duration-300 shadow-premium flex flex-col items-start group"
                >
                  <div className="bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:bg-gold group-hover:text-neutral-950 transition-colors duration-500 mb-6 text-gold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-[21px] font-medium tracking-wide text-neutral-900 font-serif mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] leading-relaxed font-sans font-light">
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Parallax Quote Banner */}
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-6">
          <span className="text-gold text-3xl font-serif">"</span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-neutral-200 leading-relaxed font-light italic">
            Every sunrise brings Himalayan beauty, every breeze carries the freshness of the mountains, and every stay at Hotel Shivaratna becomes a cherished memory.
          </h3>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Hotel Shivaratna · Rinchenpong, West Sikkim
          </span>
        </div>
      </div>

      {/* EXPLORE RINCHENPONG SECTION */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
              Places to Explore Around Hotel Shivaratna
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-serif mt-2">
              Explore Rinchenpong
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            <p className="text-neutral-600 font-sans font-light text-base mt-6 leading-relaxed">
              Hotel Shivaratna serves as the perfect central hub for exploring the many attractions of West Sikkim. Most destinations can be comfortably visited on day trips, allowing guests to return to the comfort of the hotel each evening.
            </p>
          </motion.div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {exploreData.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                className="bg-luxury-cream border border-neutral-100 hover:border-gold/30 overflow-hidden shadow-premium group transition-all duration-500 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gold text-neutral-950 flex items-center justify-center font-serif font-medium text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {/* Category badge */}
                  <div className={`absolute top-4 right-4 text-[9px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 border rounded-full ${categoryColors[place.category] || 'bg-gold/10 text-gold border-gold/30'}`}>
                    {place.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base md:text-lg font-serif font-medium text-neutral-900 mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {place.name}
                  </h3>
                  
                  {/* Distance & Time */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-sans text-gold font-semibold uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </div>
                    <div className="w-px h-3 bg-neutral-200" />
                    <div className="flex items-center gap-1.5 text-[11px] font-sans text-neutral-400 uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      {place.time}
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-neutral-500 font-sans text-sm font-light mb-6">
              Ready to explore West Sikkim from the comfort of Hotel Shivaratna?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-xs text-neutral-950 hover:text-gold border border-neutral-950 hover:border-gold uppercase tracking-widest font-sans font-semibold px-8 py-4 transition-all duration-300"
            >
              Plan Your Stay
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;
