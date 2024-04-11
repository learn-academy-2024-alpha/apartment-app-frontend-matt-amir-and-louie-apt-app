import React, { useState } from "react"
import mockApartments from "./mockApartments.js"
import mockUsers from "./mockUsers.js"
const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <h3>Flat Finder</h3>
    </>
  )
}

export default App
