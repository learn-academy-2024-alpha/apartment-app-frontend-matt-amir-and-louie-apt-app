import React from "react"
import IconCross from "./../Icons/IconCross"
import NavButton from "../NavButton"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"
import { FaPoundSign } from "react-icons/fa"
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
						<h3>
							<span className="icon icon-pound">
								<FaPoundSign />
							</span>
							{apartment.price}
						</h3>
						<h5>
							<span className="icon">
								<ImLocation2 />
							</span>
							{apartment.unit} {apartment.street},
						</h5>
						<h5>
							<span className="icon icon-hidden">
								<ImLocation2 />
							</span>
							{apartment.city}, {apartment.state}
						</h5>
						<h5>
							<span className="icon">
								<FaHouse />
							</span>
							{apartment.square_footage} sq.ft.
						</h5>
						<h5>
							<span className="icon">
								<FaBed />
							</span>
							{apartment.bedrooms} bed | {apartment.bathrooms} bath
						</h5>
						<h5>
							<span className="icon">
								<FaDog />
							</span>{" "}
							Pets allowed: {apartment.pets}
						</h5>
						<div className="content-button">
							<NavButton
								url={`/apartment/${apartment.id}`}
								buttonContent="See More"
							/>
						</div>
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
