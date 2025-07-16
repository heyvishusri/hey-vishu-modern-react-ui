import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="px-4 section-container md:px-0">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="overflow-hidden bg-blue-600 rounded-2xl"
      >
        <div className="relative px-6 py-16 md:px-16 md:py-24">
          {/* Background Gradient */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="absolute top-0 right-0 hidden w-1/2 h-full bg-blue-700 clip-path-slant md:block"
          ></motion.div>

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row md:gap-12">
            {/* Left Content */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="max-w-lg text-center text-white md:text-left"
            >
              <motion.h2
                variants={textVariant(0.3)}
                className="mb-4 text-2xl font-medium sm:text-3xl md:text-4xl"
              >
                Subscribe newsletter
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                className="text-sm text-blue-100 sm:text-base"
              >
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              className="w-full md:w-auto"
            >
              <motion.div
                variants={fadeIn("up", 0.6)}
                className="flex flex-col gap-4 sm:flex-row sm:gap-0"
              >
                <motion.input
                  variants={fadeIn("right", 0.7)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white sm:w-auto md:w-80 sm:px-6 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <motion.button
                  variants={fadeIn("left", 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white transition-colors bg-green-500 cursor-pointer sm:w-auto sm:px-8 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 sm:justify-start"
                >
                  <span>Discover</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
