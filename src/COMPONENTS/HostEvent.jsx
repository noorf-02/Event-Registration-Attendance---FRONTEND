import React from "react";
import hostImg from "../assets/host.png";
import { Link } from "react-router-dom";

function HostEvent() {
  return (
    <>
      <div className="bg-[#f7f7f7] host py-40">
        <div className="wrapper md:flex flex-row md:justify-between justify-center gap-10 items-center">
          <div className="left-col md:block hidden">
            <img
              src={hostImg}
              alt=""
              className="h-full md:w-[400px] w-[200px] block m-auto pb-6"
            />
          </div>

          <div className="right-col text-right flex flex-col items-end md:gap-5 gap-7">
            <p className="font-bold md:text-4xl text-2xl">
              Ready to Host Your Next Event?
            </p>
            <p className="text-right italic md:text-[18px] text-[14px] ">
              Whether you're organizing a workshop, seminar, or training
              session, our platform makes event management simple. Create your
              event, manage registrations, monitor attendance, and focus on
              delivering a great experience while we take care of the logistics.
            </p>
            <div className="bg-[#242424] text-white px-5 py-2 rounded-4xl w-fit text-[14px] md:text-[18px] font-bold hover:bg-black curosr-pointer">
              <Link to={"/signup"} className="">
                Create Your Event Today{" "}
              </Link>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostEvent;
