import { motion } from 'framer-motion';

export default function RinchenpongIntro() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-neutral-100">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 to-transparent opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1544258888-2fc838ee8278?auto=format&fit=crop&q=80"
              alt="Mist over Rinchenpong"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight">
              A Sanctuary of <br />
              <span className="text-gold italic">Peace & Heritage</span>
            </h2>

            <div className="space-y-6 text-neutral-600 font-sans font-light text-base leading-relaxed">
              <p>
                Nestled at an altitude of 5,576 feet, Rinchenpong is a pristine destination in West Sikkim. Known for its breathtaking views of the majestic Kanchenjunga range and its rich historical significance, it offers a serene escape from the bustling world.
              </p>
              <p>
                The region is a treasure trove of ancient monasteries, lush forests, and historical landmarks. From the famous Rinchenpong Monastery to the whispering trails of the local villages, every step here tells a story of spirituality and natural splendor.
              </p>
              <p>
                Experience the authentic Sikkimese culture, explore the verdant landscapes, and find tranquility in the heart of the Himalayas.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
