import React, { useState } from "react"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"
import Header from "./components/Header.js"
import "./App.css"
import Footer from "./components/Footer.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
