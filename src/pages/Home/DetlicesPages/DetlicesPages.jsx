import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import { motion } from "framer-motion";
import { GoDuplicate } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import LoadingSpinner from "../../../shared/LoadingSpinner ";
import TextType from "../../../utils/TextType";

const DetlicesPages = () => {
  const { id } = useParams();
  const axioscehore = useAxiosSchore();

  // Load Single Book
  const { data: book = {}, isLoading: newLoding } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axioscehore.get(`/oneBooks/${id}`);
      return res.data;
    },
  });

  // Load Related Books
  const { data: relatedBooks = [], isLoading } = useQuery({
    queryKey: ["related", book?.category],
    enabled: !!book?.category,
    queryFn: async () => {
      const res = await axioscehore.get(
        `catogryfinde?category=${book?.category}`
      );
      return res.data;
    },
  });
  console.log(relatedBooks);

  if (isLoading || newLoding) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="bg-gray-100 min-h-screen pb-20 mt-11">
      <div className=" h-10"></div>

      <div className="max-w-7xl mx-auto  px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* -------------------------------- 
             LEFT IMAGE
        -------------------------------- */}
        <div className="md:col-span-4 bg-white p-12 rounded-lg shadow  top-24 h-max">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={book?.image}
            className="w-full h-[450px] object-cover rounded-lg  shadow-md"
          />
        </div>

        <div
          className="
    md:col-span-5 
    bg-white/90 backdrop-blur-md 
    p-7 rounded-lg   
    shadow-[0_4px_22px_rgba(0,0,0,0.08)]
    border border-gray-200
    space-y-5
    flex flex-col

    justify-center 
  "
        >
          <div className=" space-y-4">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 leading-snug text-left">
              {book?.title}
            </h1>

            {/* Author */}
            <p className="text-gray-600 text-lg text-left">
              by{" "}
              <span className="font-medium text-gray-800">{book?.author}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-[#FACC15] font-medium text-left">
              ⭐ {book?.rating_avg}/5
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-2 text-left">
              <span className="text-4xl font-extrabold text-[#C2410C]">
                ৳ {book?.price_sell}
              </span>

              <span className="line-through text-gray-400 text-lg">
                ৳ {book?.price_mrp}
              </span>

              <span
                className="
        text-sm px-3 py-1 rounded-xl 
        bg-gradient-to-r from-red-500 to-rose-500 
        text-white shadow
      "
              >
                {Math.round(
                  ((book.price_mrp - book.price_sell) / book.price_mrp) * 100
                )}
                % OFF
              </span>
            </div>

            {/* Stock */}
            <p className="text-green-600 font-semibold text-base text-left">
              ✔ In Stock ({book?.stock_qty})
            </p>

            {/* Actions */}
            <div className="flex gap-1 md:gap-4 pt-3">
              {/* Buy Now */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
        flex items-center md:gap-2
        px-7 py-2.5 
        text-white font-medium
        rounded-xl shadow 
        bg-[#C2410C]
        hover:bg-[#a8370b]
        transition-all
      "
              >
                <span>🛒</span> Order Now
              </motion.button>

              {/* Add to Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
        flex items-center gap-2
        px-7 py-2.5 
        border-2 border-[#C2410C] 
        text-[#C2410C] font-semibold 
        rounded-xl 
        hover:bg-[#FFF4F1]
        transition-all
      "
              >
                <span>➕</span> Add to Cart
              </motion.button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-5 top-24 h-max">
          {/* CATEGORY */}
          <div
            className="
      bg-white/80 backdrop-blur-md p-5 
      rounded-lg  border border-gray-200 
      shadow-[0_4px_18px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)]
      transition-all duration-300
    "
          >
            <h3 className="font-semibold mb-3 flex items-center gap-3 text-gray-800 text-lg">
              <span className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow">
                <GoDuplicate size={18} />
              </span>
              Category
            </h3>

            <p className="text-gray-600 ml-1">{book?.category}</p>
          </div>

          {/* LANGUAGE */}
          <div
            className="
      bg-white/80 backdrop-blur-md p-5 
      rounded-lg  border border-gray-200 
      shadow-[0_4px_18px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)]
      transition-all duration-300
    "
          >
            <h3 className="font-semibold mb-3 flex items-center gap-3 text-gray-800 text-lg">
              <span className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow">
                <GrLanguage size={18} />
              </span>
              Language
            </h3>

            <p className="text-gray-600 ml-1">{book?.language}</p>
          </div>

          {/* PUBLISHER */}
          <div
            className="
      bg-white/80 backdrop-blur-md p-5 
      rounded-lg  border border-gray-200 
      shadow-[0_4px_18px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)]
      transition-all duration-300
    "
          >
            <h3 className="font-semibold mb-3 flex items-center gap-3 text-gray-800 text-lg">
              <span className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow">
                <MdOutlinePublishedWithChanges size={18} />
              </span>
              Publisher
            </h3>

            <p className="text-gray-600 ml-1">{book?.publisher}</p>
          </div>
          {/* BOOK TAGS */}
          <div
            className="
    bg-white/80 backdrop-blur-md p-5 
    rounded-lg  border border-gray-200 
    shadow-[0_4px_18px_rgba(0,0,0,0.05)]
    hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)]
    transition-all duration-300
  "
          >
            <h3 className="font-semibold mb-3 flex items-center gap-3 text-gray-800 text-lg">
              <span className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow">
                🏷️
              </span>
              Tags
            </h3>

            <p className="text-gray-600 ml-1">{book?.tags || "New Tags"}</p>
          </div>
        </div>

        <div
          className="
    md:col-span-12 
    bg-white/80 
    backdrop-blur-md 
    p-6 md:p-8 
   rounded-lg 
    border border-gray-200 
   
    transition-all duration-300
  "
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Description
          </h2>

          <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px]">
            {book?.description}
          </p>
        </div>

        <div className="md:col-span-12 grid md:grid-cols-2 gap-5">
          <div
            className="
    bg-white/80 backdrop-blur-md 
    p-5 md:p-6 
    rounded-lg  
    shadow-[0_4px_20px_rgba(0,0,0,0.06)]
    border border-gray-200
    hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)]
    transition-all duration-300
  "
          >
            <h2 className="text-xl font-semibold mb-5 text-gray-800">
              Book Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {/* Pages */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-base-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                  📄
                </div>
                <p className="text-gray-700">
                  <strong>Pages:</strong> {book?.page_count}
                </p>
              </div>

              {/* Weight */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-base-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  ⚖️
                </div>
                <p className="text-gray-700">
                  <strong>Weight:</strong> {book?.weight} gm
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-base-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                  🔰
                </div>
                <p className="text-gray-700">
                  <strong>Status:</strong> {book?.availability_status}
                </p>
              </div>

              {/* Created */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-base-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                  🗓️
                </div>
                <p className="text-gray-700">
                  <strong>Created:</strong>{" "}
                  {new Date(book?.creatAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div
            className="
    bg-white/80 backdrop-blur-md 
    p-5 md:p-6 
    rounded-lg 
    shadow-[0_4px_20px_rgba(0,0,0,0.06)]
    border border-gray-200
    hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)]
    transition-all duration-300
  "
          >
            <h2 className="text-xl font-semibold mb-5 text-gray-800 flex items-center gap-2">
              🛒 Seller Information
            </h2>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-base-300">
              <img
                src={book?.sellerInfo?.sellerPhoto}
                className="w-16 h-16 rounded-full object-contain shadow-md border  border-gray-400"
              />
              <div>
                <p className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                  <span className="text-xl">👤</span>
                  {book?.sellerInfo?.sellerName}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  ✉️ {book?.sellerInfo?.sellerEmail}
                </p>
              </div>
            </div>

            <div className="mt-5 p-4 bg-gray-50 rounded-xl border flex gap-3 border-base-300">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                📦
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {book?.return_policy}
              </p>
            </div>
          </div>
        </div>

        {/* Related Book */}
        <div className="md:col-span-12 mt-10">
          <h2 className=" text-2xl md:text-3xl leading-tight lg:text-4xl text-secondary font-semibold">
            <TextType
              text={"Related Category Books "}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2000}
              loop={false}
              showCursor={false}
            />
          </h2>
          <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedBooks.map((item) => (
              <Link
                key={item._id}
                to={`/detlicesPages/${item._id}`}
                className="
        group 
        bg-white 
        rounded-3xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        p-4 
        transition-all 
        duration-300 
        border border-gray-100
        hover:-translate-y-1
        flex flex-col
      "
              >
                {/* Image */}
                <div className="relative w-full h-60 overflow-hidden rounded-2xl">
                  <img
                    src={item?.image}
                    className="
            w-full h-full object-cover 
            transition-transform duration-300 
            group-hover:scale-105
          "
                  />

                  {/* Gradient overlay */}
                  <div
                    className="
          absolute inset-0 
          bg-gradient-to-t from-black/20 to-transparent 
          opacity-0 group-hover:opacity-100 
          rounded-2xl
          transition-opacity duration-300
        "
                  ></div>

                  {/* Stock Badge */}
                  <span
                    className="
          absolute top-2 left-2 
          bg-green-600 text-white text-xs 
          px-2 py-1 rounded-full shadow
        "
                  >
                    {item.availability_status || "In Stock"}
                  </span>
                </div>

                {/* Info */}
                <div className="mt-3 flex flex-col flex-1 justify-between">
                  {/* Title */}
                  <p
                    className="
          text-sm font-semibold line-clamp-2
          group-hover:text-purple-600
        "
                  >
                    {item.title}
                  </p>

                  {/* Author & Category */}
                  <p className="text-xs text-gray-500 mt-1">{item.author}</p>
                  <p className="text-[11px] text-gray-400">{item.category}</p>

                  {/* Price & Rating */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-green-600">
                        ৳ {item.price_sell}
                      </span>
                      <span className="text-[11px] line-through text-gray-400">
                        ৳ {item.price_mrp}
                      </span>
                    </div>
                    <p className="text-[11px] text-yellow-500 font-medium">
                      ⭐ {item.rating_avg || 0} / 5
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetlicesPages;
