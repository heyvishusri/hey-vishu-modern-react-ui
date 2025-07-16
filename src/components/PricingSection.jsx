import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);
  // calculate productPrice based on productCount
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          className="mb-16 text-3xl font-bold text-center md:text-4xl "
        >
          Pricing
        </motion.h2>
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {/* starter plan */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-4 text-xl text-gray-600">Starter</h2>
            <p className="mb-6 text-3xl font-bold">${starterPrice}</p>
          </motion.div>
          {/* business plan */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-4 text-xl text-gray-600">Business</h2>
            <p className="mb-6 text-3xl font-bold">${businessPrice}</p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          className="max-w-xl mx-auto"
        >
          <p className="mb-4 text-center text-gray-600">
            {productCount} Products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 sm:text-sm">1</span>
              <input
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs text-gray-600 sm:text-sm">50</span>
            </div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            className="mt-12 text-center"
          >
            <p className="mb-4 text-xl text-gray-600">Ready to get started?</p>
            <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
