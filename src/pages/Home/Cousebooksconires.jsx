import React, { useEffect } from "react";
import H1text from "../../utils/H1text";
import Ptext from "../../utils/Ptext";
import { FaUsers } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { LiaStoreSolid } from "react-icons/lia";
import { GiQuillInk } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Cousebooksconires = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <H1text>Why Choose Book Courier Library</H1text>
      <div className=" text-center mt-1.5 max-w-[690px] mx-auto">
        <Ptext>
          Trusted by customers for our reliable delivery services, Book Courier
          Library offers a rich collection of books from famous writers. With
          stores and delivery coverage across all 64 districts of Bangladesh, we
          make quality books easily accessible to readers everywhere.
        </Ptext>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  mt-15">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0   opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110">
              <FaUsers className="h-8 w-8 group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-blue-600">
              <CountUp start={0} end={125609} duration={5} />+
            </p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              Happy Customers
            </h3>

            {/* Description */}
            <p className="mt-1 text-sm leading-relaxed text-text">
              Trusted readers worldwide
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="group bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white ">
            <FaBookOpen className="text-4xl group-hover:animate-bounce" />
          </div>
          <p className="mt-4 text-3xl font-extrabold text-emerald-600">
            <CountUp start={0} end={65569} duration={5} />+
          </p>
          <h1 className="mt-2 text-lg font-bold text-gray-900">
            Book Collections
          </h1>
          <p className="mt-1 text-sm leading-relaxed text-text">
            Trusted readers worldwide
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
              <LiaStoreSolid className="text-4xl group-hover:animate-bounce" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-primary">
              <CountUp start={0} end={65569} duration={5} />+
            </p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              Our Stores
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-text">
              Available nationwide
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="group relative overflow-hidden rounded-2xl border border-base-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100  transition-all duration-300 group-hover:scale-110">
              <GiQuillInk className="text-4xl group-hover:animate-bounce text-purple-500" />
            </div>

            {/* Number */}
            <p className="mt-4 text-3xl font-extrabold text-purple-500">
              <CountUp start={0} end={600} duration={5} />+
            </p>

            {/* Title */}
            <h3 className="mt-2 text-lg font-semibold text-heading">
              Famous Writers
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-text">
              Renowned authors & creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cousebooksconires;
