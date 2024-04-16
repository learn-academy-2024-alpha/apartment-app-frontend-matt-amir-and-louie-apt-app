import React from "react"
import Logo from "../assets/logos/Footerlogo.png"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-bar">
      <div>
        <p className="footer-text">
          &copy; Matt | Amir | Louie | LEARN Academy Alpha 2024
        </p>
      </div>
      <div>
        <NavLink to="/">
          <img
            className="footer-logo"
            src={Logo}
            alt="roof tops with sun behind it"
          />
        </NavLink>
      </div>
    </div>
  )
}

export default Footer
