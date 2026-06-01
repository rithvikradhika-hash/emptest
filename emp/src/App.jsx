import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Forgopassword from './components/Forgotpassword'
function App() {
  return(
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/forgotpassword" element={<Forgopassword />} />
   </Routes>
  )
}

export default App
