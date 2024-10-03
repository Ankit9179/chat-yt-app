// import React from "react"
// import Login from './pages/login/Login.jsx'
// import SignUp from './pages/signUp/SignUp.jsx'
// import Home from './pages/home/Home.jsx'
// import { Navigate, Route, Routes } from "react-router-dom"
// import { Toaster } from 'react-hot-toast'
// import { useAuthContext } from "./context/AuthContext.jsx"
// import Header from "./pages/Header.jsx"
// import Footer from "./pages/Footer.jsx"

// function App() {
//   const { authUser } = useAuthContext();
//   return (
//     <div className="flex items-center justify-center h-screen p-4">
//       <Header />
//       <Routes>
//         <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'} />} />
//         <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login />} />
//         <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <SignUp />} />
//       </Routes>
//       <Footer />
//       <Toaster />
//     </div>
//   )
// }

// export default App


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import Home from "./pages/home/Home.jsx";
import Hero from "./components/heroSections/Hero.jsx";
import Jokes from "./pages/Jokes.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="chats-with-friends" element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

