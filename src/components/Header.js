import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <header className="bg-transparent backdrop-blur-lg bg-white shadow-lg z-50 fixed w-full">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center ">
        <Link href="/" className="font-bold text-2xl py-2  ">
          Flourishers <span className="text-[#F767A4]">Edge .</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href={`${pathname == "/" ? "#hero" : "/#hero"}`}
                className="text-white font-semibold text-lg  hover:text-pink-900 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`${pathname == "/" ? "#Features" : "/#Features"}`}
                className="text-white font-semibold text-lg  hover:text-pink-900  transition duration-300"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                href={`${
                  pathname == "/" ? "#ServicesProvided" : "/#ServicesProvided"
                }`}
                className="text-white font-semibold text-lg  hover:text-pink-900  transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/Support/ContactUs"
                className="text-white font-semibold text-lg  hover:text-pink-900  transition duration-300"
              >
                Get In touch
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-xl text-purple-600" />
            ) : (
              <FaBars className="text-xl text-purple-600" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white"
        >
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <li>
              <Link
                href={`${pathname == "/" ? "#hero" : "/#hero"}`}
                className="text-gray-600 hover:text-pink-900  transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`${pathname == "/" ? "#Features" : "/#Features"}`}
                className="text-gray-600 hover:text-pink-900  transition duration-300"
              >
                Our Key Products
              </Link>
            </li>
            <li>
              <Link
                href={`${
                  pathname == "/" ? "#ServicesProvided" : "/#ServicesProvided"
                }`}
                className="text-gray-600 hover:text-pink-900  transition duration-300"
              >
                Services We Provide
              </Link>
            </li>
            <li>
              <Link
                href="/Support/ContactUs"
                className="text-gray-600 hover:text-pink-900  transition duration-300"
              >
                Get In touch
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
