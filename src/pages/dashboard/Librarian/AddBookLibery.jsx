import React from "react";
import { useForm } from "react-hook-form";
import { imagesBB } from "../../../features/imagesUp";
import useAuth from "../../../hooks/useAuth";
import useAxiosSchore from "../../../hooks/useAxiosSchore";

const AddBookLibery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axioscehore = useAxiosSchore();
  const handleBook = async (book) => {
    const bookImage = book.images[0];
    const photo = await imagesBB(bookImage);
    const savedDatabase = {
      author: book.author,
      availability_status: book.availability_status,
      category: book.category,
      description: book.description,
      image: photo,
      language: book.language,
      page_count: book.page_count,
      price_mrp: book.price_mrp,
      price_sell: book.price_sell,
      publisher: book.publisher,
      rating_avg: Number(book.rating_avg),
      return_policy: book.return_policy,
      stock_qty: book.stock_qty,
      title: book.title,
      weight: Number(book.weight),
      sellerInfo: {
        sellerName: user?.displayName,
        sellerEmail: user?.email,
        sellerPhoto: user?.photoURL,
      },
    };

       axioscehore.post("book", savedDatabase).then(res => {
        console.log(res.data);
        
      })

  };
  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center px-2 md:px-4 py-12">
        <div className=" md:max-w-7xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-12 space-y-12">
          {/* ===== Header ===== */}
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold
          bg-gradient-to-r from-[#C2410C] via-[#F97316] to-[#FDBA74]
          bg-clip-text text-transparent"
            >
              📚 Add New Book for Sale
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Fill in the complete book details below
            </p>
            <div className="mt-6 h-1 w-36 mx-auto rounded bg-gradient-to-r from-[#C2410C] to-[#FDBA74] shadow-md"></div>
          </div>

          {/* ===== Form ===== */}
          <form
            onSubmit={handleSubmit(handleBook)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            encType="multipart/form-data"
          >
            {/* ===== Left Section ===== */}
            <div className="space-y-8">
              {/* Book Title */}
              <div>
                <label className="font-medium text-gray-800">
                  Book Title <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("title", { required: "Book title is required" })}
                  type="text"
                  placeholder="Introduction to Algorithms"
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.title && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Author */}
              <div>
                <label className="font-medium text-gray-800">
                  Author Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("author", {
                    required: "Author name is required",
                  })}
                  type="text"
                  placeholder="Thomas H. Cormen"
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.author && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>

              {/* Publisher */}
              <div>
                <label className="font-medium text-gray-800">Publisher</label>
                <select
                  {...register("publisher", {
                    required: "Please Set Book Stutas",
                  })}
                  className="w-full select mt-2 px-6  rounded-2xl border border-[#C2410C] shadow-md focus:outline-none focus:ring focus:ring-[#C2410C]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Book Stutas
                  </option>
                  <option value="Publish">Publish</option>
                  <option value="UnPublish">UnPublish</option>
                </select>
                {errors.publisher && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.publisher.message}
                  </p>
                )}
              </div>

              {/* Language */}
              <div>
                <label className="font-medium text-gray-800">
                  Language <span className="text-red-600">*</span>
                </label>
                <select
                  {...register("language", {
                    required: "Language is required",
                  })}
                  className="w-full select mt-2 px-6  rounded-2xl border border-[#C2410C] shadow-md focus:outline-none focus:ring focus:ring-[#C2410C]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Language
                  </option>
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                </select>
                {errors.language && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.language.message}
                  </p>
                )}
              </div>

              {/* Average Rating */}
              <div className="flex flex-col gap-3 bg-yellow-50 border border-[#C2410C] rounded-2xl p-5 shadow-md">
                <label className="text-gray-800 font-semibold text-sm">
                  Average Rating
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      value={star}
                      {...register("rating_avg")}
                      className="mask mask-star-2 bg-yellow-400 cursor-pointer"
                    />
                  ))}
                  <span className="text-[#C2410C] font-semibold text-sm ml-2">
                    Rate the book
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Select a rating from 1 to 5 stars
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="font-medium text-gray-800">
                  Category <span className="text-red-600">*</span>
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full select mt-2 px-6  rounded-2xl border border-[#C2410C] shadow-md focus:outline-none focus:ring focus:ring-[#C2410C]"
                  defaultValue=""
                >
                  <option value="Programming">Programming</option>
                  <option value="Academic">Academic</option>
                  <option value="Novel">Novel</option>
                  <option value="Story">Story</option>
                  <option value="Business">Business</option>
                  <option value="Religious">Religious</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="History">History</option>
                  <option value="Poetry">Poetry</option>
                </select>
                {errors.category && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="font-medium text-gray-800">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Short summary about the book....."
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C] min-h-[140px]"
                ></textarea>
                {errors.description && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Page Count */}
              <div>
                <label className="font-medium text-gray-800">
                  Page Count <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("page_count", {
                    required: "Page count is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={1}
                  placeholder="730...."
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.page_count && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.page_count.message}
                  </p>
                )}
              </div>

              {/* Weight */}
              <div>
                <label className="font-medium text-gray-800">
                  Weight (grams)
                </label>
                <input
                  {...register("weight", {
                    required: "Please Provied Book Weight",
                  })}
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="e.g. 500"
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-sm focus:ring focus:ring-[#C2410C]"
                />
                {errors.weight && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.weight.message}
                  </p>
                )}
              </div>
            </div>

            {/* ===== Right Section ===== */}
            <div className="space-y-8">
              {/* Price MRP */}
              <div>
                <label className="font-medium text-gray-800">
                  Price <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("price_mrp", {
                    required: "MRP price is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={0}
                  placeholder="$ Set Price..."
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.price_mrp && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.price_mrp.message}
                  </p>
                )}
              </div>

              {/* Selling Price */}
              <div>
                <label className="font-medium text-gray-800">
                  Selling Price <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("price_sell", {
                    required: "Selling price is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={0}
                  placeholder="$ Selling price...."
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.price_sell && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.price_sell.message}
                  </p>
                )}
              </div>

              {/* Stock Quantity */}
              <div>
                <label className="font-medium text-gray-800">
                  Stock Quantity <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("stock_qty", {
                    required: "Stock quantity is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  min={0}
                  placeholder="12"
                  className="w-full mt-2 px-6 py-4 rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                />
                {errors.stock_qty && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.stock_qty.message}
                  </p>
                )}
              </div>

              {/* Availability Status */}
              <div>
                <label className="font-medium text-gray-800">
                  Availability Status <span className="text-red-600">*</span>
                </label>
                <select
                  {...register("availability_status", {
                    required: "Availability status is required",
                  })}
                  className="w-full select mt-2 px-6  rounded-2xl border border-[#C2410C] shadow-md focus:ring focus:ring-[#C2410C]"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Preorder">Preorder</option>
                </select>
                {errors.availability_status && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.availability_status.message}
                  </p>
                )}
              </div>

              {/* Return Policy */}
              <div>
                <label className="font-medium text-gray-800">
                  Return Policy
                </label>
                <textarea
                  {...register("return_policy")}
                  defaultValue="Customers can return the book within 7 days of receiving it"
                  className="w-full mt-2 px-6  py-4 rounded-2xl border  shadow-sm focus:ring focus:ring-[#C2410C]  focus:outline-none border-[#C2410C] min-h-[120px]"
                ></textarea>
              </div>

              {/* Images Upload */}
              <div className="border-2 border-dashed border-[#C2410C] rounded-2xl p-8 text-center bg-yellow-50 cursor-pointer hover:scale-105 transition">
                <label className="cursor-pointer w-full block">
                  <input
                    {...register("images", { required: true })}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <p className="font-semibold hover:underline text-[#C2410C] text-lg">
                    Click here to upload book images (minimum 1)
                  </p>
                </label>
                {errors.images && (
                  <p className="text-red-600 mt-2 text-sm font-semibold">
                    Please upload at least one image
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#C2410C] to-[#FDBA74] shadow-xl hover:shadow-2xl active:scale-95 transition"
              >
                Publish Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookLibery;
