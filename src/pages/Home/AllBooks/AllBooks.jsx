import React, { useRef, useState } from "react";
import H1text from "../../../utils/H1text";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import Card from "../../../shared/Card";
import TextType from "../../../utils/TextType";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AllBooks = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [search , setSearch] = useState("");
  //   Pasitionse
  const [page, setPage] = useState(1);
  const [allBook, setAllBook] = useState(0);
  const limit = 10;
  const skip = (page - 1) * limit;
  const totalPage = Math.ceil(allBook / limit);

  const axioscehore = useAxiosSchore();
  const {
    data: books,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Publish", "In Stock", page, search, selectedPrice],
    queryFn: async () => {
      const res = await axioscehore.get(
        `allbooks?one=Publish&tow=In Stock&limit=${limit}&skip=${skip}&search=${search}&sortnow=${selectedPrice}`
      );
      setAllBook(res.data.counts);
      refetch();
      return res.data.result;
    },
  });

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
    // console.log("Selected:", event.target.value);
  };

  console.log(search);
  console.log(selectedPrice);

  const handelSeawdg = (e) => {
    e.preventDefault();
    setSelectedPrice(e.target.search.value)

  }
  

  if (isLoading) return <h1>Loding......</h1>;
  return (
    <div className=" w-11/12 mx-auto">
      <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-secondary leading-tight">
          All Books ({allBook})
        </h1>

        {/* Right side: Search + Sort */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
          {/* Search */}
          <label className="relative w-full max-w-md md:max-w-xs">
            <IoMdSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400"></IoMdSearch>

            <input
            onChange={handelSeawdg}
              type="search"
              required
              name="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />
          </label>

          {/* Sort Dropdown */}
          <fieldset className="w-full max-w-xs">
            <select
              onChange={handleChange}
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            >
              <option value="" disabled>
                Price Search
              </option>
              <option value="100">$50 - $100</option>
              <option value="200">$100 - $200</option>
              <option value="300">$300 - $400</option>
              <option value="400">$400 - $500</option>
              <option value="500">$600 - $700</option>
              <option value="600">$800 - $900</option>
              <option value="700">$1000 - $1000</option>
              <option value="800">$1100 - $1200</option>
            </select>
          </fieldset>
        </div>
      </div>
      <div className=" grid mx-auto  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-15">
        {books.map((book) => (
          <Card key={book._id} book={book}></Card>
        ))}

        <div></div>
      </div>

      {/* Pasitions */}
      <div className="flex justify-between items-center px-6 py-4 mt-7 bg-white  border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`flex items-center gap-2 px-4 py-1 rounded-lg font-medium transition ${
            page === 1
              ? "text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white hover:opacity-90"
          }`}
        >
          <FaArrowLeftLong /> Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPage }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition ${
                page === i + 1
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-50 hover:via-purple-50 hover:to-blue-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className={`flex items-center gap-2 px-4 py-1 rounded-lg font-medium transition ${
            page === totalPage
              ? "text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white hover:opacity-90"
          }`}
        >
          Next <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
