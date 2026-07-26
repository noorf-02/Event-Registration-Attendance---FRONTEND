import React from "react";

function About() {
  return (
    <>
      <div className="bg-[#242424] py-30">
        <div className="wrapper text-[#f7f7f7] text-center bg-gradient-to-br text-[18px] w-[320px] sm:w-[420px] text-center pb-15 justify-center items-center">
            <h1 className="text-2xl font-bold mb-5">About EVENTDESK</h1>
            <p className="sm:italic sm:text-[18px] text-[12px]">" From creating events to tracking attendance, our platform streamlines every step of the event management process. Whether you're an organizer planning your next workshop or a student looking to register, everything you need is just a few clicks away "</p> 
            </div>

            <div className="flow wrapper flex justify-center sm:gap-20 gap-8">
                <div className="circle flex flex-col items-center gap-2">
                    <p className="sm:h-14 h-10 sm:w-14 w-10 bg-[#f7f7f7] flex rounded-full items-center justify-center font-bold sm:text-3xl text-2xl">1</p>
                    <p className="text-[#f7f7f7] sm:text-2xl text-[16px] font-medium italic">Discover</p>
                </div>
                <div className="circle flex flex-col items-center gap-2">
                    <p className="sm:h-14 h-10 sm:w-14 w-10 bg-[#f7f7f7] flex rounded-full items-center justify-center font-bold sm:text-3xl text-2xl">2</p>
                    <p className="text-[#f7f7f7] sm:text-2xl text-[16px] font-medium italic">Register</p>
                </div>
                <div className="circle flex flex-col items-center gap-2">
                    <p className="sm:h-14 h-10 sm:w-14 w-10 bg-[#f7f7f7] flex rounded-full items-center justify-center font-bold sm:text-3xl text-2xl">3</p>
                    <p className="text-[#f7f7f7] sm:text-2xl text-[16px] font-medium italic">Attend</p>
                </div>
            </div>
      </div>
    </>
  );
}

export default About;
