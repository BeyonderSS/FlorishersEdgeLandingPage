import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Features = () => {
  return (
    <div>
      <div
        id="features"
        className="relative w-full px-8 py-10 border-gray-200  xl:px-0 "
      >
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
                fill="#FF0066"
                d="M35.9,-49.7C40,-46.3,32.5,-27.2,38.6,-11.8C44.7,3.7,64.3,15.5,69.1,29.2C73.9,42.9,63.9,58.5,49.9,60C35.9,61.5,18,48.8,5.7,41C-6.6,33.2,-13.3,30.3,-28.2,29.1C-43.1,27.9,-66.3,28.5,-73.3,20.6C-80.4,12.7,-71.3,-3.8,-61.8,-16.2C-52.4,-28.6,-42.7,-37,-32.3,-38.3C-22,-39.7,-11,-34,2.4,-37.4C15.9,-40.7,31.7,-53.1,35.9,-49.7Z"
                transform="translate(100 100)"
              />
            </motion.svg>
            {/* bottom right SVG  */}
            {/* <motion.svg
              initial={{ opacity: 0, pathLength: 0, y: 100, x: -100 }}
              animate={{ opacity: .6, pathLength: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute  lg:-bottom-[100vh] -bottom-32 md:-bottom-96 -right-48 md:-right-[80vh] lg:-right-[120vh] w-full h-auto"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF0066"
                d="M37.4,-51.2C48.2,-43.7,56.4,-32.3,61.1,-19.5C65.8,-6.6,67,7.8,65.6,24.2C64.2,40.6,60.2,59,48.8,62.4C37.5,65.9,18.7,54.4,0.3,54C-18.2,53.7,-36.5,64.5,-45.2,60.2C-54,55.9,-53.3,36.5,-57.7,19.6C-62.1,2.6,-71.5,-11.8,-72.5,-28.1C-73.4,-44.3,-65.9,-62.4,-52.4,-69C-38.9,-75.7,-19.5,-71,-3.1,-66.7C13.3,-62.5,26.6,-58.7,37.4,-51.2Z"
                transform="translate(100 100)"
              />
            </motion.svg> */}
          </motion.div>
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-pink-500 uppercase">
            Our Products
          </h2>
          <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Built and Designed with you in Mind
          </h3>
          <div className="flex relative flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
            <motion.div
              animate="bubble"
              variants={{
                bubble: {
                  x: [0, 5, -5, 10, -10, 0],
                  y: [0, 10, -10, 5, -5, 0],
                  transition: {
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3 "
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg curs">
                <img
                  className="absolute w-full h-full opacity-5 fill-current cursor-pointer"
                  src="/feature1.svg"
                  alt=""
                />
                <img
                  className="relative w-40 h-40 cursor-pointer"
                  src="/Raising hand-cuate.svg"
                  alt=""
                />
                <h4 className="relative mt-6 text-lg font-bold cursor-pointer">
                  ClassCraft
                </h4>
                <p className="relative mt-2 text-base text-center text-gray-600 cursor-pointer">
                  Level up your classroom with ClassCraft - where learning meets
                  adventure.
                </p>
                <Link
                  href="https://class-craft-production.vercel.app/"
                  className="relative flex mt-2 text-sm font-medium text-pink-500 underline cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              animate="bubble"
              variants={{
                bubble: {
                  x: [0, 5, -5, 10, -10, 0],
                  y: [0, 10, -10, 5, -5, 0],
                  transition: {
                    duration: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3"
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <img
                  className="cursor-pointer absolute w-full h-full text-gray-100 opacity-5 fill-current"
                  src="/feature3.svg"
                  alt=""
                />
                {/* <!-- FEATURE Icon 2 --> */}
                <img
                  src="Waiters-bro.svg"
                  alt=""
                  className="relative w-40 h-40 cursor-pointer"
                />
                <h4 className="relative mt-6 text-lg font-bold cursor-pointer">
                  WaiterLess{" "}
                </h4>
                <p className="relative mt-2 text-base text-center text-gray-600 cursor-pointer">
                  Transform your dining experience with WaiterLess - the web app
                  that makes every meal effortless.
                </p>
                <Link
                  href="http://waiterless.tech/"
                  className="cursor-pointer relative flex mt-2 text-sm font-medium text-pink-500 underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
