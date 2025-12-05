import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import banner1 from "../../assets/bannerimg/banner1.jpg";
import banner4 from "../../assets/bannerimg/banner4.jpg";
import banner2 from "../../assets/bannerimg/banner3.jpg";
import TextType from "../../utils/TextType";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 ">
      <div className="bg-gray-200 ">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={900}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col-reverse px-5 md:px-15 md:flex-row items-center justify-between  mx-auto  py-16 gap-12 ">
              {/* Text Section */}
              <div className="md:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
                  <TextType
                    text={"Create Dynamic Banners With Elegant Animations"}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
                  <TextType
                    text={`Build beautifully animated hero sections effortlessly using React Swiper`}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </p>

                <button className="px-12 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg text-white font-semibold text-lg tracking-wide transition-transform transform hover:scale-105 hover:shadow-xl">
                  Discover More →
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={banner4}
                  alt="Banner"
                  className="w-[350px] md:w-[450px] rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse px-5 md:px-15 md:flex-row items-center justify-between  mx-auto py-16 gap-12 ">
              {/* Text Section */}
              <div className="md:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
                  <TextType
                    text={"Create Dynamic Banners With Elegant Animations"}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
                  <TextType
                    text={`Build beautifully animated hero sections effortlessly using React Swiper`}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </p>

                <button className="px-12 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg text-white font-semibold text-lg tracking-wide transition-transform transform hover:scale-105 hover:shadow-xl">
                  Discover More →
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={banner4}
                  alt="Banner"
                  className="w-[350px] md:w-[450px] rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse px-5 md:px-15 md:flex-row items-center justify-between  mx-auto  py-16 gap-12 ">
              {/* Text Section */}
              <div className="md:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
                  <TextType
                    text={"Create Dynamic Banners With Elegant Animations"}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
                  <TextType
                    text={`Build beautifully animated hero sections effortlessly using React Swiper`}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </p>

                <button className="px-12 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg text-white font-semibold text-lg tracking-wide transition-transform transform hover:scale-105 hover:shadow-xl">
                  Discover More →
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={banner2}
                  alt="Banner"
                  className="w-[350px] md:w-[450px] rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse px-5 md:px-15 md:flex-row items-center justify-between  mx-auto  py-16 gap-12 ">
              {/* Text Section */}
              <div className="md:w-1/2 space-y-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
                  <TextType
                    text={"Create Dynamic Banners With Elegant Animations"}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
                  <TextType
                    text={`Build beautifully animated hero sections effortlessly using React Swiper`}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </p>

                <button className="px-12 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg text-white font-semibold text-lg tracking-wide transition-transform transform hover:scale-105 hover:shadow-xl">
                  Discover More →
                </button>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={banner1}
                  alt="Banner"
                  className="w-[350px] md:w-[450px] rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
