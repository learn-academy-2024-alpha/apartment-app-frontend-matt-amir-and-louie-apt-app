import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import Logo from "../assets/FlatFinderLogo.png"

const Header = () => {
  return (
    <Nav className="me-auto">
      <div className="header-navlink-left">
        <NavLink className="navlink" href="/components/">
          Rent
        </NavLink>
        <NavLink className="navlink">Buy</NavLink>
        <NavLink className="navlink">Sell</NavLink>
      </div>
      <div>
        <NavLink to="/">
          <img
            className="header-logo-center"
            src={Logo}
            alt="flat finders logo"
          />
        </NavLink>
      </div>
      <div className="header-navlink-right">
        <NavLink className="navlink">Sign in</NavLink>
      </div>
    </Nav>
  )
}

export default Header
