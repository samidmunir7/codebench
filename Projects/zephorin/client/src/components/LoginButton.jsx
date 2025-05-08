import { MdLogin } from "react-icons/md";

const LoginButton = () => {
  return (
    <button className="border-2 border-[#7A60FF] rounded-md px-2 py-0.5 text-[#F8F9FA] font-bold flex items-center gap-1 hover:bg-[#7A60FF] transition-all cursor-default">
      <span>Login</span>
      <span>
        <MdLogin />
      </span>
    </button>
  );
};

export default LoginButton;
