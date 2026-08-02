import React, { useEffect, useState } from "react";
import axios from "axios";

function EVENTSPENDING() {
  const [event, setEvent] = useState([]);
  async function fetchEvents() {
    const res = await axios.get("http://localhost:5000/api/events");
    console.log(res.data);
    setEvent(res.data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="main bg-gray-100">
        <div className="pt-6 px-6 flex items-center gap-2 text-red-950">
          <i className="fa-solid fa-hourglass-start text-[18px]"></i>
          <h1 className="font-medium text-[22px] sm:text-2xl italic">
            Events Pending For Approval
          </h1>
        </div>

        <div className="card-container px-6 py-5 flex flex-col gap-5">
          {" "}
          {event.map((myEvents) => {
            console.log(myEvents);
            return (
              <div
                key={myEvents._id}
                className="card bg-white shadow-md p-4 rounded-2xl flex flex-col gap-5"
              >
                <div className="location flex justify-between italic text-gray-400">
                  <p>{myEvents.city}</p>
                  <p>Venue: {myEvents.venue}</p>
                </div>

                <div className="basic-info flex flex-col gap-1">
                  <h1 className="text-[22px] font-medium">{myEvents.title}</h1>
                  <p className="">{myEvents.description}</p>
                  <p className="italic text-gray-400 text-[15px]">
                    {myEvents.category}
                  </p>
                </div>

                <div className="time flex justify-between font-medium">
                  <i class="fa-regular fa-clock text-[18px] text-green-700"></i>
                  <p className="text-green-700">
                    Event Starts at: {myEvents.startAt}
                  </p>
                </div>

                <div className="deadline bg-[#343434] w-fit text-[#f7f7f7] py-1 px-4 rounded-3xl font-medium">
                  Last Date To Register: {myEvents.deadline}
                </div>

                <div className="organizer flex flex-col gap-2">
                  <h1 className="text-[22px] font-medium">
                    Organizer's Details
                  </h1>
                  <div className="flex justify-between italic">
                    <p className="">{myEvents.organzierName}</p>
                    <p className="flex items-center gap-3 "><i className="fa-solid fa-phone text-green-700"></i> {myEvents.contact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EVENTSPENDING;
