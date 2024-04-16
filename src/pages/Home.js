import React from "react"
import Slider from "../components/Slider"
import SearchBar from "../components/SearchBar"

const Home = ({ apartments }) => {
	return (
		<div>
			<div>
				<div className="home-image">
					<div className="home-image-text">
						<h2 className="home-text-h2">Find Your New Flat</h2>
						<h3 className="home-text-h3">
							Rent, Buy, Sell in just a few clicks
							<div className="home-search-bar-container">
								<SearchBar />
							</div>
						</h3>
					</div>
				</div>
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
