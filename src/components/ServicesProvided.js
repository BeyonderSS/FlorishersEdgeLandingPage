import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const ServicesProvided = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden relative  px-5 py-24 h-screen">
      {/*Top Right Corner SVG */}
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 opacity-60">
          <motion.svg
            initial={{ opacity: 0, pathLength: 0, y: 100, x: -100 }}
            animate={{ opacity: 1, pathLength: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute  lg:-bottom-[90vh] -bottom-32 md:-bottom-96 -left-48 md:-left-[80vh] lg:-left-[120vh] w-full h-auto"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M36.1,-47.2C51,-38.9,70.2,-34,78.7,-22.2C87.2,-10.4,84.9,8.2,72.8,16.9C60.7,25.6,38.7,24.3,24.9,30.2C11.1,36.1,5.6,49.3,-2,52C-9.5,54.7,-19.1,47.1,-34.9,41.8C-50.7,36.5,-72.7,33.7,-81.3,22.7C-89.9,11.8,-85,-7.1,-73.7,-18.4C-62.4,-29.6,-44.5,-33.2,-31.1,-41.9C-17.8,-50.7,-8.9,-64.7,0.9,-65.9C10.6,-67.1,21.2,-55.5,36.1,-47.2Z"
              transform="translate(100 100)"
            />
          </motion.svg>{" "}
          {/* bottom left SVG  */}
        </motion.div>
      </div>
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center relative">
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
          src="/WebsiteCreator-amico.svg"
          alt="People flying"
          width={600}
          height={600}
        />
      </div>
      <div className="md:w-1/2  flex flex-col justify-center items-center p-8 md:p-16 ">
        <h2 className="text-4xl font-bold mb-8">Services We Provide</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Website Development</h3>
            <p className="text-gray-600 mb-4">
              We provide high-quality website development services to help you
              establish a strong online presence.
            </p>
            <Link
              href="/Support/ContactUs"
              className="text-pink-600 hover:text-pink-800 font-bold"
            >
              Get In Touch
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">IT Solutions</h3>
            <p className="text-gray-600 mb-4">
              Our IT solutions are designed to help you streamline your business
              processes and improve efficiency.
            </p>
            <Link
              href="/Support/ContactUs"
              className="text-pink-600 hover:text-pink-800 font-bold"
            >
              Get In Touch
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Our Key Products</h3>
            <p className="text-gray-600 mb-4">
              We offer a range of key products to help you meet your business
              needs and achieve your goals.
            </p>
            <Link
              href="/Support/ContactUs"
              className="text-pink-600 hover:text-pink-800 font-bold"
            >
              Get In Touch
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Others</h3>
            <p className="text-gray-600 mb-4">
              We also offer other services to help you grow your business and
              succeed in the digital world.
            </p>
            <Link
              href="/Support/ContactUs"
              className="text-pink-600 hover:text-pink-800 font-bold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
