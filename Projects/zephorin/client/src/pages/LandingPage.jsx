// // src/pages/LandingPage.jsx
// import { motion } from "framer-motion";
// import zephorin_rocket from "../assets/zephorin_rocket.png";
// import Footer from "../components/Footer.jsx";
// import {
//   SiReact,
//   SiNodedotjs,
//   SiMongodb,
//   SiTailwindcss,
//   SiExpress,
//   SiJsonwebtokens,
//   SiNextdotjs,
//   SiTypescript,
//   SiVite,
//   SiFramer,
// } from "react-icons/si";

// const LandingPage = () => {
//   return (
//     <div className="bg-[#1D2B53] text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center text-center px-6 min-h-[90vh]">
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold mb-4"
//         >
//           Build Smarter with <span className="text-[#30E3CA]">Zephiron</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
//         >
//           Web Development, SaaS Solutions, and Tech Consulting that elevate your
//           digital experience.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <button className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-3 px-6 rounded">
//             Get Started
//           </button>
//           <button className="border border-white hover:bg-[#2E323C] py-3 px-6 rounded font-semibold">
//             Learn More
//           </button>
//         </motion.div>
//       </section>

//       {/* Feature Section */}
//       <section className="w-full bg-[#121212] py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-4"
//           >
//             What Zephiron Offers
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-400 mb-12 max-w-2xl mx-auto"
//           >
//             Our solutions are tailored for scale, built with performance, and
//             designed for impact.
//           </motion.p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Web Development",
//                 desc: "From landing pages to full-stack applications, we build pixel-perfect, blazing-fast web apps.",
//               },
//               {
//                 title: "SaaS Solutions",
//                 desc: "Build your software-as-a-service product with scalable architecture and seamless UX.",
//               },
//               {
//                 title: "Tech Consulting",
//                 desc: "Get expert guidance on architecture, product strategy, and emerging technologies.",
//               },
//             ].map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-[#2E323C] p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-[#30E3CA] mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Value Proposition Section */}
//       <section className="w-full bg-[#1D2B53] py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4 text-[#F8F9FA]">
//               Why Choose Zephiron?
//             </h2>
//             <ul className="text-gray-300 space-y-3 text-sm">
//               <li>✅ Built for performance and scalability</li>
//               <li>✅ Future-proof architecture</li>
//               <li>✅ Modern UI/UX principles</li>
//               <li>✅ Developer-focused consulting</li>
//               <li>✅ End-to-end project support</li>
//             </ul>
//           </motion.div>

