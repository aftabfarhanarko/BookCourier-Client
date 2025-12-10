import { NavLink, Link, Outlet, Navigate } from "react-router";

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
import { IoClose } from "react-icons/io5";
import { CreditCard } from "lucide-react";
import LoadingSpinner from "../shared/LoadingSpinner ";
import useRole from "../hooks/useRole";

const DashBordLayOut = () => {
  const { user, loding ,userLogOut} = useAuth();
  const { role, roleLoding } = useRole();

  if (loding || roleLoding) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="drawer lg:drawer-open h-screen bg-base-100">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ================= CONTENT ================= */}
      <div className="drawer-content flex flex-col h-screen">
        {/* ✅ FIXED NAVBAR */}
        <nav className="navbar fixed top-0 left-0 lg:left-55 right-0 z-50 bg-base-300 px-4 shadow-md">
          {/* Toggle Button */}
          <label
            htmlFor="my-drawer-4"
            className="btn btn-ghost btn-square lg:hidden"
          >
            <Logs />
          </label>

          {/* LOGO */}
          <div className="flex items-center gap-2 text-primary">
            <FaBookReader className="w-6 h-6" />
            <span className="text-xl font-semibold">BookCourier</span>
          </div>

          {/* Avatar */}
          <div className="ml-auto">
            <div className="w-10 h-10 rounded-full ring ring-orange-500 flex items-center justify-center">
              <CiUser className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </nav>

        {/* ✅ CONTENT (navbar height space added) */}
        <div className="flex-grow mt-14 py-10 px-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="drawer-side h-screen">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        {/* ✅ FULL HEIGHT SIDEBAR */}
        <div className="w-55 bg-gray-900 text-white flex flex-col h-full">
          {/* MAIN MENU */}
          <ul className="menu px-4 py-4 flex-grow gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-3 items-center px-4 py-3 md:mt-0 mt-18 rounded-xl
                  ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-gray-800"
                  }`
                }
              >
                <HiOutlineHome className="w-6 h-6" /> Home
              </NavLink>
            </li>

            {/* MOBILE CLOSE
            <li className="md:hidden">
              <button
                onClick={() =>
                  (document.getElementById("my-drawer-4").checked = false)
                }
                className="flex gap-3 items-center px-4 py-3 rounded-xl hover:bg-red-500/20"
              >
                <IoClose className="w-6 h-6 text-red-400" /> Close
              </button>
            </li> */}

            <li>
              <NavLink
                to="/deshbord"
                className={({ isActive }) =>
                  `flex gap-3 items-center px-4 py-2 rounded-xl
                  ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-gray-800"
                  }`
                }
              >
                <RiDashboardHorizontalLine className="w-6 h-6" /> Dashboard
              </NavLink>
            </li>

            {/* ADMIN */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/deshbord/adminuserDataSloved"
                    className={({ isActive }) =>
                      `flex gap-3 px-4 py-1.5 rounded-xl
                      ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "hover:bg-gray-800"
                      }`
                    }
                  >
                    <HiMiniUserGroup className="w-6 h-6" /> All Users
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/deshbord/manazeBooks"
                    className={({ isActive }) =>
                      `flex gap-3 px-4 py-1.5 rounded-xl
                      ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "hover:bg-gray-800"
                      }`
                    }
                  >
                    <ImBooks className="w-6 h-6" /> Manage Books
                  </NavLink>
                </li>
              </>
            )}

            {/* LIBRARIAN */}
            {role === "librarian" && (
              <>
                <li>
                  <NavLink to="/deshbord/addbooks" className="menu-item">
                    <GiWhiteBook className="w-6 h-6" /> Add Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/deshbord/myBooks" className="menu-item">
                    <GiBookAura className="w-6 h-6" /> My Books
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/deshbord/orderAllBooks" className="menu-item">
                    <FaClipboardList className="w-6 h-6" /> Orders
                  </NavLink>
                </li>
              </>
            )}

            {/* USER */}
            {role === "user" && (
              <>
                <li>
                  <NavLink to="/deshbord/userorder" className="menu-item">
                    <Logs className="w-6 h-6" /> Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/deshbord/paymenthistory" className="menu-item">
                    <CreditCard className="w-6 h-6" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" className="menu-item">
                    <BrickWallShield className="w-6 h-6" /> Invoices
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* ✅ BOTTOM FIXED */}
          <ul className="menu border-t border-gray-700 px-4 py-3">
            <li>
              <NavLink to="/deshbord/profileLoginUser" className="menu-item">
                <CgProfile className="w-6 h-6" /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/deshbord/settings" className="menu-item">
                <CiSettings className="w-6 h-6" /> Settings
              </NavLink>
            </li>
            <li>
              <button onClick={()=> userLogOut()} className="menu-item text-red-400">
                <PiSignOutLight className="w-6 h-6" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayOut;
