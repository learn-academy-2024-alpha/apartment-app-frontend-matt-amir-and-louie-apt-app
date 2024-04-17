import React from "react"
import { Nav } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/logos/FlatFinderLogo.png"

const Header = ({ logOut }) => {
	const navigate = useNavigate()

	const handleLogOut = () => {
		logOut()
		navigate("/")
	}
	return (
		<Nav className="me-auto">
			<div className="header-navlink-left">
				<NavLink className="navlink" to="/index">
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
				<NavLink className="navlink" to="/signup">
					Sign Up
				</NavLink>
				<NavLink className="navlink" to="/signin">
					Sign In
				</NavLink>
				<NavLink className="navlink" to="/" onClick={handleLogOut}>
					Logout
				</NavLink>
			</div>
		</Nav>
	)
}

export default Header
