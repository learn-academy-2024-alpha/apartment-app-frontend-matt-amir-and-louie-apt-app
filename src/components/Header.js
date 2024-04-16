import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import Logo from "../assets/logos/FlatFinderLogo.png"
import SearchBar from "./SearchBar"

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
