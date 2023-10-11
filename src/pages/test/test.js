import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHandsHelping, FaLaptopCode, FaMobileAlt, FaQuestion } from "react-icons/fa";

const services = [
  {
    title: "Consultancy",
    description: "Expert advice and guidance for your projects.",
    icon: <FaHandsHelping size={40} />,
  },
  {
    title: "Web Application Development",
    description: "Building modern and responsive web applications.",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Mobile Application Development",
    description: "Creating mobile apps for iOS and Android platforms.",
    icon: <FaMobileAlt size={40} />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for your specific needs.",
    icon: <FaQuestion size={40} />,
  },
];

const Test = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row pt-24 relative overflow-hidden">
      {/* Bottom left Corner SVG */}
        
          <motion.img
            initial={{ opacity: 0, pathLength: 0, y: 100, x: -100 }}
            animate={{ opacity: 1, pathLength: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute w-full h-auto -bottom-[100vh] -left-[900px] "
            src="/bgBlob.svg"
            alt=""
          />

      <div className="md:w-1/2 relative">
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

      {/* Services section */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Our Services</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              className="p-8  rounded-2xl shadow-xl text-center">
              <div className="text-[#0802A3] text-4xl mb-2 flex justify-center items-center p-4">{service.icon}</div>
              <span className="text-xl font-semibold mb-2">{service.title}</span>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <Link href="/Support/ContactUs">
          <div className="mt-4 bg-[#0802A3]/90  hover:bg-[#0802A3] text-white font-semibold py-2 px-4 rounded">
            Get In Touch
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Test;
