import React from "react";
import Navbar from "../components/ui/Navbar";
import Home from "../pages/Home/Home";

const MainLayOut = () => {
  return (
    <div className=" relative">
      <nav className=" absolute  w-full fixed z-3">
        <Navbar></Navbar>
      </nav>
      <div className=" h-[40px]"></div>
      <Home></Home>
    </div>
  );
};

export default MainLayOut;
