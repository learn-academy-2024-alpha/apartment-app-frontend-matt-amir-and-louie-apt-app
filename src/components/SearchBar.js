import React from "react"

const SearchBar = ({ keyword, setKeyword }) => {
	const BarStyling = {
		width: "15rem",
		height: "2rem",
		background: "#F2F1F9",
		border: "none",
		padding: "0.5rem",
		marginTop: "22px",
		marginBottom: "75px",
		borderRadius: "25px",
	}
	return (
		<input
			style={BarStyling}
			key="random1"
			value={keyword}
			placeholder={"search apartments"}
			onChange={(e) => setKeyword(e.target.value)}
		/>
	)
}

export default SearchBar
