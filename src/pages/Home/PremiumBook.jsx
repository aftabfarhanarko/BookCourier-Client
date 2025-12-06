import React, { useEffect } from "react";
import H1text from "../../utils/H1text";
import Ptext from "../../utils/Ptext";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { GiBookmarklet } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";

const PremiumBook = () => {
    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, 
  });
}, []);
  return (
    <div>
      <H1text>Premium Book Collections</H1text>
      <div className=" text-center mt-3 max-w-[450px] mx-auto">
        {" "}
        <Ptext>
          Discover a curated selection of premium books designed to inspire
          knowledge, learning, and growth.
        </Ptext>
      </div>
      {/* Primume Book Card Name */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  mt-15">

        <div 
         data-aos="fade-up" data-aos-delay="200"
        className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
              <GiBookmarklet className="h-6 w-6 group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-primary">7000+</p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              Technology & Programming
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-text">
              Explore a curated collection of books on modern technology,
              programming languages, and software development.
            </p>
          </div>
        </div>

        <div 
        data-aos="fade-up" data-aos-delay="400"
        className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
              <FaBookReader className="h-6 w-6 group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-primary">600+</p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              History & Biography
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-text">
              Explore the rich past through real stories of remarkable people
              who shaped human history of Biography{" "}
            </p>
          </div>
        </div>

        <div 
        data-aos="fade-up" data-aos-delay="600"
        className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
              <FaBookAtlas className="h-6 w-6 group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-primary">900+</p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              Lives That Changed the World
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-text">
            Discover inspiring stories of extraordinary individuals whose  vision, and courage transformed societies, cultures, and the course of World.
            </p>
          </div>
        </div>

        <div 
        data-aos="fade-up" data-aos-delay="800"
        className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
              <GiSpellBook className="h-6 w-6 group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-primary">5060+</p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              A Collection of Stories
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-text">
              Immerse yourself in captivating stories filled with emotion,
              wisdom, adventure, and life lessons from diverse cultures and
              times.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default PremiumBook;
