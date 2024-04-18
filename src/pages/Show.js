import NavButton from "../components/NavButton"
import { useParams, useNavigate } from "react-router-dom"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"
import { FaPoundSign } from "react-icons/fa"

const Show = ({ apartments, user }) => {
	const navigate = useNavigate()
	const { id } = useParams()
	const apartment = apartments.find((item) => item.id === +id)
	return (
		<>
			<h3 className="title-header center-content">Flat Details</h3>
			<div className="show-apartment">
				<div>
					<img
						src={apartment.image}
						alt="apartment"
						className="show-apartment-image"
					/>
				</div>
				<div className="apartment-details">
					<h4 className="apartment-text-h4">
						<span className="icon icon-pound">
							<FaPoundSign />
						</span>
						{apartment.price}
					</h4>
					<p className="apartment-text-p">
						<span className="icon">
							<ImLocation2 />
						</span>
						{apartment.unit}, {apartment.street}
						<p>
							<span className="icon icon-hidden">
								<ImLocation2 />
							</span>
							{apartment.city}
							{apartment.state}
						</p>
					</p>
					<p className="apartment-text-p">
						<span className="icon">
							<FaBed />
						</span>
						{apartment.bedrooms} bedrooms | {apartment.bathrooms} bathrooms
					</p>
					<p className="apartment-text-p">
						<span className="icon">
							<FaHouse />
						</span>
						{apartment.square_footage} sq.ft.
					</p>
					<p className="apartment-text-p">
						<span className="icon">
							<FaDog />
						</span>
						Pet policy: {apartment.pets}
					</p>
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
				<NavButton url="/index" buttonContent="Back to All Flats" />
			</div>
		</>
	)
}

export default Show
