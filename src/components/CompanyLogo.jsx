import React from "react";
import "../App.css"; // Import the CSS file for styles
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="container flex flex-col items-start gap-8 py-20 mx-auto overflow-hidden width-full sm:flex-row sm:items-center">
      <div
        className="w-[300px] shrink-0 px-5 text-grey-600 border-l-4 border-blue-500 bg-white py-2
      z-10 sm:text-base text-xl font-semibold text-left"
      >
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Company Logo"
            className="object-contain h-8 mx-12 transition-all w-36 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
          />
        ))}
        {/* duplicate logo */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt="Company Logo"
            className="object-contain h-8 mx-12 transition-all w-36 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
