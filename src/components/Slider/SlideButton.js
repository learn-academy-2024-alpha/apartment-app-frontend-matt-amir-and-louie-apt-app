import React from "react"
import IconArrowDown from "./../Icons/IconArrowDown"
import "./SlideButton.css"

const SlideButton = ({ onClick }) => {
	return (
		<button className="slide-button" onClick={onClick}>
			<span>
				<IconArrowDown />
			</span>
		</button>
	)
}

export default SlideButton
