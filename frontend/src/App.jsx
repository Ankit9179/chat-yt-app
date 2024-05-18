import React from "react"
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import Home from './pages/home/Home.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext.jsx"

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
