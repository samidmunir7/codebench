// import { motion } from "framer-motion";
// import { FaRocket, FaPuzzlePiece, FaUsers, FaLightbulb } from "react-icons/fa";
// import zephorin_about from "../assets/zephorin_about.png";
// import zephorin_founder from "../assets/zephorin_founder.png";
// import FooterSecondary from "../components/FooterSecondary.jsx";

// const fadeIn = (delay = 0.2) => ({
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay },
//   viewport: { amount: 0.1, once: false }, // ✅ animations trigger every time in view
// });

// const AboutPage = () => {
//   return (
//     <div className="bg-[#1D2B53] text-white">
//       {/* Hero Section */}
//       <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
//         <motion.h1
//           {...fadeIn(0)}
//           className="text-4xl md:text-6xl font-extrabold mb-4"
//         >
//           About <span className="text-[#30E3CA]">Zephiron</span>
//         </motion.h1>
//         <motion.p {...fadeIn(0.2)} className="text-gray-300 max-w-2xl text-lg">
//           We are builders. We are creators. We are obsessed with digital
//           excellence.
//         </motion.p>
//       </section>

//       {/* Our Mission Section */}
//       <section className="bg-[#121212] py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <motion.div {...fadeIn(0)}>
//             <h2 className="text-3xl font-bold text-[#30E3CA] mb-4">
//               Our Mission
//             </h2>
//             <p className="text-gray-300 text-base leading-relaxed">
//               Zephiron exists to empower startups and businesses with clean,
//               scalable, and inspiring digital experiences. We blend engineering
//               precision with artistic design to craft SaaS and web solutions
//               that last.
//             </p>
//           </motion.div>
//           <motion.img
//             src={zephorin_about}
//             alt="mission"
//             {...fadeIn(0.2)}
//             className="w-full max-w-md mx-auto rounded-full border-3 border-[#30E3CA] shadow-md"
//           />
//         </div>
//       </section>

