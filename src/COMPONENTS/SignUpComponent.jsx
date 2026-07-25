import React from 'react'
import { Link } from 'react-router-dom'

function SignUpComponent() {
  return (
    <>
    <div className='wrapper my-10'>
      <div className="heading flex flex-col text-center">
        <h1 className='sm:text-5xl text-3xl font-bold text-[#242424] font-blackops'>EVENTDESK</h1>
        <p className='text-[#242424] italic text-[14px] sm:text-[17px]'>Book seats | Track attendance | Manage events</p>
      </div>
    </div>

    <div className='wrapper my-10 flex justify-center h-[60dvh] items-center'>
        <form action="" className='flex flex-col gap-4 sm:w-[580px] md:w-[700px] w-[290px]'>
            
                <input type="text" name='username' id='username' className='bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl' placeholder='Username'/>
                <input type="text" name='email' id='email' className='bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl' placeholder='Email'/>
                <input type="text" name='password' id='password' className='bg-white placeholder:text-[#6b7280] focus:outline-none sm:px-5 sm:py-4 px-4 py-3 font-medium text-[#242424] rounded-full shadow-2xl' placeholder='Password'/>
                <div className="btns flex justify-center">
                  <button className='bg-[#242424] sm:px-5 sm:py-4 px-4 py-3 font-medium text-white rounded-full shadow-2xl w-full'> Sign Up </button>
                </div>
                <p className='text-[#242424]'>Already have an account? <Link to={"/login"} className='underline'>LogIn</Link></p>
        </form>
    </div>
    </>
  )
}

export default SignUpComponent
