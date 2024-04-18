import React from "react"
import { NavLink } from "react-router-dom"

const SearchBar = ({ keyword, setKeyword }) => {
	const BarStyling = {
		width: "15rem",
		height: "2rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem",
		marginTop: "22px",
		marginBottom: "75px",
		borderRadius: "10px",
	}
	const ButtonStyling = {
		borderRadius: "10px",
		backgroundColor: "#0582cc",
		border: "hidden",
		color: "#e4b539",
		textShadow: "#000000 10px 10px 20px",
		height: "45px",
		fontWeight: "800",
		marginLeft: "10px",
		marginTop: "20px",
	}
	return (
		<>
			<input
				style={BarStyling}
				key="random1"
				value={keyword}
				placeholder={"London, UK"}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<a className="search-button btn" style={ButtonStyling} href="/index">
				Search
			</a>
		</>
	)
}

export default SearchBar
