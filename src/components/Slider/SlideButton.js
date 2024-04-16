import React from "react"
import IconArrowDown from "./../Icons/IconArrowDown"
import "./SlideButton.css"

const SlideButton = ({ onClick }) => (
	<button className="slide-button slide-button-prev" onClick={onClick}>
		<span>
			<IconArrowDown />
		</span>
	</button>
)

export default SlideButton
