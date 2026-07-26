import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './PAGES/SignUp'
import LogIn from './PAGES/LogIn'
import MainInterface from './PAGES/MainInterface'
import AllEvents from './PAGES/AllEvents'
import PostEvent from './PAGES/PostEvent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/" element={<MainInterface/>}/>
        <Route path="all-events" element={<AllEvents/>}/>
        <Route path="post-event" element={<PostEvent/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
