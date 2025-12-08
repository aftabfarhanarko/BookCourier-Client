import React from "react";
import { FaBookReader } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { CiSettings, CiUser } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { PiSignOutLight } from "react-icons/pi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { GiBookAura, GiWhiteBook } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { BrickWallShield, Logs } from "lucide-react";
import { HiOutlineHome } from "react-icons/hi2";
import { Link, Outlet } from "react-router";
import { IoClose } from "react-icons/io5";

const DashBordLayOut = () => {
  const { user } = useAuth();

  return (
    <div className="drawer lg:drawer-open  bg-base-100 dark:bg-base-900 text-base-content dark:text-base-content">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content flex flex-col ">
        {/* NAVBAR */}
        <nav className="  navbar bg-base-300 dark:bg-base-800 px-4 py-5 shadow-md">
          <div className=" block md:hidden">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-ghost btn-square"
              aria-label="Toggle sidebar"
            >
              <Logs />
            </label>
          </div>

          <div className="flex items-center gap-2 text-primary ">
            <FaBookReader className="w-6 h-6" />
            <span className="text-xl font-semibold  ">BookCourier</span>
          </div>

          {/* AVATAR DROPDOWN */}
          <div className="ml-auto dropdown dropdown-end mr-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar relative hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-full ring-2 ring-[#e85d04] ring-offset-2 ring-offset-base-100 dark:ring-offset-base-900 bg-white dark:bg-neutral flex items-center justify-center shadow-lg">
                <CiUser className="w-7 h-7 text-[#e85d04]" />
              </div>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full ring-2 ring-white animate-pulse" />
            </div>

            {/* DROPDOWN MENU */}
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 w-64 rounded-2xl bg-base-100 dark:bg-base-800 p-4 shadow-2xl border border-base-300 dark:border-base-700"
            >
              <li className="mb-3">
                <div className="flex items-center gap-3 cursor-default select-none">
                  <div className="w-10 h-10 rounded-full bg-orange-100  flex items-center justify-center">
                    {user?.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={
                          user?.photoURL ? (
                            user?.photoURL
                          ) : (
                            <CiUser className=" text-[#e85d04]" />
                          )
                        }
                      />
                    ) : (
                      <CiUser className=" text-[#e85d04]" />
                    )}
                    {/* <CiUser className="text-[#e85d04]" /> */}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-base-content/60">
                      Verified account
                    </p>
                  </div>
                </div>
              </li>

              <div className="divider my-2" />

              <li>
                <div className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-primary-content">
                  <CgProfile className="w-6 h-6" /> Profile
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-primary-content">
                  <CiSettings className="w-6 h-6" /> Settings
                </div>
              </li>

              <div className="divider my-2" />

              <li>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="toggle toggle-warning" />
                  <span>Theme</span>
                </div>
              </li>

              <div className="divider my-2" />

              <li>
                <button className="flex items-center gap-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 dark:bg-red-900 dark:hover:bg-red-800 px-3 py-1 transition">
                  <PiSignOutLight className="w-6 h-6" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="p-6 flex-grow bg-base-100 dark:bg-base-900">
          <Outlet></Outlet>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side  md:w-full bg-base-200 dark:bg-base-900 flex flex-col">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="menu px-2 py-4 gap-2 flex-grow bg-gray-900 text-white">
          {/* Main menu items */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 text-lg hover:text-primary dark:hover:text-primary-content transition"
            >
              <HiOutlineHome className="w-8 h-8" /> Home
            </Link>
          </li>
          <div className=" block md:hidden">
            <li
              onClick={() => {
                const drawerCheckbox = document.getElementById("my-drawer-4");
                if (drawerCheckbox) drawerCheckbox.checked = false;
              }}
            >
              <Link className="flex  md:mt-10 items-center gap-3 text-[16px] hover:text-primary  transition">
                <IoClose className="w-6 h-6" /> Close
              </Link>
            </li>
          </div>
          <li>
            <Link className="flex mt-4 md:mt-10 items-center gap-3 text-[16px] hover:text-primary  transition">
              <RiDashboardHorizontalLine className="w-6 h-6" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <HiMiniUserGroup className="w-6 h-6" /> All Users{" "}
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <ImBooks className="w-6 h-6" /> Manage Books{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/deshbord/addbooks"
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <GiWhiteBook className="w-6 h-6" /> Add Book
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <GiBookAura className="w-6 h-6" /> My Books{" "}
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <FaClipboardList className="w-6 h-6" /> Orders{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/deshbord/userorder"
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <Logs className="w-6 h-6" /> User Orders{" "}
            </Link>
            <button className="flex items-center gap-3 text-lg hover:text-primary dark:hover:text-primary-content transition"></button>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <BrickWallShield className="w-6 h-6" /> Invoices
            </Link>
          </li>
        </ul>

        {/* Bottom fixed buttons */}
        <ul className="menu  w-[185px] py-4 border-t border-gray-800 bg-gray-900 text-white dark:border-base-700">
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <CgProfile className="w-6 h-6" /> Profile
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <CiSettings className="w-6 h-6" /> Settings
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center gap-3 text-[16px] hover:text-primary  transition"
            >
              <PiSignOutLight className="w-6 h-6" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBordLayOut;