//           <motion.img
//             src={zephorin_rocket}
//             alt="Zephiron Rocket"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="w-full max-w-sm mx-auto md:mx-0 rounded-full"
//           />
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-[#121212] py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2 className="text-3xl font-bold text-white mb-4">
//             What Our Clients Say
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-10">
//             {[
//               {
//                 quote:
//                   "Zephiron helped us launch our MVP in record time. Reliable and professional.",
//                 name: "Sara M.",
//                 role: "Startup Founder",
//               },
//               {
//                 quote:
//                   "Their SaaS expertise saved us months of dev time. Amazing work.",
//                 name: "David L.",
//                 role: "CTO at SaaSync",
//               },
//               {
//                 quote:
//                   "Incredible UI/UX results and great communication throughout.",
//                 name: "Fatima K.",
//                 role: "Product Designer",
//               },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="bg-[#2E323C] p-6 rounded-lg text-left"
//               >
//                 <p className="text-sm text-gray-300 mb-4">“{t.quote}”</p>
//                 <p className="text-[#30E3CA] font-semibold">{t.name}</p>
//                 <p className="text-xs text-gray-400">{t.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Stack - Infinite Carousel */}
//       <section className="bg-[#1D2B53] py-20 px-6 relative overflow-hidden">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-8">
//             Technologies We Use
//           </h2>

//           {/* Blurred Edges */}
//           <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#1D2B53] to-transparent z-10 pointer-events-none" />
//           <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#1D2B53] to-transparent z-10 pointer-events-none" />

//           {/* Carousel */}
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex gap-12 w-max animate-slide"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             >
//               {[
//                 { name: "React", icon: <SiReact /> },
//                 { name: "Node.js", icon: <SiNodedotjs /> },
//                 { name: "MongoDB", icon: <SiMongodb /> },
//                 { name: "TailwindCSS", icon: <SiTailwindcss /> },
//                 { name: "Express", icon: <SiExpress /> },
//                 { name: "JWT", icon: <SiJsonwebtokens /> },
//                 { name: "Next.js", icon: <SiNextdotjs /> },
//                 { name: "TypeScript", icon: <SiTypescript /> },
//                 { name: "Vite", icon: <SiVite /> },
//                 { name: "Framer Motion", icon: <SiFramer /> },
//               ]
//                 .flatMap((list) => [list, list])
//                 .map((tech, i) => (
//                   <div
//                     key={`${tech.name}-${i}`}
//                     className="bg-[#2E323C] px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:text-[#30E3CA] transition whitespace-nowrap flex items-center gap-2"
//                   >
//                     <span className="text-lg">{tech.icon}</span>
//                     {tech.name}
//                   </div>
//                 ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}

//       <section className="bg-[#121212] py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-8">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-6 text-left">
//             {[
//               {
//                 q: "What makes Zephiron different?",
//                 a: "We focus on performance-first engineering with scalable architecture and aesthetic interfaces.",
//               },
//               {
//                 q: "Do you work with startups or enterprises?",
//                 a: "We work with all! From solo founders to enterprise teams looking to modernize their stack.",
//               },
//               {
//                 q: "How fast can I get a working MVP?",
//                 a: "Depending on scope, typically 2–4 weeks for functional MVP builds.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-[#2E323C] p-4 rounded-md"
//               >
//                 <h4 className="text-[#30E3CA] font-semibold mb-1">{item.q}</h4>
//                 <p className="text-sm text-gray-300">{item.a}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partner Logos */}
//       <section className="bg-[#1D2B53] py-16 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-2xl font-bold text-white mb-6">Trusted by</h2>
//           <div className="flex flex-wrap justify-center items-center gap-6">
//             {["Alpha", "BetaWorks", "CoreCode", "NeoTech"].map((client, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-[#2E323C] px-6 py-3 rounded text-sm text-gray-400 font-semibold hover:text-[#30E3CA] transition"
//               >
//                 {client}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="bg-[#121212] py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
//         <p className="text-gray-400 mb-6">
//           Join our mailing list to receive updates, tips, and case studies.
//         </p>
//         <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded bg-[#2E323C] text-white outline-none w-full sm:w-auto"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#30E3CA] text-black px-6 py-3 rounded font-semibold hover:bg-[#7A60FF] transition"
//           >
//             Subscribe
//           </motion.button>
//         </form>
//       </section>

//       {/* CTA Footer Section */}
//       <section className="bg-[#1D2B53] text-center py-16 px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-white mb-4"
//         >
//           Ready to launch your next big idea?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-gray-400 mb-8 max-w-xl mx-auto"
//         >
//           Partner with Zephiron and turn your concept into a cutting-edge web
//           application.
//         </motion.p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-3 px-8 rounded transition"
//         >
//           Get Started
//         </motion.button>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

// src/pages/LandingPage.jsx
import { motion, useScroll, useSpring } from "framer-motion";
import zephorin_rocket from "../assets/zephorin_rocket.png";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <PageWrapper>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
        style={{ scaleX }}
      />
      <div className="bg-[#1D2B53] text-white">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center px-6 min-h-[90vh]">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Build Smarter with <span className="text-[#30E3CA]">Zephiron</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          >
            Web Development, SaaS Solutions, and Tech Consulting that elevate
            your digital experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-3 px-6 rounded">
              Get Started
            </button>
            <button className="border border-white hover:bg-[#2E323C] py-3 px-6 rounded font-semibold">
              Learn More
            </button>
          </motion.div>
        </section>

        {/* Feature Section */}
        <section className="w-full bg-[#121212] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-4"
            >
              What Zephiron Offers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Our solutions are tailored for scale, built with performance, and
              designed for impact.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  desc: "From landing pages to full-stack applications, we build pixel-perfect, blazing-fast web apps.",
                },
                {
                  title: "SaaS Solutions",
                  desc: "Build your software-as-a-service product with scalable architecture and seamless UX.",
                },
                {
                  title: "Tech Consulting",
                  desc: "Get expert guidance on architecture, product strategy, and emerging technologies.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#2E323C] p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#30E3CA] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-[#1D2B53] py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#F8F9FA]">
                Why Choose Zephiron?
              </h2>
              <ul className="text-gray-300 space-y-3 text-sm">
                <li>✅ Built for performance and scalability</li>
                <li>✅ Future-proof architecture</li>
                <li>✅ Modern UI/UX principles</li>
                <li>✅ Developer-focused consulting</li>
                <li>✅ End-to-end project support</li>
              </ul>
            </motion.div>

            <motion.img
              src={zephorin_rocket}
              alt="Zephiron Rocket"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto md:mx-0 rounded-full"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  quote:
                    "Zephiron helped us launch our MVP in record time. Reliable and professional.",
                  name: "Sara M.",
                  role: "Startup Founder",
                },
                {
                  quote:
                    "Their SaaS expertise saved us months of dev time. Amazing work.",
                  name: "David L.",
                  role: "CTO at SaaSync",
                },
                {
                  quote:
                    "Incredible UI/UX results and great communication throughout.",
                  name: "Fatima K.",
                  role: "Product Designer",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#2E323C] p-6 rounded-lg text-left"
                >
                  <p className="text-sm text-gray-300 mb-4">“{t.quote}”</p>
                  <p className="text-[#30E3CA] font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-[#1D2B53] py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "TailwindCSS",
                "Express",
                "JWT",
              ].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#2E323C] px-4 py-2 rounded-md text-sm font-medium hover:text-[#30E3CA] transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-left">
              {[
                {
                  q: "What makes Zephiron different?",
                  a: "We focus on performance-first engineering with scalable architecture and aesthetic interfaces.",
                },
                {
                  q: "Do you work with startups or enterprises?",
                  a: "We work with all! From solo founders to enterprise teams looking to modernize their stack.",
                },
                {
                  q: "How fast can I get a working MVP?",
                  a: "Depending on scope, typically 2–4 weeks for functional MVP builds.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#2E323C] p-4 rounded-md"
                >
                  <h4 className="text-[#30E3CA] font-semibold mb-1">
                    {item.q}
                  </h4>
                  <p className="text-sm text-gray-300">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="bg-[#1D2B53] py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Trusted by</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {["Alpha", "BetaWorks", "CoreCode", "NeoTech"].map(
                (client, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#2E323C] px-6 py-3 rounded text-sm text-gray-400 font-semibold hover:text-[#30E3CA] transition"
                  >
                    {client}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#121212] py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Join our mailing list to receive updates, tips, and case studies.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded bg-[#2E323C] text-white outline-none w-full sm:w-auto"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#30E3CA] text-black px-6 py-3 rounded font-semibold hover:bg-[#7A60FF] transition"
            >
              Subscribe
            </motion.button>
          </form>
        </section>

        {/* CTA Footer Section */}
        <section className="bg-[#1D2B53] text-center py-16 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to launch your next big idea?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Partner with Zephiron and turn your concept into a cutting-edge web
            application.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-3 px-8 rounded transition"
          >
            Get Started
          </motion.button>
        </section>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
