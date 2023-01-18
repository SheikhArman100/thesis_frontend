/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import image1 from "../assets/image1_tiny.jpg";
import image3 from "../assets/image3_tiny.jpg";
import image4 from "../assets/image4_tiny.jpg";
import image5 from "../assets/image5_tiny.jpg";
import image6 from "../assets/image6_tiny.jpg";

// animation variants

const container = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1.6,
    },
  },
};

function Loader({ setLoading }) {
  return (
    <motion.div
      className="relative flex h-screen w-full origin-center items-center justify-center  text-center"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      key="loader"
      onAnimationComplete={() => setLoading(false)}
    >
      <ImageContainer
        image={image6}
        variants={item}
        effect="absolute z-[1] object-fill w-[200px] left-[2%] bottom-[16%] sm:w-[300px] sm:bottom-[10%] lg:w-[310px] xl:w-[340px] 2xl:w-[380px]"
        id="1"
      />
      <motion.img
        src={image3}
        variants={itemMain}
        alt=""
        className="z-[2] w-[320px] object-fill sm:w-[400px]  lg:w-[500px] xl:w-[600px] 2xl:w-[700px]"
        id="2"
        layoutId="main-image"
      />
      <ImageContainer
        image={image4}
        variants={item}
        effect="absolute z-[3] object-fill w-[200px] top-[4%] right-[2%] sm:w-[210px] lg:w-[220px] xl:w-[300px] 2xl:w-[340px]"
        id="3"
      />
      <ImageContainer
        image={image5}
        variants={item}
        effect="absolute z-[4] object-fill w-[220px] right-[2%] bottom-[14%] sm:w-[280px] sm:bottom-[6%]  lg:w-[310px] xl:w-[340px] 2xl:w-[380px]"
        id="4"
      />
      <ImageContainer
        image={image1}
        variants={item}
        effect="absolute z-[5] object-fill w-[180px] left-[2%] top-[2%] sm:w-[200px]  lg:w-[220px] xl:w-[300px]  2xl:w-[340px]"
        id="5"
      />
    </motion.div>
  );
}

function ImageContainer({ image, effect, variants, id }) {
  return (
    <motion.img src={image} alt={id} className={effect} variants={variants} />
  );
}

export default Loader;
