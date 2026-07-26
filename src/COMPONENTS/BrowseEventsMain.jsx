import React from 'react'
import {Link} from 'react-router-dom';

function BrowseEventsMain() {
  return (
    <>
    <div className='wrapper py-15'>
      <h1 className='text-3xl font-bold text-[#242424]'>Browse Events</h1>
      <Link to={''} className='underline italic cursor-pointer'>See All</Link>
      <div className="event-cards flex">
        
      </div>
    </div>
    </>
  )
}

export default BrowseEventsMain
