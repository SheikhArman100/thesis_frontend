import { motion } from "framer-motion";
import React from "react";
import { RiMenu5Line } from "react-icons/ri";

function Header() {
  return (
    <motion.div
      className="flex h-[4rem] items-center justify-between sm:px-4 md:h-[6rem] md:px-12 "
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <a href="##" className="text-3xl font-bold sm:text-4xl xl:text-5xl">
        Car
      </a>
      <div className="flex items-center space-x-5 md:hidden">
        <button
          type="button"
          className="border border-whiteColor px-3 py-2 font-semibold"
        >
          Lets explore
        </button>
        <RiMenu5Line size={32} />
      </div>
      <nav className="hidden  md:flex md:items-center md:justify-between">
        <ul className="flex cursor-pointer items-center space-x-6 text-sm font-semibold lg:text-base xl:text-lg">
          <li className="">Design</li>
          <li className="">Vehicles</li>
          <li className="">Exclusive</li>
          <li className="">Innovation</li>
        </ul>
      </nav>
      <button
        type="button"
        className="hidden whitespace-nowrap border border-whiteColor px-3 py-2 text-sm font-semibold md:flex lg:text-base xl:text-lg"
      >
        Lets explore
      </button>
    </motion.div>
  );
}

export default Header;
