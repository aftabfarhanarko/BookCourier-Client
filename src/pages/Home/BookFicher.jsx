import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextType from "../../utils/TextType";
import top1 from "../../assets/bannerimg/top1.jpg";
import top2 from "../../assets/bannerimg/top4.jpg";
import top3 from "../../assets/bannerimg/top5.jpg";
import top4 from "../../assets/bannerimg/top6.webp";

const BookFicher = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <section className=" py-12 px-6 md:px-16">
        <div className=" md:w-10/12  mx-auto flex flex-col md:flex-row  justify-between items-start md:items-center gap-10">
          {/* Left Text Content */}
          <div className="md:flex-1 max-w-xl">
            <p className=" text-primary uppercase text-xs font-semibold mb-3">
              WELCOME
            </p>
            <h2 className=" text-2xl md:text-3xl leading-tight  text-secondary font-semibold">
              <TextType
                text={"Top Selling Books in BookCourier Library"}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={false}
                // cursorCharacter="|"
              />
            </h2>

            <p className="text-gray-600 mb-6 mt-3">
              Explore the books that our readers enjoy the most. These top picks
              have been loved and bought again and again. Find your next great
              read from the crowd’s favorites!
            </p>
            {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition">
              About Us
            </button> */}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 gap-8 md:flex-1 ">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white border  border-base-300 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),0_8px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-[300px] mx-auto"
            >
              {/* Image container */}
              <div className="relative w-full h-44 overflow-hidden rounded-t-2xl group">
                {/* Tick mark */}
                <div className="absolute top-4 right-4 bg-green-600 rounded-full p-3 shadow-lg z-20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Image */}
                <img
                  src={top3}
                  alt="Product Image"
                  className="w-full h-full py-3  object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* View Now button */}
                <button
                  className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white font-semibold text-sm flex items-center justify-center rounded-t-2xl opacity-0 transition-opacity duration-300 cursor-pointer gap-2 group-hover:opacity-100"
                  onClick={() => alert("View Now clicked!")}
                  aria-label="View details"
                >
                  View Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Card content */}
              <div className="p-2 px-4 space-y-1 border-t  border-base-300">
                <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  Name: Old Man The Say
                </h1>

                <p className="text-lg font-semibold text-red-600">
                  Price: $249
                </p>
                <p className="text-yellow-500 font-semibold text-md">
                  Rating: ★★★★★☆
                </p>
                <p className="text-gray-400 text-xs tracking-wide">
                  Total Sold: 12090
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white border  border-base-300 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),0_8px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-[300px] mx-auto"
            >
              {/* Image container */}
              <div className="relative w-full h-44 overflow-hidden rounded-t-2xl group">
                {/* Tick mark */}
                <div className="absolute top-4 right-4 bg-green-600 rounded-full p-3 shadow-lg z-20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Image */}
                <img
                  src={top1}
                  alt="Product Image"
                  className="w-full py-3 h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* View Now button */}
                <button
                  className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white font-semibold text-sm flex items-center justify-center rounded-t-2xl opacity-0 transition-opacity duration-300 cursor-pointer gap-2 group-hover:opacity-100"
                  onClick={() => alert("View Now clicked!")}
                  aria-label="View details"
                >
                  View Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Card content */}
              <div className="p-2 px-4 space-y-1 border-t  border-base-300">
                <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  Name: The More
                </h1>

                <p className="text-lg font-semibold text-red-600">
                  Price: $899
                </p>
                <p className="text-yellow-500 font-semibold text-md">
                  Rating: ★★★★☆
                </p>
                <p className="text-gray-400 text-xs tracking-wide">
                  Total Sold: 3090
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="bg-white border border-base-300 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),0_8px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-[300px] mx-auto"
            >
              {/* Image container */}
              <div className="relative w-full h-44 overflow-hidden rounded-t-2xl group">
                {/* Tick mark */}
                <div className="absolute top-4 right-4 bg-green-600 rounded-full p-3 shadow-lg z-20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Image */}
                <img
                  src={top2}
                  alt="Product Image"
                  className="w-full h-full py-3  object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* View Now button */}
                <button
                  className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white font-semibold text-sm flex items-center justify-center rounded-t-2xl opacity-0 transition-opacity duration-300 cursor-pointer gap-2 group-hover:opacity-100"
                  onClick={() => alert("View Now clicked!")}
                  aria-label="View details"
                >
                  View Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Card content */}
              <div className="p-2 px-4 space-y-1  border-t  border-base-300">
                <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  Name: The Best Novels
                </h1>

                <p className="text-lg font-semibold text-red-600">
                  Price: $399
                </p>
                <p className="text-yellow-500 font-semibold text-md">
                  Rating: ★★★☆☆
                </p>
                <p className="text-gray-400 text-xs tracking-wide">
                  Total Sold: 7090
                </p>
              </div>
            </div>

            <div 
             data-aos="fade-up"
          data-aos-delay="800"
            className="bg-white border  border-base-300 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_15px_25px_rgba(0,0,0,0.15),0_8px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-[300px] mx-auto">
              {/* Image container */}
              <div className="relative w-full h-44 overflow-hidden rounded-t-2xl group">
                {/* Tick mark */}
                <div className="absolute top-4 right-4 bg-green-600 rounded-full p-3 shadow-lg z-20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Image */}
                <img
                  src={top4}
                  alt="Product Image"
                  className="w-full h-full py-3  object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* View Now button */}
                <button
                  className="absolute inset-0 bg-black/30 backdrop-blur-sm text-white font-semibold text-sm flex items-center justify-center rounded-t-2xl opacity-0 transition-opacity duration-300 cursor-pointer gap-2 group-hover:opacity-100"
                  onClick={() => alert("View Now clicked!")}
                  aria-label="View details"
                >
                  View Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Card content */}
              <div className="p-2 px-4 space-y-1 border-t  border-base-300">
                <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">
                  Name: Old Man
                </h1>

                <p className="text-lg font-semibold text-red-600">
                  Price: $249
                </p>
                <p className="text-yellow-500 font-semibold text-md">
                  Rating: ★★★★★☆
                </p>
                <p className="text-gray-400 text-xs tracking-wide">
                  Total Sold: 12090
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookFicher;
