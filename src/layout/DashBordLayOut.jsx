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

const DashBordLayOut = () => {
  const { user } = useAuth();

  const logoutNow = () => {};
  const handleTheme = (e) => {};

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 ">
            <div className=" flex gap-2 items-center">
              <FaBookReader className="h-5 w-5  text-primary" />
              <a className=" text-xl text-primary">BookCourier </a>
            </div>
          </div>
          {/* Nacvbar End */}
          <div className="">
            <>
              <div className="flex items-center gap-3">
                <div className="dropdown dropdown-end">
                  {/* AVATAR */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="relative btn btn-ghost btn-circle avatar hover:scale-105 transition"
                  >
                    <div className="w-10 h-10 rounded-full ring-2 ring-[#e85d04] ring-offset-2 ring-offset-white overflow-hidden shadow-lg flex items-center justify-center bg-white">
                      {user?.photoURL ? (
                        <img
                          src={
                            user?.photoURL ? (
                              user?.photoURL
                            ) : (
                              <CiUser className="w-8 h-8 text-[#e85d04]" />
                            )
                          }
                          alt="User Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <CiUser className="w-8 h-8 text-[#e85d04]" />
                      )}
                    </div>

                    {/*  */}

                    {user && (
                      <>
                        {" "}
                        <span className="absolute -top-0.5 -right-2 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white animate-pulse" />
                      </>
                    )}
                  </div>

                  {/* DROPDOWN */}
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-6 w-64 rounded-2xl
                            bg-base-100 p-4 shadow-2xl border border-base-300"
                  >
                    {/* USER INFO */}
                    <li className="mb-3">
                      <div className="flex items-center gap-3 cursor-default">
                        <div className="avatar">
                          {user?.photoURL ? (
                            <img
                              src={
                                user?.photoURL ? (
                                  user?.photoURL
                                ) : (
                                  <CiUser className="w-8 h-8 text-[#e85d04]" />
                                )
                              }
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <CiUser className="w-8 h-8 text-[#e85d04]" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold leading-tight ml-1">
                            {user?.displayName || "User"}
                          </p>
                          <p className="text-xs text-base-content/60 flex items-center gap-1">
                            <i className="fa-regular fa-envelope" />
                            Verified account
                          </p>
                        </div>
                      </div>
                    </li>

                    <div className="divider my-2" />

                    {/* SETTINGS */}
                    <li>
                      <div>
                        <CgProfile className=" w-6 h-6"></CgProfile>
                        Profile
                      </div>
                    </li>
                    <div className="divider my-1" />

                    {/* SETTINGS */}
                    <li>
                      <div>
                        <CiSettings className=" w-7 h-7"></CiSettings>
                        Settings
                      </div>
                    </li>

                    {/* THEME */}
                    <div className="divider my-1" />
                    <li>
                      <div>
                        <label className="swap swap-rotate ">
                          {" "}
                          {/* this hidden checkbox controls the state */}{" "}
                          <input
                            type="checkbox"
                            onChange={(e) => handleTheme(e.target.checked)}
                            defaultChecked={
                              localStorage.getItem("theme") === "dark"
                            }
                            className="theme-controller"
                            value="synthwave"
                          />{" "}
                          {/* sun icon */}{" "}
                          <svg
                            className="swap-off h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            {" "}
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />{" "}
                          </svg>{" "}
                          {/* moon icon */}{" "}
                          <svg
                            className="swap-on h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            {" "}
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />{" "}
                          </svg>{" "}
                        </label>
                        Theme
                      </div>
                    </li>

                    <div className="divider my-2" />

                    {/* LOGOUT */}
                    <li>
                      <button
                        onClick={logoutNow}
                        className="flex items-center gap-2 text-red-500 bg-red-50 rounded-xl"
                      >
                        <PiSignOutLight className=" w-6 h-6"></PiSignOutLight>
                        <i className="fa-solid fa-right-from-bracket" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          </div>
        </nav>

        {/* Page content here */}
        <div className="p-4">Page Content</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Go Home page"
              >
                <HiOutlineHome className=" w-8 h-8"></HiOutlineHome>
                <span className="is-drawer-close:hidden">Go Home page</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                <RiDashboardHorizontalLine className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All User"
              >
                <HiMiniUserGroup className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">All User</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Books
"
              >
                <ImBooks className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">Manage Books</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Book"
              >
                <GiWhiteBook className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">Add Book</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My all Books List"
              >
                <GiBookAura className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">
                  My Post all Books List
                </span>
              </button>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Order List"
              >
                <FaClipboardList className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">All Orders List</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="User Orders List"
              >
                <Logs className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">User Orders List</span>
              </button>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Invoices"
              >
                <BrickWallShield className=" w-6 h-6" />
                <span className="is-drawer-close:hidden">Invoices</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                {/* Settings icon */}
                <CgProfile className=" w-6 h-6"></CgProfile>

                <span className="is-drawer-close:hidden">Profile</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <CiSettings className=" w-7 h-7"></CiSettings>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Logout"
              >
                {/* Settings icon */}
                <PiSignOutLight className=" w-6 h-6"></PiSignOutLight>
                <span className="is-drawer-close:hidden">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayOut;
