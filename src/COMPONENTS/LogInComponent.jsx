import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';

function LogInComponent() {
  const navigate = useNavigate();
  const [ message,setMessage ] = useState("");
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  function handleLogIn(e) {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setAuth({...auth, [name]:value});
  }

  async function submitLogIn(e) {
    e.preventDefault();
    try{
      const resLogIn = await axios.post("http://localhost:5000/logIn", auth);
      const user = localStorage.setItem('user', JSON.stringify(resLogIn.data));
      const role = resLogIn.data.role;
      console.log(role);
    setAuth({
      username: "",
      password: "",
    });

    if(role=="organizer"){
      navigate('/organizer-dashboard')
    } else{
      navigate('/all-events');
    }

    console.log("Submit login");
    setMessage(resLogIn.data.msg);
    // navigate("/");
    } catch(error){
      console.error("sign up failed", error);
      setMessage(error.response.data.msg)
    }
     
  }
  return (
  
    <>
    <div className='wrapper py-10'>
      <div className="heading flex flex-col text-center">
        <h1 className='sm:text-5xl text-3xl font-bold text-[#242424] font-blackops'>EVENTDESK</h1>
        <p className='text-[#242424] italic text-[14px] sm:text-[17px]'>Book seats | Track attendance | Manage events</p>
      </div>
    </div>

    <div className='wrapper my-10 flex justify-center h-[50dvh] items-center'>
        <form action="" onSubmit={submitLogIn} className='flex flex-col gap-3 sm:w-[580px] md:w-[700px] w-[290px]'>
            
                <input type="text" name='username' id='username' className='bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl' placeholder='Username' value={auth.username} onChange={handleLogIn}/>
                <input type="password" name='password' id='password' className='bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl' placeholder='Password' value={auth.password} onChange={handleLogIn}/>
                <p className='text-[#900000]'>{message}</p>
                <div className="btns flex justify-center">
                  <button type='Submit' className='bg-[#242424] sm:px-5 sm:py-4 px-4 py-3 font-medium text-white rounded-full shadow-2xl w-full hover:bg-black cursor-pointer'> Log In </button>
                </div>
                <p className='text-[#242424]'>Don't have an account? <Link to={"/signup"} className='underline'>SignUp</Link></p>
        </form>
    </div>
    </>
  )
}

export default LogInComponent
