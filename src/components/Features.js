import React from "react";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <div>
      <div
        id="features"
        className="relative w-full px-8 py-10 border-gray-200  xl:px-0 bg-purple-200"
      >
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            Our Products
          </h2>
          <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Built and Designed with you in Mind
          </h3>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
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
                <h4 className="relative mt-6 text-lg font-bold cursor-pointer">ClassCraft</h4>
                <p className="relative mt-2 text-base text-center text-gray-600 cursor-pointer">
                  Level up your classroom with ClassCraft - where learning meets
                  adventure.
                </p>
                <a
                  href="https://florishers-edge.vercel.app/"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline cursor-pointer"
                >
                  Learn More
                </a>
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
                <h4 className="relative mt-6 text-lg font-bold cursor-pointer">WaiterLess </h4>
                <p className="relative mt-2 text-base text-center text-gray-600 cursor-pointer">
                  Transform your dining experience with WaiterLess - the app
                  that makes every meal effortless.
                </p>
                <a
                  href=""
                  className="cursor-pointer relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              animate="bubble"
              variants={{
                bubble: {
                  x: [0, 5, -5, 10, -10, 0],
                  y: [0, 10, -10, 5, -5, 0],
                  transition: {
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3"
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <img
                  src="/feature5.svg"
                  alt=""
                  className="absolute cursor-pointer md:w-full md:h-full h-96 w-96 text-gray-100 opacity-5 fill-current"
                />
                {/* <!-- FEATURE Icon 3 --> */}
                <img
                  src="Company-amico.svg"
                  alt=""
                  className="relative w-40 h-40 cursor-pointer"
                />
                <h4 className="relative mt-6 text-lg font-bold cursor-pointer">FluidView</h4>
                <p className="relative mt-2 text-base text-center text-gray-600 cursor-pointer">
                  Unleash the power of fluidity with FluidView - the CRM
                  platform that adapts to your business.
                </p>
                {/* <a
                  href=""
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a> */}

                <div
                  className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex pt-2"
                  role="alert"
                >
                  <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                    Appologies!
                  </span>
                  <span className="font-semibold mr-2 text-left flex-auto">
                    Under Developmet{" "}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
