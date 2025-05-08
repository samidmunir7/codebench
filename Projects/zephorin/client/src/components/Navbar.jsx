import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import zephorin_logo from "../assets/zephorin_logo.png";
import NavbarLink from "./NavbarLink.jsx";
import LoginButton from "./LoginButton.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { MdHub, MdInfo, MdMail, MdMemory, MdGrain } from "react-icons/md";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <img src={zephorin_logo} className="w-5 h-5 rounded-full" />,
  },
  { href: "/about", label: "About", icon: <MdInfo /> },
  { href: "/services", label: "Services", icon: <MdMemory /> },
  { href: "/pricing", label: "Pricing", icon: <MdHub /> },
  { href: "/docs", label: "Docs", icon: <MdGrain /> },
  { href: "/contact", label: "Contact", icon: <MdMail /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          onClick={() => navigate("/")}
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src={zephorin_logo}
            alt="Zephorin logo"
            className="w-10 h-10 rounded-full border-2 border-[#121212] hover:border-[#7A60FF] transition-all"
          />
          <h1 className="text-2xl md:text-3xl text-[#30E3CA] font-bold tracking-wide">
            Zephiron
          </h1>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <NavbarLink key={idx} {...link} />
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <LoginButton />
          <RegisterButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#1D2B53] flex flex-col gap-6 px-6 py-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link, idx) => (
              <NavbarLink key={idx} {...link} />
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-[#2E323C]">
              <LoginButton />
              <RegisterButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
