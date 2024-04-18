import React from "react"
// used to apply dynamic classes depending on a components state
import cx from "classnames"
// imports state and handling from a higher component
import SliderContext from "./context"
import ShowDetailsButton from "./ShowDetailsButton"
import Mark from "./Mark"
import "./Item.css"

const Item = ({ apartment }) => (
	<SliderContext.Consumer>
		{({ onSelectSlide, currentSlide, elementRef }) => {
			// checks to see if the current slide has the same id as the apartment id
			const isActive = currentSlide && currentSlide.id === apartment.id

			return (
				<div
					// sets slides dimensions
					ref={elementRef}
					// dynamic css class name
					className={cx("item", {
						"item-open": isActive,
					})}
				>
					<img src={apartment.image} alt="" />
					{/* handles the styling of when the slide is clicked and updates state */}
					<ShowDetailsButton onClick={() => onSelectSlide(apartment)} />
					{/* sets the slide to appear marked when clicked */}
					{isActive && <Mark />}
				</div>
			)
		}}
	</SliderContext.Consumer>
)

export default Item
