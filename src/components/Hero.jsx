import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container flex flex-col items-center justify-between px-4 pb-6 mx-auto md:flex-row pt-44"
    >
      {/* left col */}
      <div className="w-full space-y-8 md:w-1/2">
        {/* star badge */}
        <div className="flex items-center gap-2 px-4 py-2 transition-colors rounded-full cursor-pointer bg-gray-50 w-fit hover:bg-gray-100 group">
          <span className="text-blue-600 transition-transform group-hover:text-amber-300 group-hover:scale-110">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          We boost the growth for
          <span className="relative inline-block text-blue-600">
            {" "}
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
          Companies
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>

        <p className="max-w-xl text-lg text-gray-600 md:text-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </p>

        <div className="flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 transition-all border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          ></input>
          <button className="px-8 py-4 text-white transition-all bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300">
            →
          </button>
        </div>
      </div>
      {/* right col */}
      <div className="w-full pl-0 mt-16 md:w-1/2 md:mt-0 md:pl-12">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="relative z-10 rounded-lg hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
