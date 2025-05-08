import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

const NavbarLink = (props) => {
  const match = useMatch(props.href);
  return (
    <div
      className={`${
        match ? "text-[#7A60FF]" : "text-[#F8F9FA]"
      } font-semibold flex items-center gap-2 hover:text-[#7A60FF] transition-all cursor-default`}
    >
      <span>{props.icon}</span>
      <NavLink to={props.href} className="cursor-default">
        {props.label}
      </NavLink>
    </div>
  );
};

export default NavbarLink;
