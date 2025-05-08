import { MdPersonAddAlt1 } from "react-icons/md";

const RegisterButton = () => {
  return (
    <button className="border-2 border-[#30E3CA] rounded-md px-2 py-0.5 text-[#F8F9FA] font-bold flex items-center gap-1 hover:bg-[#30E3CA] transition-all cursor-default">
      <span>Register</span>
      <span>
        <MdPersonAddAlt1 />
      </span>
    </button>
  );
};

export default RegisterButton;