//       {/* Core Values Grid */}
//       <section className="bg-[#1D2B53] py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-8">
//             Core Values
//           </motion.h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <FaLightbulb />,
//                 title: "Innovation",
//                 desc: "We believe in challenging convention with fresh thinking and bold ideas.",
//               },
//               {
//                 icon: <FaPuzzlePiece />,
//                 title: "Precision",
//                 desc: "Every detail matters. Our work is clean, structured, and maintainable.",
//               },
//               {
//                 icon: <FaRocket />,
//                 title: "Speed",
//                 desc: "We build fast and ship faster — without compromising quality.",
//               },
//               {
//                 icon: <FaUsers />,
//                 title: "Partnership",
//                 desc: "We treat our clients as collaborators, not just customers.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 {...fadeIn(0.1 * (i + 1))}
//                 className="bg-[#2E323C] p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
//               >
//                 <div className="text-3xl text-[#30E3CA] mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-400 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founder / Vision Section */}
//       <section className="bg-[#121212] py-20 px-6">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.img
//             src={zephorin_founder}
//             alt="Founder"
//             {...fadeIn(0.1)}
//             className="w-full max-w-xs mx-auto md:mx-0 rounded-md shadow-md"
//           />
//           <motion.div {...fadeIn(0.2)}>
//             <h2 className="text-3xl font-bold text-[#30E3CA] mb-4">
//               Meet the Visionary
//             </h2>
//             <p className="text-gray-300 text-base leading-relaxed">
//               Founded by a passionate engineer and creative problem-solver,
//               Zephiron is built on years of hands-on experience across software
//               architecture, UI/UX design, and scalable application delivery.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Timeline or Milestones */}
//       <section className="bg-[#1D2B53] py-20 px-6">
//         <div className="max-w-3xl mx-auto">
//           <motion.h2
//             {...fadeIn(0)}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Our Journey
//           </motion.h2>
//           <div className="space-y-10 border-l-2 border-[#30E3CA] pl-6">
//             {[
//               {
//                 year: "2022",
//                 milestone:
//                   "Zephiron was founded with a vision for modular SaaS",
//               },
//               {
//                 year: "2023",
//                 milestone:
//                   "Built and launched 15+ custom projects for startups",
//               },
//               {
//                 year: "2024",
//                 milestone:
//                   "Expanded into consulting and internal tool development",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 {...fadeIn(0.2 + i * 0.2)}
//                 className="relative"
//               >
//                 <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-[#30E3CA]" />
//                 <h4 className="text-lg font-semibold ml-1">{step.year}</h4>
//                 <p className="text-gray-300 text-sm">{step.milestone}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-[#121212] py-20 px-6 text-center">
//         <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-4">
//           Ready to build with us?
//         </motion.h2>
//         <motion.p {...fadeIn(0.1)} className="text-gray-400 mb-6">
//           Let’s work together to bring your vision to life.
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-[#30E3CA] text-black font-semibold px-8 py-3 rounded hover:bg-[#7A60FF] transition"
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//       <FooterSecondary />
//     </div>
//   );
// };

// export default AboutPage;

import { motion, useScroll, useSpring } from "framer-motion";
import { FaRocket, FaPuzzlePiece, FaUsers, FaLightbulb } from "react-icons/fa";
import zephorin_about from "../assets/zephorin_about.png";
import zephorin_founder from "../assets/zephorin_founder.png";
import FooterSecondary from "../components/FooterSecondary.jsx";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { amount: 0.1, once: false },
});

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
        style={{ scaleX }}
      />

      <div className="bg-[#1D2B53] text-white">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            {...fadeIn(0)}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            About <span className="text-[#30E3CA]">Zephiron</span>
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="text-gray-300 max-w-2xl text-lg"
          >
            We are builders. We are creators. We are obsessed with digital
            excellence.
          </motion.p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeIn(0)}>
              <h2 className="text-3xl font-bold text-[#30E3CA] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Zephiron exists to empower startups and businesses with clean,
                scalable, and inspiring digital experiences. We blend
                engineering precision with artistic design to craft SaaS and web
                solutions that last.
              </p>
            </motion.div>
            <motion.img
              src={zephorin_about}
              alt="mission"
              {...fadeIn(0.2)}
              className="w-full max-w-md mx-auto rounded-full border-3 border-[#30E3CA] shadow-md"
            />
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="bg-[#1D2B53] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-8">
              Core Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaLightbulb />,
                  title: "Innovation",
                  desc: "We believe in challenging convention with fresh thinking and bold ideas.",
                },
                {
                  icon: <FaPuzzlePiece />,
                  title: "Precision",
                  desc: "Every detail matters. Our work is clean, structured, and maintainable.",
                },
                {
                  icon: <FaRocket />,
                  title: "Speed",
                  desc: "We build fast and ship faster — without compromising quality.",
                },
                {
                  icon: <FaUsers />,
                  title: "Partnership",
                  desc: "We treat our clients as collaborators, not just customers.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeIn(0.1 * (i + 1))}
                  className="bg-[#2E323C] p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
                >
                  <div className="text-3xl text-[#30E3CA] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder / Vision Section */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={zephorin_founder}
              alt="Founder"
              {...fadeIn(0.1)}
              className="w-full max-w-xs mx-auto md:mx-0 rounded-md shadow-md"
            />
            <motion.div {...fadeIn(0.2)}>
              <h2 className="text-3xl font-bold text-[#30E3CA] mb-4">
                Meet the Visionary
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Founded by a passionate engineer and creative problem-solver,
                Zephiron is built on years of hands-on experience across
                software architecture, UI/UX design, and scalable application
                delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline or Milestones */}
        <section className="bg-[#1D2B53] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              {...fadeIn(0)}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Journey
            </motion.h2>
            <div className="space-y-10 border-l-2 border-[#30E3CA] pl-6">
              {[
                {
                  year: "2022",
                  milestone:
                    "Zephiron was founded with a vision for modular SaaS",
                },
                {
                  year: "2023",
                  milestone:
                    "Built and launched 15+ custom projects for startups",
                },
                {
                  year: "2024",
                  milestone:
                    "Expanded into consulting and internal tool development",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeIn(0.2 + i * 0.2)}
                  className="relative"
                >
                  <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-[#30E3CA]" />
                  <h4 className="text-lg font-semibold ml-1">{step.year}</h4>
                  <p className="text-gray-300 text-sm">{step.milestone}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#121212] py-20 px-6 text-center">
          <motion.h2 {...fadeIn(0)} className="text-3xl font-bold mb-4">
            Ready to build with us?
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="text-gray-400 mb-6">
            Let’s work together to bring your vision to life.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#30E3CA] text-black font-semibold px-8 py-3 rounded hover:bg-[#7A60FF] transition"
          >
            Get in Touch
          </motion.button>
        </section>
        <FooterSecondary />
      </div>
    </>
  );
};

export default AboutPage;
