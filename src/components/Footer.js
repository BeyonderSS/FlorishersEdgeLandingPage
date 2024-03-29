import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 w-full relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <Link href="/#Hero" className="text-lg font-bold text-white mb-4">
              Flourishers <span className="text-[#0802A3]">Edge .</span>
            </Link>
            <p className="text-gray-400">Technology Redefined</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <Link
              href="/support/contactUs"
              className="text-lg font-bold text-white mb-4"
            >
              Contact Us
            </Link>
            <ul className="list-none">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  Email: flourishersedge@gmail.com
                </a>
              </li>
              {/* <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  Phone: +1 (555) 123-4567
                </a>
              </li> */}
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  Address:flourishersedge near 11 miles Hoshangabad road Bhopal
                  462046
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">Links</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link
                  href="/support/termsAndConditions"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/support/aboutUs"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
            <ul className="list-none flex">
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />

          <div className="w-full md:w-auto mb-4 md:mb-0 ">
            <p className="text-gray-400 text-center ">
              &copy; {currentYear} Flourishers Edge. All rights reserved.
            </p>
          </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto">
            <ul className="list-none  text-gray-900 flex md:flex-row lg:flex-row flex-col">
              <li className="mr-4">
                <a
                  href="https://storyset.com/business"
                  className=" hover:text-white transition duration-300 ease-in-out"
                >
                  Svg&apos;s by Business illustrations by Storyset
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://storyset.com/education"
                  className=" hover:text-white transition duration-300 ease-in-out"
                >
                  Education illustrations by Storyset
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://storyset.com/people"
                  className=" hover:text-white transition duration-300 ease-in-out"
                >
                  People illustrations by Storyset
                </a>
              </li>
              <li>
                <a
                  href="https://storyset.com/people"
                  className=" hover:text-white transition duration-300 ease-in-out"
                >
                  People illustrations by Storyset
                </a>
              </li>
              <li>
                <a
                  href="https://storyset.com/fun"
                  className=" hover:text-white transition duration-300 ease-in-out"
                >
                  Fun illustrations by Storyset
                </a>
              </li>
              <li><a href="https://storyset.com/people">People illustrations by Storyset</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
