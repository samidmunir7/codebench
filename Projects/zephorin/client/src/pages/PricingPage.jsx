import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: false, amount: 0.1 },
});

const plans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for individuals or small ideas.",
    features: ["1 Project", "Basic Support", "Community Access"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$49/mo",
    description: "Ideal for growing startups and teams.",
    features: [
      "Unlimited Projects",
      "Priority Support",
      "Custom Domains",
      "Advanced Analytics",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale systems.",
    features: [
      "Dedicated Engineer",
      "Onboarding",
      "SLA Guarantee",
      "Custom Integrations",
    ],
    highlight: false,
  },
];

const PricingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <PageWrapper>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
        style={{ scaleX }}
      />

      <div className="bg-[#1D2B53] text-white">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            {...fadeIn(0)}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Simple, Transparent <span className="text-[#30E3CA]">Pricing</span>
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="text-gray-300 max-w-2xl text-lg"
          >
            Choose a plan that fits your scale and ambition. No surprises. No
            contracts.
          </motion.p>
        </section>

        {/* Pricing Cards */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.1 * i)}
                whileHover={{ scale: 1.05 }}
                className={`rounded-lg border p-8 text-center shadow-md transition ${
                  plan.highlight
                    ? "bg-[#2E323C] border-[#30E3CA]"
                    : "bg-[#202534] border-[#2E323C]"
                }`}
              >
                <h3 className="text-xl font-semibold text-[#30E3CA] mb-2">
                  {plan.title}
                </h3>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j}>✓ {f}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 rounded font-semibold transition ${
                    plan.highlight
                      ? "bg-[#30E3CA] text-black hover:bg-[#7A60FF]"
                      : "border border-gray-500 hover:bg-[#2E323C]"
                  }`}
                >
                  {plan.highlight ? "Start Pro" : "Choose Plan"}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D2B53] py-20 px-6 text-center">
          <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-4">
            Need help choosing a plan?
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-gray-400 mb-6 max-w-xl mx-auto"
          >
            We’d be happy to guide you. Let's talk about your needs and goals.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#30E3CA] text-black font-semibold px-8 py-3 rounded hover:bg-[#7A60FF] transition"
          >
            Contact Us
          </motion.button>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default PricingPage;
