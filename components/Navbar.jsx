"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus, AiOutlineLogin, AiOutlineUser,AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex sticky z-50 min-h-[3rem] items-center justify-between bg-slate-900 px-3 py-2 sm:px-[2%] sm:py-[1%] lg:px-[15%]">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={60} height={60} />
      </Link>
      <div className="flex h-full w-24 gap-3 justify-evenly items-center">
        <Link href={"/create"}>
          <AiOutlinePlus
            fontSize={23}
            className="hover:text-blue-600 duration-100 text-blue-400"
          />
        </Link>
        <Link href={"/join"}>
          <AiOutlineLogin
            fontSize={23}
            className="hover:text-blue-600 duration-100 text-blue-400"
          />
        </Link>
      </div>
      <AiOutlineUser
        onClick={() => setShowLogin(true)}
        fontSize={26}
        className="text-blue-400 duration-100 cursor-pointer hover:text-blue-600"
      />
      <AnimatePresence>
        {showLogin && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className={`absolute top-[50%] left-[50%] bg-slate-950 flex justify-center items-center flex-col gap-3 text-white min-w-[12rem] min-h-[12rem] translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg `}
          >
            <AiOutlineClose className="absolute right-2 top-2 text-red-500 cursor-pointer" fontSize={20} onClick={() => setShowLogin(false)} />
            <p>Google</p>
            <p>Auth</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
