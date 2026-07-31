import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function HOSTDASHBOARD() {
  return (
    <>
      <div className="flex min-h-screen">
        <aside className="bg-[#343434] p-6 text-[#f7f7f7]">
          <div className="flex flex-col">
            <div className="sidebar-head flex flex-col items-center">
              <h1 className="font-medium text-3xl font-blackops">EVENTDESK</h1>
            </div>

            <div className="side-bar-items mt-20 flex flex-col gap-3">
              <NavLink
                to="."
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
                Event Pending
              </NavLink>
              <NavLink to={"logout"} className={({ isActive })=> `py-2 px-3 rounded-2xl ${isActive ? "bg-[#525252] text-white" : "hover:bg-[#525252]"}`}>Log Out</NavLink>
            </div>
          </div>
        </aside>

        <main className="wrapper">
          <div className="heading  p-5 flex w-full shadow-md bg-[#white]">
            <h1 className="font-bold text-[#343434] text-[22px]">
              Organizer's Dashboard
            </h1>
          </div>

          <div className="main-content p-6">
            <Outlet/>
          </div>


        </main>
      </div>
    </>
  );
}

export default HOSTDASHBOARD;
