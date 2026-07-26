import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './PAGES/SignUp'
import LogIn from './PAGES/LogIn'
import MainInterface from './PAGES/MainInterface'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/" element={<MainInterface/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
