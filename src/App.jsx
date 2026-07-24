import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './PAGES/SignUp'
import LogIn from './PAGES/LogIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
