import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './PAGES/SignUp'
import LogIn from './PAGES/LogIn'
import MainInterface from './PAGES/MainInterface'
import AllEvents from './PAGES/AllEvents'
import PostEvent from './PAGES/PostEvent'
import POSTEVENTCOMP from './COMPONENTS/POSTEVENTCOMP'
import APPROVEDEVENT from './COMPONENTS/APPROVEDEVENT'
import EVENTSPENDING from './COMPONENTS/EVENTSPENDING'
import DASHBOARDHOME from './COMPONENTS/DASHBOARDHOME'
import LOGOUT from './COMPONENTS/LOGOUT'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/" element={<MainInterface/>}/>
        <Route path="/all-events" element={<AllEvents/>}/>
        {/* nested routes  */}
        <Route path="/organizer-dashboard" element={<PostEvent/>}>
        <Route index element={<DASHBOARDHOME/>}/>
        <Route path="create-event" element={<POSTEVENTCOMP/>}/>
        <Route path='approved-event' element={<APPROVEDEVENT/>}/>
        <Route path='event-pending' element={<EVENTSPENDING/>}/>
        <Route path='logout' element={<LOGOUT/>}/>
        </Route>
        {/* nested routes  */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
