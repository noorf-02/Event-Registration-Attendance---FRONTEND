import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function HOSTDASHBOARD() {
  const [ bar,setBar ] = useState(false);

  return (
    <>

      <div className="top-bar bg-[#343434] p-6 text-[#f7f7f7] md:hidden block">
        <div className="wrapper">
          <button className="cursor-pointer text-[19px]" onClick={()=>setBar(!bar)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <div className="flex">
        <aside className={`bg-[#343434] self-stretch p-6 transition-all duration-300 text-[#f7f7f7] md:block ${bar? 'block' : 'hidden'}`}>
          <div className="flex flex-col">
            <div className="sidebar-head flex flex-col items-center">
              <h1 className="font-medium text-3xl font-blackops">EVENTDESK</h1>
            </div>

            <div className="side-bar-items mt-20 flex flex-col gap-3">
              <NavLink
                to="/organizer-dashboard"
                end
                className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}
              >
                Dashboard
              </NavLink>
              <NavLink
                to={"create-event"}
                className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}
              >
                Organize Event
              </NavLink>
              <NavLink
                to={"approved-event"}
                className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}
              >
                Events Live
              </NavLink>
              <NavLink
                to={"event-pending"}
                className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}
              >
                Pending Approvals
              </NavLink>
              <NavLink to={"logout"} className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}>Log Out</NavLink>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="heading  p-5 w-full justify-center shadow-md md:flex hidden bg-[#white] z-10 relative">
            <h1 className="font-bold text-[#343434] text-[22px]">
              Organizer's Dashboard
            </h1>
          </div>

          <div className="main-content">
            <Outlet/>
          </div>


        </main>
      </div>

    


    </>
  );
}

export default HOSTDASHBOARD;
