import React, { useState, useEffect } from "react";
import H1text from "../../utils/H1text";
import { FaTrophy, FaUsers, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ReadingChallenge = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    useEffect(() => {
     
  
      // Listen for theme changes from localStorage
      const handleStorageChange = () => {
        setTheme(localStorage.getItem("theme") || "light");
      };
  
      // Check for theme changes
      const interval = setInterval(() => {
        const currentTheme = localStorage.getItem("theme") || "light";
        if (currentTheme !== theme) {
          setTheme(currentTheme);
        }
      }, 100);
  
      window.addEventListener("storage", handleStorageChange);
  
      return () => {
        clearInterval(interval);
        window.removeEventListener("storage", handleStorageChange);
      };
    }, [theme]);
  
    const isDark = theme === "dark";
  
  return (
    <div className="py-12">
      <div className=" bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-orange-100 font-semibold uppercase tracking-wider text-sm">
              <FaTrophy className="text-yellow-300" /> 2026 Challenge
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Join the Annual <br/>Reading Challenge
            </h2>
            <p className="text-orange-100 text-lg">
              Set your reading goal, track your progress, and win exclusive badges and rewards along the way.
            </p>
            
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-orange-500" src="https://i.pravatar.cc/100?img=1" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-orange-500" src="https://i.pravatar.cc/100?img=2" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-orange-500" src="https://i.pravatar.cc/100?img=3" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 bg-orange-700 flex items-center justify-center text-xs font-bold">
                  +2k
                </div>
              </div>
              <p className="flex items-center text-sm font-medium">
                <span className="font-bold mr-1">2,450+</span> readers joined
              </p>
            </div>

            <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
              Start Challenge
            </button>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-orange-100 text-sm">Community Goal</p>
                  <h3 className="text-3xl font-bold">75,000</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">Books Read</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-black/20 rounded-full h-4 mb-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-4 rounded-full" 
                  style={{ width: '65%' }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-orange-100">
                <span>0 Books</span>
                <span>Target: 100k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingChallenge;
