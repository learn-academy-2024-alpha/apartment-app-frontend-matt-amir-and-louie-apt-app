import React from "react"
import apartment5 from "../assets/apartments/apartment5.avif"
import Slider from "../components/Slider"

const Home = ({ apartments }) => {
	return (
		<div>
			<div className="home-img-container">
				<img
					className="home-image"
					src={apartment5}
					alt="brown apartment buildings"
				/>
			</div>
			<Slider>
				{apartments.map(
					(apartment) => (
						<Slider.Item apartment={apartment} key={apartment.id}></Slider.Item>
					),
					console.log(apartments)
				)}
			</Slider>
		</div>
	)
}

export default Home
