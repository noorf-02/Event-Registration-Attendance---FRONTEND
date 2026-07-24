import React from 'react'

function SignUpComponent() {
  return (
    <>
    <div className='wrapper my-10'>
      <div className="heading flex flex-col text-center">
        <h1 className='sm:text-5xl text-3xl font-bold text-[#242424] font-blackops'>EVENTDESK</h1>
        <p className='text-[#242424] italic text-[14px] sm:text-[17px]'>Book seats | Track attendance | Manage events</p>
      </div>
    </div>

    <div className='wrapper my-10'>
        <form action="">
            <div className='flex flex-col'>
                <label htmlFor="username">Enter Username</label>
                <input type="text" name='username' id='username' className='bg-white'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Enter Email</label>
                <input type="text" name='email' id='email' className='bg-white'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password">Enter Password</label>
                <input type="text" name='password' id='password' className='bg-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default SignUpComponent
