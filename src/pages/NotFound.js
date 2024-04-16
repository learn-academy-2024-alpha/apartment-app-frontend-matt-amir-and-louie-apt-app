import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <div className="not-found-text-container">
        <h2 className="not-found-text">
          Oops it looks like this apartment is still under construction...
        </h2>
        <h3 className="not-found-text">
          Lets look at some finished apartments
        </h3>
        <NavLink className="navlink"></NavLink>
      </div>
      <div className="not-found-image-container">
        <img
          src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/0b66476b-cefe-45ca-9feb-45dd2ed7665a/b5fd053d-dcae-43cb-af28-29c3e6a7677a.png"
          alt="apartment is under construction"
        />
      </div>
    </div>
  )
}

export default NotFound
