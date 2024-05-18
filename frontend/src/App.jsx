import React from "react"
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import Home from './pages/home/Home.jsx'
import { Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
