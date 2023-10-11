import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineProject } from "react-icons/ai"; // Example icon, you can choose a different one
import Link from "next/link";

const Projects = ({ productsData }) => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Introduce a short delay before showing the cards
    const delay = setTimeout(() => {
      setShowCards(true);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="h-screen pt-24 ">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold mb-6 bg-[#A9A4DE] p-4 rounded-2xl text-white uppercase  ">
          Our Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 ">
        {showCards &&
          productsData.map((product) => (
            <Link href={`/products/${product.title}`} key={product._id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="card"
              >
                <div className="p-6 ">
                  <img src={product.imageURLs[0]} alt={product.title} />
                  <p className="text-xl uppercase  font-bold text-gray-900 flex justify-center items-center">
                    <AiOutlineProject /> {product.title}
                  </p>
                </div>
                <div className="card__content">
                  <p className="card__title">{product.title}</p>
                  <p className="card__description">{product.shortDescription}</p>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Projects;
