// import { MdLogin } from "react-icons/md";

// const LoginButton = () => {
//   return (
//     <button className="border-2 border-[#7A60FF] rounded-md px-2 py-0.5 text-[#F8F9FA] font-bold flex items-center gap-1 hover:bg-[#7A60FF] transition-all cursor-default">
//       <span>Login</span>
//       <span>
//         <MdLogin />
//       </span>
//     </button>
//   );
// };

// export default LoginButton;

import { MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/login")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="border-2 border-[#7A60FF] rounded-md px-4 py-2 text-[#F8F9FA] font-semibold flex items-center gap-2 hover:bg-[#7A60FF] hover:text-white transition-all duration-200 cursor-pointer text-sm md:text-base"
    >
      <span>Login</span>
      <MdLogin size={18} />
    </motion.button>
  );
};

export default LoginButton;
