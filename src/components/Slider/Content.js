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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
					eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
					quis quam congue, non fringilla orci placerat. Praesent sollicitudin
				</div>
			</div>
			<button className="content-close" onClick={onClose}>
				<IconCross />
			</button>
		</div>
	</div>
)

export default Content
