// import { MdPersonAddAlt1 } from "react-icons/md";

// const RegisterButton = () => {
//   return (
//     <button className="border-2 border-[#30E3CA] rounded-md px-2 py-0.5 text-[#F8F9FA] font-bold flex items-center gap-1 hover:bg-[#30E3CA] transition-all cursor-default">
//       <span>Register</span>
//       <span>
//         <MdPersonAddAlt1 />
//       </span>
//     </button>
//   );
// };

// export default RegisterButton;

import { MdPersonAddAlt1 } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/register")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="border-2 border-[#30E3CA] rounded-md px-4 py-2 text-[#F8F9FA] font-semibold flex items-center gap-2 hover:bg-[#30E3CA] hover:text-black transition-all duration-200 cursor-pointer text-sm md:text-base"
    >
      <span>Register</span>
      <MdPersonAddAlt1 size={18} />
    </motion.button>
  );
};

export default RegisterButton;
