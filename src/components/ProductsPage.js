"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row pt-24 overflow-hidden">
      <div className="md:w-1/2">
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
          src="/ProductPageSvg.svg"
          alt="People flying"
          width={600}
          height={600}
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Our Projects
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore a world of innovation and creativity! If you&apos;ve enjoyed the
          magic of Class Craft and the convenience of Waiterless, get ready to
          be amazed by our other groundbreaking projects. Your adventure starts
          here.
        </p>

        <Link href="/projects" style={{ "--clr": " #7169C8" }} className="button">
          <span className="button__icon-wrapper">
            <svg
              width={10}
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              />
            </svg>
            <svg
              className="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              />
            </svg>
          </span>
          Explore All
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
