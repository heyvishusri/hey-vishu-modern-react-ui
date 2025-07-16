import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="px-4 py-16 mx-auto max-w-7xl md:py-24"
    >
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-24">
        {/* for text left section*/}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2"
        >
          <p className="font-semibold text-emerald-500">MONITOR</p>
          <h2 className="mt-4 mb-6 text-3xl font-bold md:text-4xl text-navy-900 md:w-4/5">
            Introducing best mobile carousels
          </h2>
          <p className="mb-8 text-gray-600 md:w-4/5">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round, all
            around the world.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Learn more about monitoring
            <MdArrowRightAlt className="size-8" />
          </a>
        </motion.div>
        {/* for picture right section*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          className="w-full rounded-lg md:w-1/2"
        >
          <img
            src="/src/assets/monitor-card.webp"
            alt="Schedule"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
