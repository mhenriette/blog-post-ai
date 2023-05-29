import { FaBrain } from "react-icons/fa";
const Logo = ({ className }) => {
  return (
    <div className="flex gap-3 my-5 items-center justify-center">
      <p className={`${className} text-white font-bold font-heading`}>
        BlogStandard
      </p>
      <FaBrain className="text-gray-500 w-8 h-8" />
    </div>
  );
};

export default Logo;
