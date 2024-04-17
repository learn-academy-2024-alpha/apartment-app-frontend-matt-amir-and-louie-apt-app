import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <header>
      <div className="not-found-text-container">
        <h2 className="not-found-h2">
          Oops it looks like this flat is still under construction...
        </h2>
        <h3 className="not-found-h3">Lets look at some finished flats</h3>
        <NavLink className="not-found-button" to="/">
          HOME
        </NavLink>
      </div>
    </header>
  )
}

export default NotFound
