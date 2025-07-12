import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const ScheduleSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl md:py-16">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-24">
        {/* for picture left section*/}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/stats.webp"
            alt="Schedule"
            className="w-full h-auto"
          />
        </div>
        {/* for text right section*/}
        <div className="w-full md:w-1/2">
          <p className="font-semibold text-orange-500">SCHEDULE</p>
          <h2 className="mt-4 mb-6 text-3xl font-bold md:text-4xl text-navy-900">
            Streamline Your Business With Smart Scheduling Solutions
          </h2>
          <p className="mb-8 text-gray-600">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Explore scheduling features
            <MdArrowRightAlt className="size-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
