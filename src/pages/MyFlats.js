import NavButton from "../components/NavButton"
import footerLogo from "../assets/logos/Footerlogo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"

const MyFlats = ({ apartments, user, deleteApartment }) => {
	const navigate = useNavigate()
	const myApartments = apartments?.filter((apt) => apt.user_id === user.id)

	const handleDeleteApartment = (id) => {
		alert("Are you sure you want to delete this apartment?")
		deleteApartment(id)
		navigate("/myFlats")
	}
	return (
		<div className="page-body center-content">
			<h3 className="title-header">My Flats</h3>
			{apartments?.length === 0 && (
				<div className="blank-page-height">
					<NavLink to="/">
						<img
							src={footerLogo}
							alt="small apartment app logo"
							className="footer-logo"
						/>
					</NavLink>
					<h5>You don't have any Flats listed.</h5>
				</div>
			)}
			<NavButton url="/new" buttonContent="add a Flat" />
			<div className="index-cards-set">
				{myApartments?.map((apartment) => {
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
								<div>
									<h6>
										<span className="icon">
											<ImLocation2 />
										</span>
										{apartment.unit}, {apartment.street}
									</h6>
								</div>
								<h6>
									<span className="icon icon-hidden">
										<ImLocation2 />
									</span>
									{apartment.city}, {apartment.state}
								</h6>
								<h6>
									<span className="icon">
										<FaBed />
									</span>
									{apartment.bedrooms} bed | {apartment.bathrooms} bath
								</h6>
								<h6>
									<span className="icon">
										<FaHouse />
									</span>
									{apartment.square_footage} sq.ft.
								</h6>
								<h6>
									<span className="icon">
										<FaDog />
									</span>
									Pet policy: {apartment.pets}
								</h6>
								<NavButton
									url={`/apartment-edit/${apartment.id}`}
									buttonContent="edit"
								/>
								<button
									className="nav-button"
									onClick={() => handleDeleteApartment(apartment.id)}
								>
									delete
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MyFlats
