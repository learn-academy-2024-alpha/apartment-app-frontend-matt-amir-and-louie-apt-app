import React from "react"
import IconCross from "./../Icons/IconCross"
import "./Content.css"

const Content = ({ apartment, onClose }) => (
	<div className="content">
		<div className="content-background">
			<div className="content-background-shadow" />
			<div
				className="content-background-image"
				style={{ "background-image": `url(${apartment.image})` }}
			/>
		</div>
		<div className="content-area">
			<div className="content-area-container">
				<div className="content-title">{apartment.street}</div>
				<div className="content-description">
					<h4>
						{apartment.street},{apartment.unit},{apartment.city},
						{apartment.state}
					</h4>
					<h4>{apartment.square_footage}</h4>
					<h4>{apartment.price}</h4>
					<h4>{apartment.bedrooms}</h4>
					<h4>{apartment.bathrooms}</h4>
					<h4>{apartment.pets}</h4>
					<h4>{apartment.pets}</h4>
				</div>
			</div>
			<button className="content-close" onClick={onClose}>
				<IconCross />
			</button>
		</div>
	</div>
)

export default Content
