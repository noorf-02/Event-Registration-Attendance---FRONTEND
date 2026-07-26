import React from "react";
import { Link } from "react-router-dom";

function MainInterfaceComponent() {
  return (
    <>
      <div className="hero bg-[#f7f7f7] h-[70dvh] flex flex-col rounded-b-[120px]">
        <div className="wrapper nav-list flex justify-between p-3 items-center">
          <div className="logo font-blackops sm:text-2xl text-[16px] font-bold text-[#343434]">
            EVENTDESK
          </div>
          <div className="nav-btns flex sm:gap-4 gap-2 text-[#242424] sm:text-[16px] text-[14px]">
            <Link to="/login" className="cursor-pointer">
              Log In
            </Link>
            <p>/</p>
            <Link to="/signup" className="cursor-pointer">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="hero-header wrapper flex flex-col justify-center items-center gap-8 py-18">
          <p className="bg-[#242424] font-blackops text-white w-13 h-13 text-[22px] flex items-center justify-center rounded-full shadow-2xl mb-[-10px]">E</p>

          <p className="font-bold text-center bg-gradient-to-br from-[#242424]  to-gray-500 bg-clip-text text-transparent text-4xl font-medium w-[340px] text-center">
            Effortless event management, from registration to attendance.
          </p>

          <div className="btn flex items-center bg-[#242424] hover:bg-black text-white w-fit py-1 px-4 rounded-[16px] cursor-pointer">
            <p>Post an Event </p>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainInterfaceComponent;
