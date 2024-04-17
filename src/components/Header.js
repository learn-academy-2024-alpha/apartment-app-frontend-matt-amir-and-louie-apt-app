import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import Logo from "../assets/logos/FlatFinderLogo.png"

const Header = () => {
	return (
		<Nav className="me-auto">
			<div className="header-navlink-left">
				<NavLink className="navlink" to="./index">
					Rent
				</NavLink>
				<NavLink className="navlink">List</NavLink>
				<NavLink className="navlink">Manage</NavLink>
			</div>
			<div className="logo-container">
				<NavLink to="/">
					<img
						className="header-logo-center"
						src={Logo}
						alt="flat finders logo"
					/>
				</NavLink>
			</div>
			<div className="header-navlink-right">
				<NavLink className="navlink">Sign Up</NavLink>
				<NavLink className="navlink sign-in">Sign In</NavLink>
				<NavLink className="navlink">Logout</NavLink>
			</div>
		</Nav>
	)
}

export default Header
