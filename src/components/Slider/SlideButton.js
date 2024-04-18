import React, { useState, useEffect } from "react"
import IconArrowDown from "./../Icons/IconArrowDown"
import "./SlideButtonRight.css"
import "./SlideButtonLeft.css"
import classNames from "classnames"

const SlideButton = ({ onClick }) => {
	const [isClicked, setIsClicked] = useState(false)

	// useEffect(() => {
	// 	const checkForClick = localStorage.getItem("isClicked")
	// 	if (checkForClick) setIsClicked(JSON.parse(checkForClick))
	// }, [])

	const handleToggle = () => {
		setIsClicked(!isClicked)
	}
	const conditionalStyles = classNames("SlideButton", {
		"slide-button-left": isClicked,
		"slide-button-right": !isClicked,
	})
	return (
		<button
			className={conditionalStyles}
			onClick={() => {
				handleToggle()
				onClick()
			}}
		>
			<span>
				<IconArrowDown />
			</span>
		</button>
	)
}

export default SlideButton
