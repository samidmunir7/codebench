import { motion, useScroll, useSpring } from "framer-motion";
import { FaCode, FaServer, FaTools, FaRocket } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: false, amount: 0.1 },
});

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const services = [
    {
      title: "Web App Development",
      icon: <FaCode />,
      description:
        "High-performance, scalable React and Next.js web apps tailored to your brand and business goals.",
    },
    {
      title: "Backend & API Engineering",
      icon: <FaServer />,
      description:
        "Robust Node.js/Express and MongoDB infrastructures for RESTful APIs and cloud-native solutions.",
    },
    {
      title: "Technical Consulting",
      icon: <FaTools />,
      description:
        "Architecture reviews, code audits, and strategic guidance to help your team ship better, faster.",
    },
    {
      title: "SaaS Product Launch",
      icon: <FaRocket />,
      description:
        "We help ideate, design, build, and deploy your SaaS platform — from MVP to monetization.",
    },
  ];

  return (
    <PageWrapper>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
        style={{ scaleX }}
      />

      <div className="bg-[#1D2B53] text-white">
        {/* Hero / Intro Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            {...fadeIn(0)}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Our <span className="text-[#30E3CA]">Services</span>
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="text-lg text-gray-300 max-w-2xl"
          >
            We specialize in high-performance digital solutions. Whether you're
            launching a startup or scaling enterprise infrastructure — we've got
            you.
          </motion.p>
        </section>

        {/* Services Grid */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.1 * i)}
                whileHover={{ scale: 1.05 }}
                className="bg-[#2E323C] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition hover:shadow-lg"
              >
                <div className="text-3xl text-[#30E3CA] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D2B53] py-20 px-6 text-center">
          <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-4">
            Ready to work together?
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-gray-400 mb-6 max-w-xl mx-auto"
          >
            Let’s chat about your goals and see how we can bring them to life
            with technology.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#30E3CA] text-black font-semibold px-8 py-3 rounded hover:bg-[#7A60FF] transition"
          >
            Book a Consultation
          </motion.button>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
