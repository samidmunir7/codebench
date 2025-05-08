// import { motion, useScroll, useSpring } from "framer-motion";
// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
// import FooterSecondary from "../components/FooterSecondary";

// const fadeIn = (delay = 0.2) => ({
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay },
//   viewport: { once: false, amount: 0.1 },
// });

// const ContactPage = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
//         style={{ scaleX }}
//       />

//       <div className="bg-[#1D2B53] text-white min-h-screen px-6 py-20">
//         {/* Intro */}
//         <motion.div {...fadeIn(0)} className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//             Let's <span className="text-[#30E3CA]">Connect</span>
//           </h1>
//           <p className="text-gray-300 max-w-xl mx-auto">
//             Whether you have a question, a project, or just want to say hello —
//             we're ready to hear from you.
//           </p>
//         </motion.div>

//         {/* Contact Form + Info */}
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           {/* Contact Form */}
//           <motion.form
//             {...fadeIn(0.1)}
//             className="space-y-6 bg-[#121212] p-8 rounded-lg shadow-md"
//           >
//             <div>
//               <label className="block text-sm mb-1">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
//               ></textarea>
//             </div>
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-2 px-6 rounded transition w-full"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>

//           {/* Contact Info */}
//           <motion.div {...fadeIn(0.2)} className="space-y-6">
//             <div>
//               <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
//                 Contact Info
//               </h2>
//               <p className="text-gray-300">Email: info@zephiron.com</p>
//               <p className="text-gray-300">Location: Remote / Global</p>
//             </div>
//             <div>
//               <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
//                 Follow Us
//               </h2>
//               <div className="flex space-x-4 text-xl">
//                 <a
//                   href="mailto:info@zephiron.com"
//                   className="hover:text-[#30E3CA] transition"
//                 >
//                   <FaEnvelope />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-[#30E3CA] transition"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-[#30E3CA] transition"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//               <div className="mt-8">
//                 <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
//                   Our Location
//                 </h2>
//                 <div className="rounded-lg overflow-hidden shadow-md border border-[#2E323C]">
//                   <iframe
//                     title="Zephiron HQ"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387954.16706053395!2d-74.92946474115928!3d40.566063714167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bfb2a50c4e49%3A0xbaab05032912ccb1!2sSomerset%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1746697255218!5m2!1sen!2suss"
//                     width="100%"
//                     height="250"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <FooterSecondary />
//     </>
//   );
// };

// export default ContactPage;

import { motion, useScroll, useSpring } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: false, amount: 0.1 },
});

const ContactPage = () => {
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

      <div className="bg-[#1D2B53] text-white min-h-screen px-6 py-20">
        {/* Intro */}
        <motion.div {...fadeIn(0)} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Let's <span className="text-[#30E3CA]">Connect</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Whether you have a question, a project, or just want to say hello —
            we're ready to hear from you.
          </p>
        </motion.div>

        {/* Contact Form + Info */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            {...fadeIn(0.1)}
            className="space-y-6 bg-[#121212] p-8 rounded-lg shadow-md"
          >
            {[
              { label: "Full Name", type: "text", name: "name", delay: 0.2 },
              { label: "Email", type: "email", name: "email", delay: 0.3 },
              { label: "Subject", type: "text", name: "subject", delay: 0.4 },
            ].map(({ label, type, name, delay }, i) => (
              <motion.div key={name} {...fadeIn(delay)}>
                <label className="block text-sm mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
                />
              </motion.div>
            ))}
            <motion.div {...fadeIn(0.5)}>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-2 bg-[#2E323C] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-2 px-6 rounded transition w-full"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div {...fadeIn(0.2)} className="space-y-8">
            <motion.div {...fadeIn(0.3)}>
              <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
                Contact Info
              </h2>
              <p className="text-gray-300">Email: info@zephiron.com</p>
              <p className="text-gray-300">Location: Remote / Global</p>
            </motion.div>

            <motion.div {...fadeIn(0.4)}>
              <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
                Follow Us
              </h2>
              <div className="flex space-x-4 text-xl">
                {[
                  { icon: <FaEnvelope />, href: "mailto:info@zephiron.com" },
                  { icon: <FaLinkedin />, href: "https://linkedin.com" },
                  { icon: <FaGithub />, href: "https://github.com" },
                ].map(({ icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="hover:text-[#30E3CA] transition"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div {...fadeIn(0.5)}>
              <h2 className="text-xl font-bold mb-2 text-[#30E3CA]">
                Our Location
              </h2>
              <div className="rounded-lg overflow-hidden shadow-md border border-[#2E323C]">
                <iframe
                  title="Zephiron HQ"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387954.16706053395!2d-74.92946474115928!3d40.566063714167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bfb2a50c4e49%3A0xbaab05032912ccb1!2sSomerset%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1746697255218!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default ContactPage;
