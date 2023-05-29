import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";
import Logo from "../Logo/Logo";
const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[400px_1fr] h-screen max-h-screen">
      <div className="flex flex-col bg-slate-800 text-white">
        <Logo className="text-2xl" />
        <Link
          href="/post/new"
          className="font-semibold text-lg py-3 text-center uppercase max-w-full cursor-pointer bg-green-600 rounded-lg mx-5 block"
        >
          New Post
        </Link>
        <Link
          href="/token-topup"
          className=" flex gap-4 justify-center py-5 font-bold text-lg"
        >
          <FaCoins className="text-yellow-600 w-6 h-6"> </FaCoins>0 tokens
          available
        </Link>
        <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-600">
          News
        </div>
        <div className="border-black border-b">
          {user ? (
            <div className="py-5 flex gap-5 items-start">
              <div className="max-w-[50px]">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="mr-5 rounded-full "
                />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-lg">{user.email}</div>
                <Link href="/api/auth/logout" className="font-semibold">
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default AppLayout;
