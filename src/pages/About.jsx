import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';
import { CORE_FACILITIES } from '../data/hotelData';
import ownerImg from '../assets/owner.png';
import kanchenjungaBg from '../assets/gallery/kanchenjunga view from Hotel.JPG (1).jpeg';
import diningBarImage1 from '../assets/diningbar/dining.png';
import diningBarImage2 from '../assets/diningbar/dishes.png';
import diningBarImage3 from '../assets/diningbar/bar.png';
import diningBarImage4 from '../assets/diningbar/dishes2.png';
import diningBarImage5 from '../assets/diningbar/bar2.png';

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

const exploreData = [
  {
    id: 1,
    name: "Ngagyur Rinchen Chholing Monastery",
    distance: "50–100 m",
    time: "1-min walk",
    description: "One of the most significant landmarks of Rinchenpong, Rinchen Cholang Monastery reflects the rich Buddhist heritage and spiritual traditions of West Sikkim. Located just opposite Hotel Shivaratna, the monastery welcomes visitors with its traditional Himalayan architecture, colourful prayer flags, peaceful surroundings, and serene atmosphere. It is an ideal place to experience local culture, spirituality, and the timeless beauty of Buddhist tradition.",
    category: "Spiritual",
    image: ngagyur,
  },
  {
    id: 2,
    name: "Rabindranath Van (Opposite Hotel Shivaratna)",
    distance: "50 m",
    time: "1-min walk",
    description: "Located directly opposite Hotel Shivaratna, Rabindranath Van is a peaceful natural retreat dedicated to Nobel Laureate Rabindranath Tagore. Surrounded by greenery and beautiful mountain views, the park offers a relaxing environment for visitors to enjoy nature, capture photographs, and spend peaceful moments away from the busy world.",
    category: "Nature",
    image: rabindranath,
  },
  {
    id: 3,
    name: "Rinchenpong Monastery (Sang Ngag Yangtse Monastery)",
    distance: "1.8 km",
    time: "6 min drive / 30 min walk",
    description: "Nestled amidst the serene, cloud-kissed ridges of West Sikkim, the historic Rinchenpong Monastery offers a profound escape into spiritual tranquility and natural beauty. Established in 1730, this revered Buddhist sanctuary—the third oldest in the region—is famously approached via a picturesque stone pathway cutting through vibrant green lawns, framed by a striking backdrop of towering pine forests. Beyond its traditional Sikkimese-Tibetan architecture and sacred white chortens, the monastery houses a globally rare, highly sacred statue of the Ati Buddha (Adi-Buddha) in a meditative Yab-Yum posture. Visitors flock to this peaceful ridge not only to immerse themselves in deep meditative silence and rich Himalayan heritage but also to witness breathtaking, unobstructed panoramic views of the majestic Mount Kanchenjunga range.",
    category: "Spiritual",
    image: rinchenpongMonastery,
  },
  {
    id: 4,
    name: "Poison Lake (Bikh Pokhri)",
    distance: "2 km",
    time: "25–30 min walk",
    description: "Hidden within the peaceful forests of Rinchenpong, Poison Lake, locally known as Bikh Pokhri, is one of the region's most mysterious and fascinating attractions. According to local folklore, the lake was once used to poison invading armies by preventing them from accessing its water during ancient conflicts. Today, a beautiful forest trail leads visitors to this quiet natural wonder, where the mystery of its legend blends with the untouched beauty of the surrounding wilderness.",
    category: "Nature",
    image: poisonLake,
  },
  {
    id: 5,
    name: "Dak Bungalow",
    distance: "1 km",
    time: "12–15 min walk",
    description: "A historic heritage site of Rinchenpong, Dak Bungalow offers spectacular views of the Himalayan ranges, surrounding valleys, and lush green landscapes. Its peaceful atmosphere and old-world charm make it a favourite destination for visitors looking to enjoy sunrise, sunset, and breathtaking mountain views.",
    category: "Viewpoint",
    image: dakBungalow,
  },
  {
    id: 6,
    name: "Reshi / Reesum Monastery",
    distance: "4 km",
    time: "45–60 min walk (forest trail)",
    description: "Nestled amidst beautiful forests, Reshi Monastery is a peaceful spiritual destination known for its calm surroundings and natural beauty. The scenic route to the monastery allows visitors to experience fresh mountain air, greenery, and the tranquillity of the Himalayan landscape.",
    category: "Spiritual",
    image: reshiMonastery,
  },
  {
    id: 7,
    name: "Azing Farm & Winery",
    distance: "8 km",
    time: "20–25 min drive",
    description: "Ajing Farm is a unique attraction in West Sikkim, famous for its locally produced fruit wines and traditional winemaking practices. Visitors can explore the farm, discover local flavours, and enjoy scenic countryside views surrounded by the natural beauty of the hills.",
    category: "Day Trip",
    image: ajingFarm,
  },
  {
    id: 8,
    name: "Sribadam Waterfall",
    distance: "12 km",
    time: "25–30 min drive",
    description: "Surrounded by pine forests and lush greenery, Sribadam Waterfall is a hidden gem offering a refreshing escape into nature. The peaceful environment, flowing waters, and scenic surroundings make it perfect for photography, relaxation, and spending quality time with loved ones.",
    category: "Nature",
    image: sribadamWaterfall,
  },
  {
    id: 9,
    name: "Bombhir Natural Mineral Spring",
    distance: "18 km",
    time: "35–40 min drive",
    description: "Bombhir is famous for its naturally flowing mineral-rich spring water emerging directly from the mountains. Travellers often stop here to drink the fresh spring water, refill bottles, and experience this unique natural attraction. The continuously flowing stream has also become popular as a natural 'free car wash' for passing vehicles.",
    category: "Nature",
    image: bombhir,
  },
  {
    id: 10,
    name: "Chaayatal Lake",
    distance: "30 km",
    time: "60–70 min drive",
    description: "A beautiful high-altitude lake surrounded by forests and mountains, Chaayatal is a peaceful destination connected with local legends of the Subba King. Visitors can enjoy nature walks, photography, birdwatching, and the untouched beauty of the Himalayan surroundings.",
    category: "Adventure",
    image: chaayatalLake,
  },
  {
    id: 11,
    name: "Bermiok Shiva Cave",
    distance: "30 km",
    time: "60–70 min drive",
    description: "A sacred pilgrimage destination dedicated to Lord Shiva, Bermiok Shiva Cave attracts devotees and travellers seeking spiritual experiences. Surrounded by peaceful forests and mountain landscapes, the cave offers a unique blend of faith, nature, and local traditions.",
    category: "Spiritual",
    image: bermiokShiva,
  },
  {
    id: 12,
    name: "Srijunga Statue (Mahatma Sirijunga Teyongsi Complex)",
    distance: "30 km",
    time: "60–70 min drive",
    description: "The Mahatma Sirijunga Teyongsi Complex in West Sikkim features a magnificent 36-foot bronze statue honouring the 18th-century Limbu scholar, set within 7.7 hectares offering panoramic views of Mt. Kanchenjunga. Located near Chaayatal Lake, the site acts as a cultural heritage hub and includes a study centre dedicated to the Limbu script and tradition.",
    category: "Cultural",
    image: chaayatalLake,
  },
];

