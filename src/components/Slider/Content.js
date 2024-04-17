import React from "react"
import IconCross from "./../Icons/IconCross"
import "./Content.css"

const Content = ({ apartment, onClose }) => {
	return (
		<div className="content">
			<div className="content-background">
				<div className="content-background-shadow" />
				<div
					className="content-background-image"
					style={{ backgroundImage: `url(${apartment.image})` }}
				/>
			</div>
			<div className="content-area">
				<div className="content-area-container">
					<div className="content-title">{apartment.street}</div>
					<div className="content-description">
						<h5>
							{apartment.unit} {apartment.street},
						</h5>
						<h5>
							{apartment.city}, {apartment.state}
						</h5>
						<h5>{apartment.square_footage} sq.ft.</h5>
						<h5>£{apartment.price}</h5>
						<h5>
							{apartment.bedrooms} bed | {apartment.bathrooms} bath
						</h5>
						<h5> Pets allowed: {apartment.pets}</h5>
					</div>
				</div>
				<button className="content-close" onClick={onClose}>
					<IconCross />
				</button>
			</div>
		</div>
	)
}
export default Content
