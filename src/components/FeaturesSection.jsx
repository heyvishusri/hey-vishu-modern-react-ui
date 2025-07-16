import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="px-4 py-16 mx-auto max-w-7xl"
      id="about"
    >
      {/* heading text */}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">
          How can we help your business?
        </h2>
        <p className="text-gray-600 ">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/*  features box*/}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div
              className="flex items-center justify-center w-24 h-24 mb-6 rounded-full"
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "#F1EFFD"
                    : index === 1
                    ? "#FEE7E7"
                    : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="mb-3 text-2xl font-medium">{feature.title}</h3>
            <p className="text-center text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
      {/*  buttom*/}
      <div className="mt-12 text-center ">
        <button className="relative px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700">
          Become a partner
          <div className="absolute top-0 left-0 w-full h-full rounded-full -z-10 bg-blue-600/50 blur-xl"></div>
        </button>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