const categoryColors = {
  Spiritual: "bg-amber-50 text-amber-700 border-amber-200",
  Nature: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Viewpoint: "bg-blue-50 text-blue-700 border-blue-200",
  "Day Trip": "bg-purple-50 text-purple-700 border-purple-200",
  Adventure: "bg-red-50 text-red-700 border-red-200",
  Cultural: "bg-indigo-50 text-indigo-700 border-indigo-200",
};


const About = () => {
  return (
    <div className="bg-luxury-cream min-h-screen">
      
      {/* Page Header */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")' }}
      >
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

      {/* Welcome Message & Host Section (Uncle Owner Card) */}
      <section 
        className="py-20 relative bg-cover bg-center overflow-hidden border-b border-gold/20"
        style={{ backgroundImage: `url("${kanchenjungaBg}")` }}
      >
        <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-[2px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Owner Image */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 max-w-[320px] aspect-[3/4]"
              >
                <img
                  src={ownerImg}
                  alt="Hotel Owner & Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                  <h4 className="text-white font-serif text-lg font-medium">Welcome to Rinchenpong</h4>
                  <p className="text-gold text-xs font-sans tracking-wide">Hotel Shivaratna Host Team</p>
                </div>
              </motion.div>
            </div>

            {/* Welcome Text */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                A Message From Our Family
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-medium">
                Welcome to Hotel Shivaratna!
              </h2>
              <div className="w-16 h-[1.5px] bg-gold" />
              <p className="text-neutral-200 text-sm md:text-base font-sans font-light leading-relaxed text-justify italic bg-neutral-900/80 p-6 border-l-4 border-gold shadow-2xl rounded-r-lg">
                “We, the team of Hotel Shivaratna, are delighted to welcome you to the serene hills of Rinchenpong, West Sikkim. It is our privilege to host you and share the warmth of genuine Sikkimese hospitality. Every member of our team is dedicated to ensuring your stay is comfortable, peaceful, and truly memorable. Whether you are here to explore the breathtaking Himalayan landscapes, discover the rich cultural heritage of West Sikkim, embark on an adventurous journey, or simply relax amidst nature, we are committed to making you feel at home. From our comfortable accommodations and delicious home-style cuisine to our friendly service and personalized care, every experience is thoughtfully designed with your comfort in mind. We look forward to welcoming you and making Hotel Shivaratna your home away from home, where every guest arrives as a visitor and leaves as a part of our family.”
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Hotel Story Sections */}
      <section className="py-20 bg-luxury-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
          
          {/* Section: Welcome */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Welcome to Hotel Shivaratna
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Welcome to Hotel Shivaratna, your peaceful mountain retreat in the heart of Rinchenpong, West Sikkim. Surrounded by lush forests, cool mountain air, and breathtaking Himalayan views, our hotel offers the perfect blend of comfort, nature, and authentic Sikkimese hospitality. Whether you're a pilgrim, nature lover, adventure seeker, remote worker, or simply looking to escape the rush of city life, Hotel Shivaratna is your ideal base to experience the hidden treasures of West Sikkim.
            </p>
          </div>

          {/* Section: Accommodation & Facilities */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Comfortable Accommodation &amp; Facilities
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Our hotel features 14 well-appointed rooms with quality accommodation at affordable rates, ensuring a comfortable stay for every guest. We offer delicious home-style food at our restaurant, a fully stocked bar, a spacious meeting and conference room for gatherings and corporate events, free high-speed Wi-Fi, and complete fooding and lodging facilities. Our friendly and dedicated team takes pride in being the perfect hosts, ensuring every guest feels at home.
            </p>
          </div>

          {/* Section: Prime Location */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Prime Location
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              One of Hotel Shivaratna's greatest advantages is its strategic location. Situated opposite the historic Rinchen Cholang Monastery, guests can witness one of the oldest Buddhist monasteries in the region, rich in spiritual heritage and local history. Just across the road is the beautiful Rabindranath Van, where the statue of Nobel Laureate Rabindranath Tagore is nearing completion, creating another landmark for visitors.
            </p>
          </div>

          {/* Section: Nature & Scenic Surroundings */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Nature &amp; Scenic Surroundings
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Behind the hotel lies a scenic trekking trail through pristine forests, while the peaceful ambience, cool climate, and chirping birds create the perfect environment to relax and reconnect with nature. During spring (March to May), the hills become vibrant with blooming rhododendrons and pleasant winds, making it one of the best times to visit. Summer offers clear skies and magnificent views of Mount Kanchenjunga, while the monsoon (June to September) transforms the landscape into a lush green paradise with refreshing rainfall. Autumn and winter (October to February) are equally rewarding with crisp mountain air and spectacular Himalayan panoramas, making October to May the peak tourism season.
            </p>
          </div>

          {/* Section: Spectacular Himalayan Views */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Spectacular Himalayan Views
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              From the hotel, guests can enjoy panoramic views stretching across the valleys. On clear days, you can witness the majestic Kanchenjunga, the bustling Geyzing Bazaar below, Pelling's Chenrezig Statue, Ravangla, and even the magnificent 108-foot Statue of Lord Shiva at Namchi, making Hotel Shivaratna one of the finest viewpoints in the region.
            </p>
          </div>

          {/* Section: Nearby Attractions */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Nearby Attractions
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Rinchenpong Bazaar is only 1 kilometre away, providing convenient access to shops, local markets, and daily necessities. Nearby attractions include the historic Dak Bungalow, the serene Poison Lake, which can be reached via a beautiful forest trail, and the peaceful Reshi Monastery, accessible through a short forest hike.
            </p>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Wine lovers can explore Ajing Farm, located about 8 kilometres from the hotel, famous for its locally produced fruit wines and unique flavours. Nature enthusiasts can visit Sribadam, known for its stunning waterfall surrounded by beautiful pine forests, offering excellent opportunities for photography and relaxation.
            </p>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Adventure seekers should not miss the iconic Singshore Bridge, one of the highest suspension bridges in Asia, located within comfortable driving distance from the hotel. Guests can also explore Chaayatal, associated with the legendary Subba King, or visit the sacred Shiva Cave at Bermiok, an important pilgrimage destination with immense spiritual significance.
            </p>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              A unique attraction nearby is Bombhir, where natural mineral-rich spring water flows directly from the mountains. Visitors often stop here to wash their vehicles with the continuously flowing water, creating a natural "free car wash." The fresh spring water is safe to drink, rich in natural minerals, and has long been appreciated by locals for helping travellers feel refreshed and reducing dizziness or motion sickness after winding mountain journeys.
            </p>
          </div>

          {/* Section: Your Gateway to West Sikkim */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Your Gateway to West Sikkim
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              Hotel Shivaratna serves as the perfect central hub for exploring the many attractions of West Sikkim. Most destinations can be comfortably visited on day trips, allowing guests to return to the comfort of the hotel each evening. Whether your journey is for pilgrimage tourism, sightseeing, trekking, photography, family holidays, business travel, or a peaceful work-from-home getaway, our location makes every experience convenient and memorable.
            </p>
          </div>

          {/* Section: Entertainment & Leisure */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Entertainment &amp; Leisure
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
              As the day comes to an end, unwind at our lively Butterfly Stage, where guests are warmly invited to enjoy karaoke singing, dancing, live performances, and memorable evenings with family and friends. It's the perfect place to celebrate, connect with fellow travellers, and create lasting memories.
            </p>
          </div>

          {/* Section: Experience the Hospitality */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium text-neutral-900 border-b border-gold/20 pb-2">
              Experience the Hospitality of Hotel Shivaratna
            </h3>
            <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed text-justify border-l-4 border-gold pl-4 italic">
              "At Hotel Shivaratna, every sunrise brings Himalayan beauty, every breeze carries the freshness of the mountains, and every stay becomes a cherished memory. We warmly invite you to experience the hospitality, serenity, and natural splendour of Rinchenpong with us."
            </p>
          </div>

        </div>
      </section>

      {/* Restaurant & Bar Showcase Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-6 xl:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="bg-neutral-950 text-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-gold/20 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.85)]"
            >
              <div className="space-y-5">
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.35em] text-gold uppercase block font-sans">
                  Restaurant · Fine Dining &amp; Bar
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight text-white font-serif">
                  From farm to table.
                </h2>
                <div className="w-16 h-[1.5px] bg-gold" />
                <p className="text-neutral-300 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
                  We serve freshly harvested organic food cooked with care. Every meal begins at its source, bringing the freshest produce and authentic Himalayan flavours to your table.
                </p>
                <p className="text-neutral-300 text-sm md:text-base font-sans font-light leading-relaxed text-justify">
                  From crisp vegetables and aromatic herbs to seasonal produce, each ingredient is handpicked for purity, freshness, and quality. Our farm-to-table philosophy preserves the natural taste of Sikkim and pairs beautifully with a premium bar experience.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-gold">
                  Organic Cuisine
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-neutral-200">
                  Premium Bar
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[130px] md:auto-rows-[160px] xl:auto-rows-[175px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-5 row-span-2 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_25px_70px_-28px_rgba(0,0,0,0.55)] bg-neutral-900"
              >
                <img src={diningBarImage3} alt="Premium bar cabinet display" className="w-full h-full object-cover object-center" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.06 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-7 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_25px_70px_-28px_rgba(0,0,0,0.55)] bg-neutral-900"
              >
                <img src={diningBarImage1} alt="Fine dining interior ambience" className="w-full h-full object-cover object-center" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-4 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_25px_70px_-28px_rgba(0,0,0,0.55)] bg-neutral-900"
              >
                <img src={diningBarImage2} alt="Organic dishes served fresh" className="w-full h-full object-cover object-center" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-3 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_25px_70px_-28px_rgba(0,0,0,0.55)] bg-neutral-900"
              >
                <img src={diningBarImage5} alt="Bar arrangement detail" className="w-full h-full object-cover object-center" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-5 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_25px_70px_-28px_rgba(0,0,0,0.55)] bg-neutral-900"
              >
                <img src={diningBarImage4} alt="Chef-prepared plated delicacies" className="w-full h-full object-cover object-center" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Amenities Section — Text + Logo updated */}
      <section className="py-24 bg-white border-t border-neutral-100">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_FACILITIES.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-luxury-cream border border-neutral-100 hover:border-gold/30 p-8 text-left transition-all duration-300 shadow-premium flex flex-col items-start gap-4 group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{facility.emoji}</span>
                <h3 className="text-lg font-serif font-medium text-neutral-900 group-hover:text-gold transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-neutral-600 text-xs md:text-sm font-sans font-light leading-relaxed text-justify">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPLORE RINCHENPONG SECTION */}
      <section className="py-24 bg-luxury-cream border-t border-neutral-100">
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
            <h2 className="text-4xl md:text-6xl font-medium text-neutral-900 font-serif mt-3 leading-tight">
              Explore Rinchenpong
            </h2>
            <div className="w-16 h-[1.5px] bg-gold mx-auto mt-5" />
            <p className="text-neutral-600 font-sans font-light text-base mt-6 leading-relaxed text-justify max-w-2xl mx-auto">
              Hotel Shivaratna serves as the perfect central hub for exploring the many attractions of West Sikkim. This order creates a beautiful guest journey flow: Monastery → Nature Park → Spiritual Sites → Forest Trails → Day Trips → Adventure Attractions. Most destinations can be comfortably visited on day trips, allowing guests to return to the comfort of the hotel each evening.
            </p>
          </motion.div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {exploreData.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                className="bg-white border border-neutral-100 hover:border-gold/30 overflow-hidden shadow-premium group transition-all duration-500 hover:shadow-xl"
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

                  <p className="text-neutral-600 text-xs md:text-sm font-sans font-light leading-relaxed text-justify">
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
