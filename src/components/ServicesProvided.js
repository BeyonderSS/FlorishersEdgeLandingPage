import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const ServicesProvided = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-purple-200  px-5 py-24">
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center">
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
              className="text-purple-600 hover:text-purple-800 font-bold"
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
              className="text-purple-600 hover:text-purple-800 font-bold"
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
              className="text-purple-600 hover:text-purple-800 font-bold"
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
              className="text-purple-600 hover:text-purple-800 font-bold"
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
