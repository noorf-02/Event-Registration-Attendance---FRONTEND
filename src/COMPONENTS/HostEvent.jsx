import React from 'react'
import hostImg from "../assets/host.png";
import {Link} from 'react-router-dom'

function HostEvent() {
  return (
    <>
    <div className='bg-[#f7f7f7] host py-20'>
    <div className='wrapper flex justify-between gap-10 items-center'>

        <div className='left-col'> 
        <img src={hostImg} alt="" className='h-full w-[400px] '/>
      </div>

      <div className="right-col text-right flex flex-col items-end gap-5">
        <p className='font-bold text-4xl'>Ready to Host Your Next Event?</p>
        <p className='text-right w-[800px] italic text-[18px]'>Whether you're organizing a workshop, seminar, or training session, our platform makes event management simple. Create your event, manage registrations, monitor attendance, and focus on delivering a great experience while we take care of the logistics.</p>
      <Link to={''} className='bg-[#242424] text-white px-5 py-2 rounded-4xl w-fit text-[18px] font-bold hover:bg-black curosr-pointer'>Create Your Event Today</Link>
      </div>
     
      </div>
    </div>
    </>
  )
}

export default HostEvent
