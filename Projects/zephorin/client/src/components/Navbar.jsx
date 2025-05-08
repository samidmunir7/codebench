import zephorin_logo from "../assets/zephorin_logo.png";
import NavbarLink from "./NavbarLink.jsx";
import { MdHub, MdInfo, MdMail, MdMemory, MdGrain } from "react-icons/md";
import LoginButton from "./LoginButton.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    index: 0,
    href: "/",
    label: "Home",
    icon: <img src={zephorin_logo} className="w-5 h-5 rounded-full" />,
  },
  {
    index: 1,
    href: "/about",
    label: "About",
    icon: <MdInfo />,
  },
  {
    index: 2,
    href: "/services",
    label: "Services",
    icon: <MdMemory />,
  },
  {
    index: 3,
    href: "/pricing",
    label: "Pricing",
    icon: <MdHub />,
  },
  {
    index: 4,
    href: "/docs",
    label: "Docs",
    icon: <MdGrain />,
  },
  {
    index: 5,
    href: "/contact",
    label: "Contact",
    icon: <MdMail />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-16 py-2 bg-[#121212] flex items-center justify-between">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-4 cursor-default"
      >
        <img
          src={zephorin_logo}
          alt="Zephorin logo"
          className="w-10 h-10 rounded-full border-2 border-[#121212] hover:border-[#7A60FF] transition-all cursor-default"
        />
        <h1 className="text-3xl text-[#7A60FF] font-bold tracking-wider cursor-default">
          Zephorin
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <NavbarLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Navbar;
