import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64 bg-purple-200">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Empowering Your Online Growth
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              Ready to create digital experiences that will leave a lasting
              impression? We can help.
            </p>
            <a
              href="/Support/ContactUs"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              Get In Touch Today!
            </a>
            {/* <!-- Integrates with section --> */}
            <motion.img
              animate="bubble"
              variants={{
                bubble: {
                  x: [0, 5, -5, 10, -10, 0],
                  y: [0, 10, -10, 5, -5, 0],
                  transition: {
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="absolute left-0 max-w-md mt-24 -ml-64 left-svg"
              src="/herobg.svg"
              alt=""
            />
          </div>
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <motion.img
              animate="bubble"
              variants={{
                bubble: {
                  x: [0, 5, -5, 10, -10, 0],
                  y: [0, 10, -10, 5, -5, 0],
                  transition: {
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              src="/business-plan-animate.svg"
              alt="Buisness"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
