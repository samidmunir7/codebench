import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#121212] text-gray-300 px-6 py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[#30E3CA] mb-1">Zephiron</h3>
          <p className="text-sm text-gray-400">
            Crafting scalable web experiences & SaaS solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm justify-center">
          <NavLink to="/" className="hover:text-[#30E3CA] transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#30E3CA] transition">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-[#30E3CA] transition">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#30E3CA] transition">
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#30E3CA]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#30E3CA]"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:info@zephiron.com" className="hover:text-[#30E3CA]">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Zephiron. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
