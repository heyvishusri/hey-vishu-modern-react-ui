import scheduleImage from "../assets/stats.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="px-4 py-16 mx-auto max-w-7xl md:py-24"
    >
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-24">
        {/* Left side - Image */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.img
            variants={fadeIn("up", 0.4)}
            src={scheduleImage}
            alt="Statistics dashboard"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="font-semibold text-orange-500"
          >
            SCHEDULE
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="mt-4 mb-6 text-3xl font-bold md:text-4xl text-navy-900"
          >
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.6)} className="mb-8 text-gray-600">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Explore scheduling features
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
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
