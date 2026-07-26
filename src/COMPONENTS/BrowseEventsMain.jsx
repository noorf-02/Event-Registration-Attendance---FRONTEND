import React from 'react'
import {Link} from 'react-router-dom';

function BrowseEventsMain() {
  return (
    <>
    <div className='wrapper py-40'>
      <h1 className='text-2xl font-bold text-[#242424] sm:text-3xl'>Browse Events</h1>
      <Link to={''} className='underline italic cursor-pointer'>See All</Link>
      <div className="event-cards flex">
        
      </div>
    </div>
    </>
  )
}

export default BrowseEventsMain
