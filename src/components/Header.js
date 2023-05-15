import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header class="bg-white shadow-lg z-50" >
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center ">
        <div class="font-bold text-2xl py-2  ">
          Flourishers  <span className="text-purple-600">Edge .</span>
        </div>
        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Services 
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Get In touch
              </a>
            </li>
          </ul>
        </div>
        <div class="md:hidden">
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
          class="md:hidden bg-white"
        >
          <ul class="flex flex-col space-y-4 px-4 py-2">
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Our Key Products
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
              >
                Services We Provide
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-purple-500 transition duration-300"
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
