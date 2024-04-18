import React from "react"
import { FaBed } from "react-icons/fa"
import { ImLocation2 } from "react-icons/im"
import NavButton from "../components/NavButton"

const Index = ({ apartments }) => {
	return (
		<div className="center-content">
			<h3 className="title-header">Flat Listings</h3>
			<div className="index-cards-set">
				{apartments.map((apartment) => {
					return (
						<div key={apartment.id} className="card">
							<div className="index-profile-image">
								<img
									alt="sneak peek of the apartment"
									src={apartment.image}
									className="index-apartment-image"
								/>
							</div>
							<div>
								<h6>
									<span className="icon">
										<ImLocation2 />
									</span>
									{apartment.city}, {apartment.state}
								</h6>
								<h6>
									<span className="icon">
										<FaBed />
									</span>
									{apartment.bedrooms} bedrooms
								</h6>
								<div className="button-div">
									<NavButton
										url={`/apartment/${apartment.id}`}
										buttonContent="See More"
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Index
