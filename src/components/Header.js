import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg z-50" >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center ">
        <Link href="/" className="font-bold text-2xl py-2  ">
          Flourishers  <span className="text-purple-600">Edge .</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#Hero"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Features"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="#ServicesProvided"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Services 
              </a>
            </li>
            <li>
              <a
                href="/Support/ContactUs"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Get In touch
              </a>
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
              <a
                href="#"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Our Key Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Services We Provide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Get In touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
 
    </header>
  );
};

export default Header;
