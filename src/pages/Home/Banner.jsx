import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import TextType from "../../utils/TextType";

import bnner1 from "/newfullbanner.jpg";
import bnner2 from "/public/newfullbanner2.jpg";
import bnner3 from "/public/newbanner3.jpg";

const Banner = () => {
  const [typedDone, setTypedDone] = React.useState(false);

  return (
    <div className=" ">
      <div className=" ">
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
            <div
              className="relative flex flex-col items-center justify-center text-center px-5 md:px-15 py-16 gap-6 mx-auto h-[700px] bg-center bg-cover"
              style={{ backgroundImage: `url(${bnner1})` }}
            >
              {/* Overlay: full div with black bg and opacity */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content - make sure this is above the overlay */}
              <div className="relative z-10">
  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md min-h-[4.5rem]">
  <TextType
    text={"Create Dynamic Banners With Elegant Animations"}
    typingSpeed={70}
    deletingSpeed={40}
    pauseDuration={2000}
    loop={true}
    showCursor={false}
    cursorCharacter="|"
  />
</h1>

  <div>
    <p className="text-lg md:text-xl my-4 text-white max-w-lg font-medium leading-relaxed">
      Build beautifully animated hero sections effortlessly using React Swiper
    </p>

    <button className="px-12 py-2.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg text-white font-semibold text-lg tracking-wide transition-transform transform hover:scale-105 hover:shadow-xl">
      Discover More →
    </button>
  </div>
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
