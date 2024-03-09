import React from "react"
import { Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"
import { Search } from "./pages/Search"
import Navbar from "./components/Navbar"
import { MovieDetails } from "./pages/MovieDetails"
import Trailer from "./components/Trailer"
import { HomeProtected } from "./components/ProtectedRoute/HomeProtected"
import { Profile } from "./pages/Profile"
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeProtected><Home /></HomeProtected>} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/search" element={<HomeProtected><Search /></HomeProtected>} />
      <Route path="/details/:id" element={<HomeProtected><MovieDetails /></HomeProtected>} />
      <Route path="/profile" element={<HomeProtected><Profile /></HomeProtected>} />
    </Routes>
    </>
  )
}

export default App
