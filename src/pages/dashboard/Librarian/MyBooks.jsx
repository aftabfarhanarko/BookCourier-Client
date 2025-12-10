import React, { useRef } from "react";
import LoadingSpinner from "../../../shared/LoadingSpinner ";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import TextType from "../../../utils/TextType";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { imagesBB } from "../../../features/imagesUp";

const MyBooks = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const reafernc = useRef();
  const axioscehore = useAxiosSchore();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axioscehore.get(
        `liberin-add-books?email=${user?.email}`
      );
      console.log(res);
      return res.data;
    },
  });

  // console.log(data);
  const handelEditNow = () => {
    reafernc.current.showModal();
  };
  const handelEditesForm = async (newItem) => {
    const photo = newItem.images[0];
    const imagesLink = await imagesBB(photo);

    const updeatBookInfo = {
      title: newItem.title || data.title,
      availability_status:
        newItem.availability_status || data.availability_status,
      description: newItem.description || data.description,
      image: imagesLink || data.image,
      price_mrp: newItem.price_mrp || data.price_mrp,
      price_sell: newItem.price_sell || data.price_sell,
      publisher: newItem.publisher || data.publisher,
      stock_qty: newItem.stock_qty || data.stock_qty,
      updeateTime: new Date().toISOString(),
    };

    console.log(updeatBookInfo);
  };


  if (isLoading || isFetching || !user?.email)
    return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1 className=" text-2xl md:text-3xl leading-tight text-secondary font-semibold">
        <TextType
          text={` My Post All Books`}
          typingSpeed={70}
          deletingSpeed={40}
          pauseDuration={2000}
          loop={false}
          showCursor={false}
        />
      </h1>

      <div className=" px-6">
        <div className="overflow-x-auto mt-10  rounded-box border border-base-300  shadow bg-base-100">
          <table className="table  ">
            <thead className=" bg-base-300">
              <tr>
                <th className="p-4">Srl</th>
                <th className="p-4">Image</th>
                <th className="p-4">Language</th>
                <th className="p-4">Author</th>
                <th className="p-4">Publisher</th>
                <th className="p-4">Page Count</th>
                <th className="p-4"> Sell Price</th>
                <th className="p-4">Stock Qty</th>
                <th className="p-4">Weight</th>
                <th className="p-4">Rating Avg</th>
                <th className="p-4">Creat Time</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-base-200">
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={item?.image}
                      className="w-13 h-20"
                      alt="book"
                    ></img>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      {item.language}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-purple-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {item.author}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`flex items-center gap-2 ${
                        item.publisher === "Publish"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      {item.publisher}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-indigo-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        <path d="M8 7h8M8 11h6" />
                      </svg>
                      {item.page_count}
                    </div>
                  </td>
                  <td>
                    <div className=" gap-0 not-only:">
                      <span className="w-4 h-4 text-green-600">
                        ৳ {item.price_sell}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-amber-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                      {item.stock_qty || "0"}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      {item.weight || "200"}g
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {item.rating_avg || 0} / 5
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {new Date(item.creatAt).toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className=" flex  items-center gap-2">
                      {/* Edit Button */}
                      <button
                        onClick={handelEditNow}
                        className="bg-gradient-to-br from-orange-400 to-orange-600 text-white font-semibold px-3 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>

                      {/* Delete Button
                      <button
                        onClick={() => handelDeletNow(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        Delete
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edite Er kaj Baki */}
      <dialog ref={reafernc} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(handelEditesForm)}
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
                  {...register("title")}
                  type="text"
                  // defaultValue={data.title}
                  placeholder="Introduction to Algorithms"
                  className="w-full mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none"
                />
              </div>

              {/* Publisher */}
              <div>
                <label className="font-medium text-gray-800">Publisher</label>
                <select
                  {...register("publisher")}
                  className="w-full select mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Book Stutas
                  </option>
                  <option value="Publish">Publish</option>
                  <option value="UnPublish">UnPublish</option>
                </select>
              </div>

              {/* Availability Status */}
              <div>
                <label className="font-medium text-gray-800">
                  Availability Status <span className="text-red-600">*</span>
                </label>
                <select
                  {...register("availability_status")}
                  className=" select w-full mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  {/* <option value="Preorder">Preorder</option> */}
                </select>
              </div>

              {/* Images Upload */}
              <div className="border-2 border-dashed border-[#C2410C] rounded-2xl p-4 text-center bg-yellow-50 cursor-pointer hover:scale-105 transition">
                <label className="cursor-pointer w-full block">
                  <input
                    {...register("images")}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <p className="font-semibold hover:underline text-[#C2410C] text-xs">
                    Click here to Edit book images (minimum 1)
                  </p>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 rounded-full font-bold text-md text-white bg-gradient-to-r from-[#C2410C] to-[#FDBA74] shadow-xl hover:shadow-2xl active:scale-95 transition"
              >
                Edit Book Complete
              </button>
            </div>

            {/* ===== Right Section ===== */}
            <div className="space-y-8">
              {/* Price MRP */}
              <div>
                <label className="font-medium text-gray-800">
                  Price <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("price_mrp")}
                  type="number"
                  min={0}
                  placeholder="$ Set Price..."
                  className="w-full mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none"
                />
              </div>

              {/* Selling Price */}
              <div>
                <label className="font-medium text-gray-800">
                  Selling Price <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("price_sell")}
                  type="number"
                  min={0}
                  placeholder="$ Selling price...."
                  className="w-full mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none "
                />
              </div>

              {/* Stock Quantity */}
              <div>
                <label className="font-medium text-gray-800">
                  Stock Quantity <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("stock_qty")}
                  type="number"
                  min={0}
                  placeholder="edite now"
                  className="w-full mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none"
                />
              </div>
              {/* Description */}
              <div>
                <label className="font-medium text-gray-800">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Short summary about the book....."
                  className="w-full  mt-2 px-6 py-2 rounded-2xl  border-2 border-orange-400  focus:outline-none min-h-[140px]"
                ></textarea>
              </div>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-red-500 ml-4 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-xl">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyBooks;
