import React, { useEffect, useState } from 'react'
import axios from 'axios'


function EVENTSPENDING() {
  const [event,setEvent] = useState([]);
  async function fetchEvents (){
    const res = await axios.get("http://localhost:5000/api/events");
    console.log(res.data);
    setEvent(res.data)
  }

  useEffect(()=>{
    fetchEvents();
  },[]);



  return (
    <>
    <div className='main h-[100dvh] bg-gray-100'>
      <div className='p-6'>
        <h1 className='font-medium text-2xl italic'>Events Pending For Approval</h1>
      </div>
    </div>
    </>
  )
}

export default EVENTSPENDING
