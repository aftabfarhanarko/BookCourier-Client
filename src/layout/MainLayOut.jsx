import React from "react";
import Navbar from "../components/ui/Navbar";

const MainLayOut = () => {
  return (
    <div className=" relative">
      <nav className=" absolute  w-full fixed z-3">
        <Navbar></Navbar>
      </nav>
      <div className=" h-[70px]"></div>
    </div>
  );
};

export default MainLayOut;
