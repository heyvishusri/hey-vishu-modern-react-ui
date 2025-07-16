import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "swiper/css";
import "swiper/css/navigation";
import monitorCardBg from "../assets/monitor-card.webp";

const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-4 py-16 mx-auto max-w-7xl md:py-24"
    >
      <div className="flex flex-col items-center gap-12 md:flex-row">
        {/* Left side - Content */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="font-semibold text-emerald-500"
          >
            MONITOR
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="mt-4 mb-6 text-3xl font-bold md:text-4xl text-navy-900 md:w-4/5"
          >
            Introducing best mobile carousels
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="mb-8 text-gray-600 md:w-4/5"
          >
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round, all
            around the world.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Learn more about monitoring
            <motion.svg
              variants={fadeIn("left", 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Right side - Swiper with background */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="relative w-full md:w-1/2"
        >
          <motion.div variants={fadeIn("up", 0.4)} className="p-4">
            <motion.img
              variants={fadeIn("up", 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
