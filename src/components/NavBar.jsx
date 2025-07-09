import React from "react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  // Navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-50 border-b border-grey-100 shadow-sm">
      <div class="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo sec */}
        <div class="flex items-center gap-1 cursor-pointer">
          <div class="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div class="w-4 h-4 bg-red-500 rounded-full -ml-2 opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* mobile menu bottom*/}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* destop nav-item */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full "
                    : "text-grey-600 hover:text-grey-900"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* get in touch btn */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>
      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-grey-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium  py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-grey-600 hover:text-grey-900"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors hover:shadow-lg hover:shadow-blue-100">
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
