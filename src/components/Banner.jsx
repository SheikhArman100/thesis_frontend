/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import image3 from "../assets/image3_tiny.jpg";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

function Banner() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative mt-6 flex flex-col space-y-6 "
      variants={banner}
      initial="initial"
      animate="animate"
    >
      <div className="mx-2 flex items-center justify-between space-x-4 sm:mx-12 md:mx-[5rem] md:space-x-10 lg:mx-[6rem] xl:mx-[8rem]">
        <AnimatedLetters title="Unlock" />
        <motion.p
          className=" mt-4 flex w-full text-[0.6rem] leading-[0.7rem] text-gray-400 sm:max-w-[16rem] sm:text-[0.8rem] lg:text-[1rem] lg:leading-[1rem]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
        >
          Here you can get to know the present price of an used car
        </motion.p>
      </div>

      <motion.div
        className="ml-[45rem] "
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.9],
          duration: 1.6,
          delay: 1.4,
        }}
      >
        <AnimatedLetters title="Car Pricing" />
      </motion.div>

      <div className="relative flex h-full w-full flex-col">
        <div className="flex items-center">
          <motion.button
            type="button"
            onClick={() => navigate("/usedcar")}
            className="relative ml-2  cursor-pointer rounded-full bg-red-500 p-6 text-xs sm:ml-6 md:p-12 lg:ml-10 xl:ml-[4rem] xl:p-14"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1.4,
              delay: 1,
            }}
          >
            Used car <br /> Price
          </motion.button>
          <div className="absolute  ml-[30rem] flex w-full items-center">
            <AnimatedLetters title="Secrets" />
          </div>
        </div>
        <div className=" absolute top-12 z-[-100] aspect-[1/0.8] md:top-[4rem] md:aspect-[1/0.5] 2xl:top-[5rem]">
          <motion.img
            src={image3}
            alt=""
            className="h-full w-full object-fill"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1.4,
              delay: 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedLetters({ title, disabled }) {
  return (
    <motion.h1
      className="relative flex whitespace-nowrap py-6 tracking-[-0.4rem] sm:py-7 "
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.p
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="h-full text-[5rem] font-bold sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem]"
          variants={letterAnimation}
        >
          {letter}
        </motion.p>
      ))}
    </motion.h1>
  );
}

export default Banner;
