import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment, user }) => {
	const navigate = useNavigate()
	const preloadedValues = {
		street: "Baker Street",
		unit: "221b",
		city: "London",
		state: "England",
		square_footage: 1525,
		price: "3000",
		bedrooms: 2,
		bathrooms: 1.0,
		pets: "pets okay with deposit",
		image:
			"https://selenestudiesabroad.files.wordpress.com/2014/01/img_7327.jpg",
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: preloadedValues })

	const onSubmit = (newApartment) => {
		newApartment.user_id = user.id
		createApartment(newApartment)
		navigate("/myFlats")
	}

	return (
		<div className="page-body">
			<h3 className="title-header center-content">Add a New Listing</h3>
			<Form onSubmit={handleSubmit(onSubmit)} className="form-size">
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="unit">Unit</Label>
							<input
								id="unit"
								name="unit"
								placeholder="Unit"
								type="text"
								className="form-control"
								{...register("unit", { required: true })}
							/>
							{errors.unit && (
								<span className="form-validations">Unit is required</span>
							)}
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="street">Street Name</Label>
							<input
								id="street"
								name="street"
								placeholder="Street Address"
								type="text"
								className="form-control"
								{...register("street", { required: true })}
							/>
							{errors.street && (
								<span className="form-validations">Address is required</span>
							)}
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="city">City</Label>
							<input
								id="city"
								name="city"
								placeholder="City"
								type="text"
								className="form-control"
								{...register("city", { required: true })}
							/>
							{errors.city && (
								<span className="form-validations">City is required</span>
							)}
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="state">Country</Label>
							<input
								id="state"
								name="state"
								placeholder="State"
								type="text"
								className="form-control"
								{...register("state", { required: true })}
							/>
							{errors.state && (
								<span className="form-validations">State is required</span>
							)}
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="square_footage">Square Footage</Label>
							<input
								id="square_footage"
								name="square_footage"
								placeholder="Square Footage"
								type="number"
								min="0"
								className="form-control"
								{...register("square_footage", { required: true })}
							/>
							{errors.square_footage && (
								<span className="form-validations">
									Square Footage is required
								</span>
							)}
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="price">Monthly Rental Price</Label>
							<input
								id="price"
								name="price"
								placeholder="Price"
								type="text"
								className="form-control"
								{...register("price", { required: true })}
							/>
							{errors.price && (
								<span className="form-validations">Price is required</span>
							)}
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="bedrooms">Bedrooms</Label>
							<input
								id="bedrooms"
								name="bedrooms"
								placeholder="Bedrooms"
								type="number"
								min="0"
								className="form-control"
								{...register("bedrooms", { required: true })}
							/>
							{errors.bedrooms && (
								<span className="form-validations">Bedrooms is required</span>
							)}
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="bathrooms">Bathrooms</Label>
							<input
								id="bathrooms"
								name="bathrooms"
								placeholder="Bathrooms"
								type="number"
								min="0"
								className="form-control"
								{...register("bathrooms", { required: true })}
							/>
							{errors.bathrooms && (
								<span className="form-validations">Bathrooms is required</span>
							)}
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label for="pets">Pet Policy</Label>
					<input
						id="pets"
						name="pets"
						placeholder="Pets"
						type="text"
						className="form-control"
						{...register("pets", { required: true })}
					/>
					{errors.pets && (
						<span className="form-validations">Pets is required</span>
					)}
				</FormGroup>
				<FormGroup>
					<Label for="image">Image URL</Label>
					<input
						id="image"
						name="image"
						placeholder="Image"
						type="text"
						className="form-control"
						{...register("image", { required: true })}
					/>
					{errors.image && (
						<span className="form-validations">Image is required</span>
					)}
				</FormGroup>
				<div className="center-content">
					<button onClick={handleSubmit} className="nav-button">
						Submit
					</button>
				</div>
			</Form>
		</div>
	)
}

export default ApartmentNew
