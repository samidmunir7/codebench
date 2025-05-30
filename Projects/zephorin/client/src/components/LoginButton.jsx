import { MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const match = useMatch("/login");

  return (
    <motion.button
      onClick={() => navigate("/login")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${
        match && "bg-[#7A60FF]"
      } border-2 border-[#7A60FF] rounded-md px-4 py-2 text-[#F8F9FA] font-semibold flex items-center gap-2 hover:bg-[#7A60FF] hover:text-white transition-all duration-200 cursor-pointer text-sm md:text-base`}
    >
      <span>Login</span>
      <MdLogin size={18} />
    </motion.button>
  );
};

export default LoginButton;
