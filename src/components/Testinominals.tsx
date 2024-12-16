"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Testimonials = () => {
  type Testimonial = {
    id: number;
    text: string;
    image: string;
    name: string;
    position: string;
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Rareblocks has been a great addition to our online store. They have been very helpful in finding rare coins that I have been looking for. Thank you so much for your help!",
      image: "/user1.webp",
      name: "Aavash Shrestha",
      position: "Customer Support",
    },
    {
      id: 2,
      text: "I have been using Rareblocks for about 3 months now. They have been very helpful in finding rare coins that I have been looking for. Thank you so much for your help!",
      image: "/user2.webp",
      name: "Aaryan Sharma",
      position: "Customer Support",
    },
    {
      id: 3,
      text: "I have been using Rareblocks for about 3 months now. They have been very helpful in finding rare coins that I have been looking for. Thank you so much for your help!",
      image: "/user3.webp",
      name: "Suman Sunuwar",
      position: "Customer Support",
    },
    {
      id: 4,
      text: "I have been using Rareblocks for about 3 months now. They have been very helpful in finding rare coins that I have been looking for. Thank you so much for your help!",
      image: "/user1.webp",
      name: "Prabin Shrestha",
      position: "Customer Support",
    },
    {
      id: 5,
      text: "I have been using Rareblocks for about 3 months now. They have been very helpful in finding rare coins that I have been looking for. Thank you so much for your help!",
      image: "/user1.webp",
      name: "Prabin",
      position: "Customer Support",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">
            2,157 people have said how good Rareblocks
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Our happy clients say about us
          </h2>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col bg-[#bee9e8] h-[300px] w-[290px] overflow-hidden shadow-xl mx-auto">
                  <div className="flex flex-col justify-between flex-1 p-3 bg-white lg:py-8 lg:px-7">
                    <blockquote className="mt-2">
                      <p className="text-md leading-relaxed text-gray-900">
                        {testimonial.text}
                      </p>
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
