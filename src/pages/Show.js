import NavButton from "../components/NavButton"
import { useParams, useNavigate } from "react-router-dom"

const Show = ({ apartments, deleteApartment, user }) => {
	const navigate = useNavigate()
	const { id } = useParams()
	console.log("apartments:", apartments)
	const apartment = apartments.find((item) => item.id === +id)
	console.log("apartment:", apartment)
	// const handleDeleteApartment = () => {
	//   deleteApartment(apartment.id)
	//   navigate("/apartments")
	// }
	return (
		<>
			<h3 className="title-header center-content">Apartment Details</h3>
			<div className="show-apartment">
				<div>
					<img
						src={apartment.image}
						alt="apartment"
						className="show-apartment-image"
					/>
				</div>
				<div className="apartment-details">
					<h5 className="apartment-text-h5">${apartment.price}</h5>
					<p className="apartment-text-p">
						{apartment.street}, {apartment.unit}, {apartment.city},{" "}
						{apartment.state}
					</p>
					<p className="apartment-text-p">
						{apartment.bedrooms} bedrooms | {apartment.bathrooms} bathrooms
					</p>
					<p className="apartment-text-p">
						{apartment.square_footage} square feet
					</p>
					<p className="apartment-text-p">Pet policy: {apartment.pets}</p>
				</div>
			</div>
			<br />
			<div className="center-content">
				{user && (
					<NavButton
						url={`/apartment-edit/${apartment.id}`}
						buttonContent="Edit Apartment"
					/>
				)}
				{/* {user && (
          <button className="nav-button" onClick={handleDeleteApartment}>
            Delete Apartment
          </button>
        )} */}
				<NavButton url="/apartments" buttonContent="Back to All Apartments" />
			</div>
		</>
	)
}

export default Show