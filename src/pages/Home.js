import React from "react";
// import Slider from "../components/Slider"
import { CarouselComponent } from "../components/Carousel";

const Home = () => {
	return (
		<div>
			<div>
				<div className="home-image">
					<div className="home-image-text">
						<div className="home-carousel-container">
							<CarouselComponent />
						</div>
					</div>
				</div>
			</div>
			{/* {apartments.length > 0 && (
				<Slider apartments={apartments}>
					{apartments.map((apartment) => (
						<Slider.Item apartment={apartment} key={apartment.id}></Slider.Item>
					))}
				</Slider>
			)} */}
		</div>
	);
};

export default Home;
