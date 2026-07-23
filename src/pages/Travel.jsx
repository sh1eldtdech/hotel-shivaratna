import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Compass, 
  Calendar, 
  ChevronDown, 
  ArrowLeft, 
  CheckCircle, 
  Car, 
  Hotel, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Mountain,
  Map
} from 'lucide-react';
import { districtsData } from '../data/districtsData';
import { districtExtras } from '../data/districtExtras';
import { districtRouteMap, getDistrictIdFromSlug } from '../data/districtRoutes';
import { north_sikkim_assets } from '../assets/assets';

const Travel = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visibleAttractionsCount, setVisibleAttractionsCount] = useState(6);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleAttractionsCount(6);
    setOpenFaqIndex(null);
  }, [slug]);

  // Find current district
  const currentDistrictId = useMemo(() => {
    if (!slug) return null;
    return getDistrictIdFromSlug(slug);
  }, [slug]);

  const currentDistrict = currentDistrictId ? districtsData[currentDistrictId] : null;
  const currentExtras = currentDistrictId ? districtExtras[currentDistrictId] : null;

  // Toggle FAQ Accordion
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Render District Detail View
  if (slug && currentDistrict && currentExtras) {
    const attractions = currentDistrict.topAttractions || [];
    const displayedAttractions = attractions.slice(0, visibleAttractionsCount);
    const hasMoreAttractions = attractions.length > visibleAttractionsCount;

    return (
      <div>
        {/* Header Banner */}
        <div 
          className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
          style={{ backgroundImage: `url(${attractions[0]?.img || '/assets/east-sikkim.jpg'})` }}
        >
          <div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-[2px]" />
          <div className="z-10 text-center space-y-4 px-6 max-w-4xl">
            <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>&gt;</span>
              <Link to="/travel" className="hover:text-gold transition-colors">Travel Guide</Link>
              <span>&gt;</span>
              <span className="text-gold">{currentDistrict.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl text-white font-serif font-medium tracking-wider uppercase">
              {currentDistrict.name} District
            </h1>
            
            <p className="text-neutral-300 text-sm md:text-base font-sans font-light leading-relaxed max-w-2xl mx-auto">
              {currentDistrict.description}
            </p>

            <div className="pt-2">
              <Link 
                to="/travel" 
                className="inline-flex items-center text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors font-sans"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Districts
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Facts Section */}
        <section className="py-12 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {currentDistrict.info?.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-neutral-50 border border-gold-200 p-6 rounded-lg shadow-premium hover:border-gold/30 transition-all duration-300"
                >
                  <div className="text-3xl mr-5 p-3 rounded-full bg-gold/5 border border-gold/10">
                    {item.icon === '🏙️' ? <MapPin className="w-7 h-7 text-gold" /> : 
                     item.icon === '⛰️' ? <Mountain className="w-7 h-7 text-gold" /> : 
                     item.icon === '📅' ? <Calendar className="w-7 h-7 text-gold" /> : 
                     <Compass className="w-7 h-7 text-gold" />}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans block">
                      {item.title}
                    </span>
                    <span className="text-sm md:text-base font-semibold text-neutral-800 tracking-wide font-sans mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Attractions Section */}
        <section className="py-20 bg-luxury-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Exploration
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
                Top Attractions
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedAttractions.map((attraction, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-neutral-100 rounded-lg overflow-hidden shadow-premium group hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900">
                    <img 
                      src={attraction.img} 
                      alt={attraction.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <span className="absolute top-4 left-4 bg-gold text-neutral-950 text-[9px] uppercase tracking-widest px-3 py-1 font-sans font-semibold shadow-md">
                      {attraction.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-lg md:text-[21px] font-serif font-medium text-neutral-950 tracking-wider mb-2">
                      {attraction.title}
                    </h3>
                    <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] leading-relaxed font-sans font-light flex-grow">
                      {attraction.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Show Less */}
            {attractions.length > 6 && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setVisibleAttractionsCount(hasMoreAttractions ? attractions.length : 6)}
                  className="inline-flex items-center border border-gold text-gold hover:bg-gold hover:text-neutral-950 px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300 font-sans font-medium"
                >
                  {hasMoreAttractions ? 'View All Attractions' : 'Show Less'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Festivals & Events Section */}
        <section className="py-20 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Culture & Tradition
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
                Festivals & Events
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {currentExtras.festivals?.map((fest, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-50 border border-gold-200 p-8 shadow-premium rounded-lg flex flex-col justify-between hover:border-gold-200 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-gold mb-4">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-widest font-sans font-semibold">Festival</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-neutral-950 tracking-wider mb-2">
                      {fest.name}
                    </h3>
                    <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] leading-relaxed font-sans font-light mb-6">
                      {fest.note}
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-neutral-400 font-sans pt-4 border-t border-neutral-200">
                    <Clock className="w-4 h-4 mr-2 text-gold/60" />
                    <span>Best experienced in: <strong className="text-neutral-700 font-medium">{fest.season}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="py-20 bg-luxury-cream border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
                Practical Information
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Accommodations */}
              <div className="bg-white border border-neutral-100 p-8 shadow-premium rounded-lg">
                <div className="flex items-center space-x-3 text-gold mb-6">
                  <Hotel className="w-6 h-6" />
                  <h3 className="text-lg md:text-[21px] font-serif font-medium text-neutral-950 tracking-wide">
                    Accommodation Options
                  </h3>
                </div>
                <ul className="space-y-4">
                  {currentExtras.accommodations?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 shrink-0 mt-0.5" />
                      <span className="text-neutral-600 text-sm font-sans font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transportation */}
              <div className="bg-white border border-neutral-100 p-8 shadow-premium rounded-lg">
                <div className="flex items-center space-x-3 text-gold mb-6">
                  <Car className="w-6 h-6" />
                  <h3 className="text-lg md:text-[21px] font-serif font-medium text-neutral-950 tracking-wide">
                    Transportation & Getting Around
                  </h3>
                </div>
                <ul className="space-y-4">
                  {currentExtras.transportation?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 shrink-0 mt-0.5" />
                      <span className="text-neutral-600 text-sm font-sans font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-20 bg-white border-t border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Preparation
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
                Travel Tips for {currentDistrict.name}
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            </div>

            <div className="bg-gold/5 border border-gold/20 p-8 md:p-10 rounded-lg space-y-6">
              {currentExtras.travelTips?.map((tip, idx) => (
                <div key={idx} className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-gold mr-4 shrink-0 mt-0.5" />
                  <p className="text-neutral-700 text-sm md:text-base font-sans font-light leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-luxury-cream">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
                Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif mt-2">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {currentExtras.faqs?.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-neutral-100 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left hover:text-gold transition-colors"
                    >
                      <span className="font-serif text-sm md:text-base font-medium text-neutral-950 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-neutral-50 text-xs md:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Render Main Travel List Page
  const districtList = Object.keys(districtsData).map((key) => {
    const data = districtsData[key];
    const slugMap = districtRouteMap.find(item => item.id === key);
    return {
      id: key,
      slug: slugMap ? slugMap.slug : '',
      ...data
    };
  });

  return (
    <div>
      {/* Page Header */}
      <div 
        className="relative h-[280px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-16 md:pt-20"
        style={{ backgroundImage: `url(${north_sikkim_assets.gurudongmar_lake})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/75" />
        <div className="z-10 text-center space-y-3">
          <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.3em] font-sans block">
            Discover Sikkim
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-serif font-medium tracking-wider uppercase">
            Travel Guide
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs text-neutral-400 font-sans">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gold">Travel Guide</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase block font-sans">
            Our Neighborhood
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-serif">
            Explore the Six Beautiful Districts of Sikkim
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto" />
          <p className="text-neutral-950 text-medium font-normal text-sm md:text-[19px] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            From the bustling colorful lanes of Gangtok to the quiet snow-capped high summits of Mangan, Sikkim is a land of unmatched geographical variety and deep cultural heritage. Choose a district below to plan your exploration.
          </p>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="pb-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtList.map((district) => {
              const firstAttraction = district.topAttractions?.[0];
              const cardImage = firstAttraction?.img || '/assets/east-sikkim.jpg';
              
              return (
                <Link 
                  key={district.id}
                  to={`/travel/${district.slug}`}
                  className="bg-white border border-neutral-100 rounded-lg overflow-hidden shadow-premium hover:border-gold/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                    <img 
                      src={cardImage} 
                      alt={district.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                    
                    <span className="absolute top-4 right-4 bg-neutral-950/85 backdrop-blur-md border border-gold/20 text-gold text-[9px] uppercase tracking-widest px-3 py-1 font-sans font-medium">
                      {district.topAttractions?.length || 0} Attractions
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left space-y-4">
                    <h3 className="text-2xl font-serif font-medium text-neutral-950 tracking-wide">
                      {district.name}
                    </h3>
                    
                    <p className="text-neutral-950 text-medium font-normal text-xs md:text-[18px] font-sans font-light leading-relaxed flex-grow">
                      {district.description}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-sans">
                          {district.info?.[0]?.title || 'Key Town'}
                        </span>
                        <span className="text-xs font-semibold text-neutral-700 font-sans">
                          {district.info?.[0]?.value}
                        </span>
                      </div>
                      
                      <span 
                        className="inline-flex items-center text-xs uppercase tracking-widest font-sans font-medium text-gold transition-colors group-hover:text-gold-light"
                      >
                        Explore <ArrowLeft className="w-3.5 h-3.5 ml-1.5 rotate-180 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
