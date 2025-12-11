import React, { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import {
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import LoadingSpinner from "../../../shared/LoadingSpinner ";
import TextType from "../../../utils/TextType";
import { Link } from "react-router";
import InfoCard from "./InfoCard";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "sonner";

const Profile = () => {
  const { user } = useAuth();
  const references = useRef();
  const axioscehore = useAxiosSchore();
  const { handleSubmit, register, reset } = useForm();

  const {
    data: usersas,
    refetch,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["profile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axioscehore.get(
        `loginRealTimerUser?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handelUpdeatProfile = () => {
    console.log("Profile");
    references.current.showModal();
  };

  const handelProfileUpdeat = async (neawsa) => {
    let upphotos;
    // check if user uploaded new image
    if (neawsa.images && neawsa.images.length > 0) {
      // only upload when new photo exists
      const photo = neawsa.images[0];
      const formData = new FormData();
      formData.append("image", photo);

      const { data } = await axios.post(
        import.meta.env.VITE_IMAGESUPDEAT_API_URL,
        formData
      );

      upphotos = data?.data?.display_url;
    } else {
      // no new image → use old one
      upphotos = usersas.photoURL;
    }
    const updetProdileUser = {
      email: neawsa.email,
      displayName: neawsa.displayName,
      photoURL: upphotos,
      profileUpdeatTime: new Date().toISOString(),
    };

    const res = await axioscehore.patch(
      `updeatCustomerProfile/${usersas?._id}?email=${usersas?.email}`,
      updetProdileUser
    );

    if (res.data.acknowledged) {
      refetch();
      reset();
      references.current.close();
      toast.success("Your Profile Updeat Successfully");
    }

    console.log(res.data);

    console.log(updetProdileUser);
  };

  console.log(usersas?._id);

  if (isLoading || isFetching) return <LoadingSpinner />;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10
      bg-gradient-to-br from-orange-50 via-slate-50 to-amber-50
      "
    >
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div
          className="bg-white dark:bg-[#262626]
          rounded-[28px]
          border border-orange-100 dark:border-[#3a3a3a]
          shadow-xl hover:shadow-2xl
          transition-all duration-300 overflow-hidden"
        >
          {/* Cover */}
          <div className="relative h-36 bg-gradient-to-r from-[#C2410C] to-orange-500">
            <div className="absolute -bottom-16 left-8">
              <img
                src={usersas?.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover
                ring-4 ring-white dark:ring-[#262626]
                shadow-lg transition hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 px-8 pb-8">
            {/* Header */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-gray-100">
                  <TextType
                    text={usersas?.displayName || "User Name"}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                  />
                </h1>

                <p className="mt-2 text-sm flex items-center gap-2 text-slate-500 dark:text-gray-300">
                  <FaEnvelope className="text-[#C2410C]" />
                  {usersas?.email}
                </p>
              </div>

              {/* Role */}
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                text-sm font-medium border
                ${
                  usersas?.role === "admin"
                    ? "bg-orange-100/70 text-[#C2410C] border-orange-300 dark:bg-[#3a2418] dark:border-[#5a3a26]"
                    : usersas?.role === "librarian"
                    ? "bg-amber-100/70 text-amber-700 border-amber-300 dark:bg-[#393116] dark:border-[#5a4d1f]"
                    : "bg-green-100/70 text-green-700 border-green-300 dark:bg-[#1f3a2a] dark:border-[#29503a]"
                }`}
              >
                <FaUserShield />
                {usersas?.role}
              </span>
            </div>

            <div className="my-6 border-t border-gray-200 dark:border-[#3a3a3a]" />

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard
                icon={<FaCalendarAlt />}
                iconBg="bg-orange-100 dark:bg-[#3a2418]"
                iconColor="text-[#C2410C]"
                label="Account Created"
                value={new Date(usersas?.crestAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              />

              <InfoCard
                icon={<FaUser />}
                iconBg="bg-amber-100 dark:bg-[#393116]"
                iconColor="text-amber-700"
                label="User ID"
                value={`#${usersas?._id?.slice(-8)}`}
              />

              <InfoCard
                icon={<FaUserShield />}
                iconBg="bg-orange-100 dark:bg-[#3a2418]"
                iconColor="text-[#C2410C]"
                label="Last Profile Updeat Time"
                value={
                  usersas?.profileUpdeatTime
                    ? new Date(usersas.profileUpdeatTime).toLocaleString()
                    : `${usersas?.displayName} Not Update Profile`
                }
              />

              <InfoCard
                icon={<FaCheckCircle />}
                iconBg="bg-green-100 dark:bg-[#1f3a2a]"
                iconColor="text-green-600"
                label="Account Status"
                value="Active"
              />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={handelUpdeatProfile}
                className="flex-1 rounded-xl flex items-center justify-center gap-2 py-2 font-semibold text-white
                bg-gradient-to-r from-[#C2410C] to-orange-500
                shadow-md hover:shadow-lg hover:scale-[1.03]
                transition-all duration-200"
              >
                <CgProfile className="w-5 h-5" /> Update Profile
              </button>

              <Link
                to="/deshbord/settings"
                className="px-6 rounded-xl py-2 font-semibold
                border border-orange-300 dark:border-[#5a3a26]
                text-[#C2410C] dark:text-orange-400
                hover:bg-orange-50 dark:hover:bg-[#2f2f2f]
                transition"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ipdeat Profile */}
      <dialog ref={references} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl ">
          <h3 className="font-bold text-lg mb-4">Update Profile</h3>

          <form
            onSubmit={handleSubmit(handelProfileUpdeat)}
            className="space-y-4"
          >
            {/* Profile Image Preview */}
            <div className="flex items-center gap-4">
              <img
                src={user?.photoURL}
                className="w-20 h-20 rounded-full object-cover border-2 border-orange-500"
              />
            </div>

            {/* Display Name */}
            <div>
              <label className="flex mb-3 items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Preview Your Name
                <span className="text-red-500">*</span>
              </label>

              <input
                {...register("displayName")}
                type="text"
                defaultValue={user?.displayName}
                className="input focus:outline-none border-2 rounded-lg w-full focus:border-orange-500"
                placeholder="Enter display name"
              />
            </div>

            {/* Email (Read Only) */}
            <div>
              <label className="flex mb-3 items-center gap-2 font-semibold text-gray-700 text-sm">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Preview Your Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                value={user?.email}
                className="input focus:outline-none border-2 rounded-lg border-orange-500 w-full bg-gray-100"
              />
            </div>
            {/* Image Upload Section */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Update Profile Picture (Optional)
              </label>
              <label className="flex flex-col items-center justify-center w-full md:h-48 border-2 border-dashed border-orange-300 rounded-xl cursor-pointer bg-gradient-to-br from-orange-50 to-amber-50 hover:bg-orange-100 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-12 h-12 mb-3 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-orange-700 font-semibold">
                    {" "}
                    Click to upload profile picture
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG (Optional)</p>
                </div>
                <input
                  {...register("images")}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </label>
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="  py-2  rounded-lg px-4  text-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <CgProfile /> Update Now
              </button>
              <button
                onClick={() => references.current.close()}
                type="button"
                className="  py-2  rounded-lg px-4  text-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <IoCloseCircleOutline /> Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
