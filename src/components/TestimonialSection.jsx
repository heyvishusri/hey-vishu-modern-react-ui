import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Alok Kumar Tiwari",
    image: "Pi7_Passport_Photo (4).jpeg",
    text: "Your landing page looks clean, modern, and responsive — great use of design and layout. Love the interactive pricing and smooth animations, just needs a few small tweaks! ✅",
  },
  {
    id: 2,
    name: "Vikas Kumar",
    image: "Vikash_pic (1).jpg",
    text: "This landing page feels premium and well-structured. The CTA sections and service highlights are exactly what our users need.",
  },
  {
    id: 3,
    name: "Sandeep Kumar Sharma",
    image: "Pi7_Passport_Photo.jpeg",
    text: "Clean design and excellent responsiveness across devices. The pricing slider is a smart touch — very user-friendly!",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl" id="testimonials">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          What our happy client say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>
      {/* testimonial cards */}

      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonial-swiper md:mb-12"
        >
          {/* swipers cards */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full py-4 md:py-12">
              <div className="flex flex-col h-full p-4 text-center bg-white rounded-lg shadow-md">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 ">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigational button */}
        <div className="flex justify-center gap-4 mt-4 md:mt-8">
          <button className="flex items-center justify-center w-12 h-12 transition-all duration-200 border border-gray-200 rounded-full cursor-pointer swiper-button-prev-custom hover:bg-blue-500 hover:text-white">
            <BsChevronLeft className="size-6" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 transition-all duration-200 border border-gray-200 rounded-full cursor-pointer swiper-button-next-custom hover:bg-blue-500 hover:text-white">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
