import React from "react";
import axios from "axios";
import { useState } from "react";

function POSTEVENTCOMP() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    venue: "",
    city: "",
    startAt: "",
    endAt: "",
    deadline: "",
    capacity: "",
    contact: "",
    organizerName: "",
  });

  function handleEventForm(e) {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  }

  async function submitForm(e) {
    e.preventDefault();
    // const emptyValue = Object.values(form).some((value) => value.trim() === "");

    // if (emptyValue) {
    //   alert("Please fill all fields");
    //   return;
    // }

    Object.entries(form).forEach(([key,value])=>{
      console.log(key, "=" ,value)
    })

    try{
       const res = await axios.post("http://localhost:5000/api/events", form);
    alert("Form has been submitted. Approval Pending");
    setForm({
      title: "",
      description: "",
      category: "",
      venue: "",
      city: "",
      startAt: "",
      endAt: "",
      deadline: "",
      capacity: "",
      contact: "",
      organizerName: "",
    });
    } catch(err) {
      console.log("Error", err)
    }
    
  }

  return (
    <>
      <form action="" className="" onSubmit={submitForm}>
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
                value={form.title}
                onChange={handleEventForm}
                name="title"
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
                value={form.description}
                onChange={handleEventForm}
                name="description"
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
                value={form.venue}
                onChange={handleEventForm}
                name="venue"
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
                value={form.startAt}
                onChange={handleEventForm}
                name="startAt"
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
                value={form.endAt}
                onChange={handleEventForm}
                name="endAt"
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
                value={form.deadline}
                onChange={handleEventForm}
                name="deadline"
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
                value={form.capacity}
                onChange={handleEventForm}
                name="capacity"
              />
            </div>
            <div className="form-item flex flex-col gap-3">
              <label htmlFor="" className="font-medium text-[18px]">
                Choose City:
              </label>
              <select
                id=""
                className="bg-white rounded-3xl p-2 focus:outline-none shadow-2xs italic"
                value={form.city}
                onChange={handleEventForm}
                name="city"
              >
                <option value="">Select:</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            <div className="form-item flex flex-col gap-3">
              <label htmlFor="" className="font-medium text-[18px]">
                Choose Category:
              </label>
              <select
                id=""
                className="bg-white rounded-3xl p-2 focus:outline-none shadow-2xs italic"
                value={form.category}
                onChange={handleEventForm}
                name="category"
              >
                <option value="">Select:</option>
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
              <label htmlFor="" className="font-medium font-medium text-[18px]">
                Organizer's Name:
              </label>
              <input
                type="text"
                className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                placeholder="eg: Noor Fatima"
                value={form.organizerName}
                onChange={handleEventForm}
                name="organizerName"
              />
            </div>
            <div className="form-item flex flex-col gap-3">
              <label htmlFor="" className="font-medium font-medium text-[18px]">
                Organizer's Contact:
              </label>
              <input
                type="text"
                className="bg-white rounded-3xl shadow-2xs py-2 px-4 focus:outline-none"
                placeholder="0123456789"
                value={form.contact}
                onChange={handleEventForm}
                name="contact"
              />
            </div>
          </div>
        </div>
        <div className="wrapper mt-5 mb-15 flex justify-end">
          <button
            type="Submit"
            className="bg-green-800 font-medium text-[#f7f7f7] py-1 px-4 rounded-3xl sm:text-[18px] text-[16px] hover:bg-green-900 cursor-pointer"
          >
            Submit For Approval
          </button>
        </div>
      </form>
    </>
  );
}

export default POSTEVENTCOMP;
