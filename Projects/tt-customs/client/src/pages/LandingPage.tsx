import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <motion.div
      className="bg-[#1e1e1e] text-[#f1f1f1] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-24">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 text-[#00ffff]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Ride with TT Customs
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Specialized automotive modifications, premium installations, and
          one-of-a-kind builds tailored to your vision.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/services">
            <button className="bg-[#00ffff] text-black px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Explore Services
            </button>
          </Link>
          <Link to="/book">
            <button className="bg-[#ff2e2e] text-white px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Book Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#2b2b2b] px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] mb-4">
            Our Specialties
          </h2>
          <p className="text-gray-300">
            From performance upgrades to stunning wraps — we've got it all.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Performance Mods", "Detailing & Coating", "Custom Wraps"].map(
            (service, i) => (
              <motion.div
                key={i}
                className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-[#00ffff] mb-3">
                  {service}
                </h3>
                <p className="text-sm text-gray-400">
                  Premium quality service tailored to your ride, ensuring
                  top-tier results and satisfaction.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#ffd700] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TT Customs is your go-to destination for premium car mods, tuning,
            and styling. Built for enthusiasts, by enthusiasts.
          </motion.p>
          <Link to="/about">
            <button className="bg-[#00ffff] text-black px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#ff2e2e] py-16 text-center text-white">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Customize Your Dream Ride?
        </motion.h3>
        <Link to="/book">
          <button className="bg-white text-[#ff2e2e] px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Schedule Now
          </button>
        </Link>
      </section>
    </motion.div>
  );
}
