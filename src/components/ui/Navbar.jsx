import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { Link, NavLink } from "react-router";
// import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // const user = useAuth();
  return (
    <div className=" bg-base-100 shadow-sm py-2.5 z-90">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start flex gap-2 items-center">
          <FaBookReader className="h-6 w-6  text-primary" />
          <a className=" text-xl text-primary">BookCourier </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            <li>
              <NavLink to="/" className="mr-5 text-lg font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="mr-5 text-lg font-semibold">
                {" "}
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="mr-5 text-lg font-semibold">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <Link
            to="/auth/login"
            className="
    px-7 py-2
    rounded-xl
    font-semibold
    text-[#e85d04]
    border-2 border-[#e85d04]
    transition-all
    hover:border-1 
    hover:outline-none 
    duration-300
    hover:bg-gradient-to-r from-[#C2410C] to-[#e85d04]
    hover:text-white
    hover:shadow-xl
    hover:scale-105
    active:scale-95
  "
          >
            Login
          </Link>

          <Link
            to="/auth/rigester"
            className="
    px-5 py-2.5
    rounded-xl
    text-white
    font-semibold
    bg-gradient-to-r from-[#C2410C] to-[#e85d04]
    shadow-xl
    transition-all
    duration-300
    hover:from-[#a7360b] hover:to-[#c2410c]
    hover:scale-105
    active:scale-95
  "
          >
            Register
          </Link>
          {/* {user.length===0 ? (
            " "
          ) : ( */}
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <label className="swap swap-rotate ml-3">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
