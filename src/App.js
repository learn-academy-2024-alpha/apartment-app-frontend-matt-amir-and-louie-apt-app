import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import "./App.css"
import NotFound from "./pages/NotFound.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home apartments={mockApartments} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
