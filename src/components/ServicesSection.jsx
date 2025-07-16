import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container px-4 py-20 mx-auto sm:px-6 lg:px-8"
      id="services"
    >
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row lg:gap-24">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/3"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 bg-indigo-100 rounded-full">
                <div className="flex items-center justify-center w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span>UX design content strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 bg-indigo-100 rounded-full">
                <div className="flex items-center justify-center w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span>UX design content strategy</span>
            </div>
          </div>
          <div>
            <button className="px-8 py-3 mt-8 text-white transition-colors bg-indigo-600 rounded-full cursor-pointer hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </motion.div>
        {/* services Card */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 bg-white cursor-pointer max-w-72 rounded-2xl hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <a
                href={service.link}
                className="font-medium text-indigo-600 transition-colors hover:text-indigo-700"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
