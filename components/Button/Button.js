import Link from "next/link";
const Button = ({ btnName, link, className }) => {
  return (
    <Link
      href={link}
      className={`font-semibold text-lg py-3 text-center uppercase max-w-full text-white cursor-pointer bg-green-600 rounded-lg mx-5 block ${className}`}
    >
      {btnName}
    </Link>
  );
};

export default Button;
