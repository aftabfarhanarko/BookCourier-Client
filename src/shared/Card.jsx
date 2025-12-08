import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ book }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <Link
        data-aos="fade-up"
        data-aos-delay="300"
        to={`/detlicesPages/${book._id}`}
        className="max-w-sm border border-base-300 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 font-sans block"
      >
        <div className="overflow-hidden bg-base-300">
          <img
            className=" mx-auto py-4 h-40 transition-transform duration-500 ease-in-out group-hover:scale-115"
            src={book.image}
          />
        </div>
        <div className="p-5 border-t border-base-300">
          <h2
            className="text-lg font-semibold text-gray-900 mb-1 truncate"
            title={book.title}
          >
            {book.title}
          </h2>
          <p className="text-xs text-gray-600  tracking-wider font-semibold mb-1">
            Category: {book.category}
          </p>
          <p className="text-xs text-gray-700 mb-3">{book.language}</p>
          <p className="text-gray-900 font-semibold text-base mb-4">
            MRP:{" "}
            <span className="line-through text-red-500 mr-2">
             ৳ {book.price_mrp}
            </span>
            <span className="text-green-500 font-bold">
             ৳ {Math.floor(book.price_mrp * 0.85)}
            </span>
          </p>
          <button
            type="button"
            className="w-full bg-gradient-to-r from-[#C2410C] to-[#e25e0b] text-white font-semibold py-2 rounded-lg hover:from-[#e25e0b] hover:to-[#C2410C] transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
