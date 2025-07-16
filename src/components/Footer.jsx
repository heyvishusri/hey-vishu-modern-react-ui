import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 -ml-2 bg-red-500 rounded-full"></div>
              <span className="ml-1 text-xl font-medium">The Next Design</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              className="mb-6 text-gray-600"
            >
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.7)} className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/vishwas.vishwaskumar.129"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/sriwastaw51186"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/vishwash-kumar-104661266/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-gray-200 rounded-full hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={fadeIn("up", 0.3 * (categoryIndex + 1))}
                  >
                    <motion.h3
                      variants={textVariant(0.2)}
                      className="mb-4 text-lg font-medium"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.h3>
                    <motion.ul
                      variants={fadeIn("up", 0.4)}
                      className="space-y-3"
                    >
                      {links.map((link, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn("up", 0.1 * (index + 1))}
                        >
                          <motion.a
                            whileHover={{ x: 5 }}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="pt-8 mt-12 border-t border-gray-200"
        >
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <motion.p
              variants={fadeIn("right", 1.0)}
              className="text-sm text-gray-600"
            >
              Copyright © {new Date().getFullYear()} Coding Avengers ⎊⍟
            </motion.p>
            <motion.p
              variants={fadeIn("left", 1.0)}
              className="text-sm text-gray-600"
            >
              Created by heyvishusri
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
