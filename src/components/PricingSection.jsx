import React from "react";
import { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);
  // calculate productPrice based on productCount
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl ">
          Pricing
        </h2>
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {/* starter plan */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl text-gray-600">Starter</h2>
            <p className="mb-6 text-3xl font-bold">${starterPrice}</p>
          </div>
          {/* business plan */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl text-gray-600">Business</h2>
            <p className="mb-6 text-3xl font-bold">${businessPrice}</p>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
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

          <div className="mt-12 text-center">
            <p className="mb-4 text-xl text-gray-600">Ready to get started?</p>
            <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
