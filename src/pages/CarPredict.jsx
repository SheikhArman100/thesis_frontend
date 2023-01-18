import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function CarPredict() {
  const state = useLocation();
  return (
    <>
      <Header />
      <div className="mt-[10rem] flex flex-col items-center justify-center sm:mt-[12rem] ">
        {/* <h2>Car Price is {state.state.price}</h2> */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 1.6,
          }}
          className="text-[3rem] font-extrabold md:text-[4rem]"
        >
          Car price is
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 2,
          }}
          className="mt-8 text-[2rem] font-semibold text-gray-300 md:mt-12 md:text-[4rem]"
        >
          {state.state.price}
        </motion.h2>
      </div>
    </>
  );
}

export default CarPredict;
