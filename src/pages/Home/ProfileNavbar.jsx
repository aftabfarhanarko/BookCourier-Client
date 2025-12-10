import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaCamera,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSchore from "../../hooks/useAxiosSchore";
import LoadingSpinner from "../../shared/LoadingSpinner ";
import TextType from "../../utils/TextType";

const ProfileNavbar = () => {
  const { user } = useAuth();
  console.log(user);
  const axioscehore = useAxiosSchore();

  const {
    data: usersas,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axioscehore.get(
        `loginRealTimerUser?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading || isFetching) return <LoadingSpinner />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
          {/* Header Section with Cover */}
          <div className="relative h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            <div className="absolute -bottom-16 left-8">
              <img
                src={usersas?.photoURL}
                alt="Profile"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-8 pb-8">
            {/* Name & Role Section */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  <h1 className=" text-xl md:text-2xl  leading-tight text-secondary font-semibold">
                    <TextType
                      text={`  ${usersas?.displayName}`}
                      typingSpeed={70}
                      deletingSpeed={40}
                      pauseDuration={2000}
                      loop={false}
                      showCursor={false}
                    />
                  </h1>
                </h1>
                <p className="mt-1 text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  {usersas?.email}
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                  usersas?.role === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : usersas?.role === "librarian"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <FaUserShield />
                {usersas?.role}
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Created */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FaCalendarAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Account Created
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(usersas?.crestAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* User ID */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <FaUser className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">User ID</p>
                    <p className="text-sm font-semibold text-gray-900">
                      #{usersas?._id?.slice(-8) || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Access Level */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <FaUserShield className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Access Level
                    </p>
                    <p className="text-sm font-semibold text-gray-900 capitalize">
                      {usersas?.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Account Status
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                Update Profile
              </button>
              <button className="px-6 rounded-xl border-2 border-gray-200 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
