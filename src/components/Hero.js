"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen ">
      {/*Top Right Corner SVG */}
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 opacity-60">
          <motion.svg
            initial={{ opacity: 0, pathLength: 0, y: -100, x: 100 }}
            animate={{ opacity: 0.6, pathLength: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute lg:-top-[100vh] -top-32 md:-top-96 -right-32 md:-right-96 lg:-right-[100vh] w-full h-auto"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0802A3"
              d="M35.9,-49.7C40,-46.3,32.5,-27.2,38.6,-11.8C44.7,3.7,64.3,15.5,69.1,29.2C73.9,42.9,63.9,58.5,49.9,60C35.9,61.5,18,48.8,5.7,41C-6.6,33.2,-13.3,30.3,-28.2,29.1C-43.1,27.9,-66.3,28.5,-73.3,20.6C-80.4,12.7,-71.3,-3.8,-61.8,-16.2C-52.4,-28.6,-42.7,-37,-32.3,-38.3C-22,-39.7,-11,-34,2.4,-37.4C15.9,-40.7,31.7,-53.1,35.9,-49.7Z"
              transform="translate(100 100)"
            />
          </motion.svg>
          {/* bottom left SVG  */}

          <motion.svg
            initial={{ opacity: 0, pathLength: 0, y: 100, x: -100 }}
            animate={{ opacity: 1, pathLength: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute  lg:-bottom-[90vh] -bottom-32 md:-bottom-96 -left-48 md:-left-[80vh] lg:-left-[120vh] w-full h-auto"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0802A3"
              d="M36.1,-47.2C51,-38.9,70.2,-34,78.7,-22.2C87.2,-10.4,84.9,8.2,72.8,16.9C60.7,25.6,38.7,24.3,24.9,30.2C11.1,36.1,5.6,49.3,-2,52C-9.5,54.7,-19.1,47.1,-34.9,41.8C-50.7,36.5,-72.7,33.7,-81.3,22.7C-89.9,11.8,-85,-7.1,-73.7,-18.4C-62.4,-29.6,-44.5,-33.2,-31.1,-41.9C-17.8,-50.7,-8.9,-64.7,0.9,-65.9C10.6,-67.1,21.2,-55.5,36.1,-47.2Z"
              transform="translate(100 100)"
            />
          </motion.svg>
        </motion.div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between h-full md:pt-0 lg:pt-0 pt-28 lg:mx-10 md:mx-6">
        {/* Content on the left */}
        <article className="md:w-1/2 p-8 md:p-12 text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-bold  mb-4">
            Explore. Innovate. Flourish.
          </h1>
          <p className="text-lg md:text-md text-gray-900 mb-8">
            We specialize in all things web, from creating stunning websites
            that captivate your audience to crafting robust web applications
            that power your business. Our team of tech enthusiasts and creative
            minds are here to redefine the way you experience the digital realm.
          </p>
        </article>
        {/* SVG on the right */}
        <figure className="md:w-1/2 mt-4 hidden md:block md:mt-0">
          <img
            src="/heroSectionBG.svg"
            alt="Hero Section Background"
            className="w-full h-auto"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
