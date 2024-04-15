import React from "react"
import Carousel from "../components/Carousel"

const Home = () => {
	return (
		<div>
			<div className="main-carousel-container">
				<Carousel />
			</div>
			<div className="apartment-slider-container">
				<div className="apartment1"></div>
				<div className="apartment2"></div>
				<div className="apartment3"></div>
				<div className="apartment4"></div>
				<div className="apartment5"></div>
				<div className="apartment6"></div>
			</div>
		</div>
	)
}

export default Home
