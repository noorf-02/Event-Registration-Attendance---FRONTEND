import React from "react";

function POSTEVENTCOMP() {
  return (
    <>
      <>
        <div className="wrapper py-10">
          <div className="heading flex flex-col text-center">
            <h1 className="sm:text-5xl text-3xl font-bold text-[#242424] font-blackops">
              EVENTDESK
            </h1>
            <p className="text-[#242424] italic text-[14px] sm:text-[17px]">
              Organizer's Dashbaord
            </p>
            <hr className="mt-10 border-[#e4e4e4] rounded-full" />
          </div>
        </div>

        <form action="" className="">
          <div className="create-event wrapper bg-[#f7f7f7] rounded-3xl p-8 flex flex-col gap-4">
            <h1 className="text-[28px] text-center text-[#343434] font-bold">
              Add Event Details
            </h1>

            <div className="event-form flex flex-col gap-8">
              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Title:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: Hackathon"
                />
              </div>
              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Description:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: Inviting undergraduates for a competitive hackathon"
                />
              </div>

              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Venue:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: Ideoversity"
                />
              </div>

              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Start Time:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: 12:00 pm"
                />
              </div>
              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  End Time:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: 3:00 pm"
                />
              </div>
              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Last Date To Register:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="31st August, 2026."
                />
              </div>
              <div className="form-item flex flex-col gap-1 italic">
                <label htmlFor="" className="font-medium text-[18px]">
                  Available Seats:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="200 People"
                />
              </div>
              <div className="form-item flex flex-col gap-3">
                <label htmlFor="" className="font-medium text-[18px]">
                  Choose City:
                </label>
                <select
                  name="city"
                  id=""
                  className="bg-white rounded-3xl p-2 focus:outline-none shadow-2xs italic"
                >
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>
              <div className="form-item flex flex-col gap-3">
                <label htmlFor="" className="font-medium text-[18px]">
                  Choose Category:
                </label>
                <select
                  name="category"
                  id=""
                  className="bg-white rounded-3xl p-2 focus:outline-none shadow-2xs italic"
                >
                  <option value="workshop">Workshop</option>
                  <option value="education">Education</option>
                  <option value="tech">Tech</option>
                  <option value="sport">Sports</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>
          </div>

          <div className=" wrapper bg-[#f7f7f7] rounded-3xl p-8 flex flex-col gap-4 mt-12">
            <h1 className="text-[28px] text-center text-[#343434] font-bold">
              Add Organizer's Info
            </h1>

            <div className="event-form flex flex-col gap-8">
              <div className="form-item flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="font-medium font-medium text-[18px]"
                >
                  Organizer's Name:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="eg: Noor Fatima"
                />
              </div>
              <div className="form-item flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="font-medium font-medium text-[18px]"
                >
                  Organizer's Contact:
                </label>
                <input
                  type="text"
                  className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                  placeholder="0123456789"
                />
              </div>
            </div>
          </div>
          <div className="wrapper mt-5 mb-15 flex justify-end">
            <button type="Submit" className="bg-green-800 font-medium text-[#f7f7f7] py-1 px-4 rounded-3xl sm:text-[18px] text-[16px] hover:bg-green-900 cursor-pointer" >Submit For Approval</button>
          </div>
        </form>
      </>
    </>
  );
}

export default POSTEVENTCOMP;
