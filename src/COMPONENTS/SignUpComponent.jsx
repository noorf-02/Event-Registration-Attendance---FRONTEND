import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    role:"attendee"
  });

  function handleSignUp(e) {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setAuth({...auth, [name]:value});
  }

  async function submitSignUp(e) {
    e.preventDefault();
    try{
      const resSignUp = await axios.post("http://localhost:5000/signUp", auth);
    setAuth({
      username: "",
      email: "",
      password: "",
    });
    console.log("Submit Signup");
    setMessage(resSignUp.data.msg);
    navigate("/login");
    } catch(error){
      console.error("sign up failed", error);
      setMessage(error.response.data.msg);
    }
     
  }

  return (
    <>
      <div className="wrapper my-10">
        <div className="heading flex flex-col text-center">
          <h1 className="sm:text-5xl text-3xl font-bold text-[#242424] font-blackops">
            EVENTDESK
          </h1>
          <p className="text-[#242424] italic text-[14px] sm:text-[17px]">
            Book seats | Track attendance | Manage events
          </p>
        </div>
      </div>

      <div className="wrapper my-10 flex justify-center h-[60dvh] items-center">
        <form
          action=""
          onSubmit={submitSignUp}
          className="flex flex-col gap-3 sm:w-[580px] md:w-[700px] w-[290px]"
        >
          <input
            type="text"
            name="username"
            id="username"
            className="bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl"
            placeholder="Username"
            value={auth.username}
            onChange={handleSignUp}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl"
            placeholder="Email"
            value={auth.email}
            onChange={handleSignUp}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl"
            placeholder="Password"
            value={auth.password}
            onChange={handleSignUp}
          />
          <select name="role" id="" className="focus:outline-none" value={auth.role} onChange={handleSignUp}>
            <option value="attendee">Attendee</option>
            <option value="organizer">Organizer</option>
          </select>
          <p className="text-[#900000]">
            {message}
          </p>
          <div className="btns flex justify-center">
            <button
              type="Submit"
              className="bg-[#242424] sm:px-5 sm:py-4 px-4 py-3 font-medium text-white rounded-full shadow-2xl w-full hover:bg-black cursor-pointer"
            >
              
              Sign Up
            </button>
          </div>
          <p className="text-[#242424]">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUpComponent;
