import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-[#242424] '>
    <div className='wrapper text-white flex justify-between py-15'>
      <div className="left-col sm:text-2xl text-[16px] font-bold">Developed by Noor </div>
      <div className="right-col list flex flex-col gap-2">
        <div className='btn flex items-center cursor-pointer'>
        <i class="fa-solid fa-caret-right sm:block hidden"></i>
        <Link to={'/all-events'} className='sm:font-medium sm:text-[18px] text-[14px]'>Browse Events</Link>
        </div>

        <div className='btn flex items-center cursor-pointer'>
        <i class="fa-solid fa-caret-right sm:block hidden"></i>
        <Link to={'/post-event'} className='sm:font-medium sm:text-[18px] text-[14px]'>Post An Event</Link>
        </div>
        
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
