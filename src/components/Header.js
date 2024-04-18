import React from "react"
import { Nav } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/logos/FlatFinderLogo.png"
import NavButton from "./NavButton"

const Header = ({ logOut, user }) => {
	const navigate = useNavigate()

	const handleLogOut = () => {
		logOut()
		navigate("/")
	}
	return (
		<Nav className="me-auto">
			<div className="header-navlink-left">
				<NavLink className="navlink" to="/index">
					Rent Flat
				</NavLink>
				{!user && (
					<NavLink to="/signup" className="navlink">
						Create Listing
					</NavLink>
				)}
				{user && (
					<NavLink className="navlink" to="/new">
						Create A Listing
					</NavLink>
				)}
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
				{user && (
					<NavLink to="/MyFlats" className="navlink">
						Manage Flats
					</NavLink>
				)}
				{!user && (
					<NavLink to="/signin" className="navlink">
						Sign In
					</NavLink>
				)}
				{!user && <NavButton url="/signup" buttonContent="Sign Up" />}
				{user && (
					<button className="nav-button" onClick={handleLogOut}>
						Log Out
					</button>
				)}
			</div>
		</Nav>
	)
}

export default Header
