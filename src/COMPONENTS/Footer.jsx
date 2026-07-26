import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-[#242424] '>
    <div className='wrapper text-white flex justify-between py-10'>
      <div className="left-col text-2xl font-bold">Developed by Noor </div>
      <div className="right-col list flex flex-col gap-2">
        <div className='btn flex items-center'>
        <i class="fa-solid fa-caret-right"></i>
        <p className='font-medium'>Browse Events</p>
        </div>

        <div className='btn flex items-center'>
        <i class="fa-solid fa-caret-right"></i>
        <p className='font-medium'>Post An Event</p>
        </div>
        
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
