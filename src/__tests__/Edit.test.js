import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Edit from "../pages/Edit.js"
import mockApartments from "../mockApartments.js"
import mockUsers from "../mockUsers"

test("renders ApartmentEdit component", () => {
  render(
    <MemoryRouter initialEntries={["/apartment-edit/1"]}>
      <Routes>
        <Route
          path="/apartment-edit/:id"
          element={<Edit apartments={mockApartments} user={mockUsers} />}
        />
      </Routes>
    </MemoryRouter>
  )
  const apartment = mockApartments.find((item) => item.id === mockUsers[0].id)

  const signInTitle = screen.getByText(/Edit Your Listing/)
  expect(signInTitle).toBeInTheDocument()

  const street = screen.getByLabelText(/Street Address/)
  expect(street).toBeInTheDocument()
  const streetValue = screen.getByDisplayValue(apartment.street)
  expect(streetValue).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()
  const unitValue = screen.getByDisplayValue(apartment.unit)
  expect(unitValue).toBeInTheDocument()

  const city = screen.getByLabelText(/City/)
  expect(city).toBeInTheDocument()
  const cityValue = screen.getByDisplayValue(apartment.city)
  expect(cityValue).toBeInTheDocument()

  const state = screen.getByLabelText(/State/)
  expect(state).toBeInTheDocument()
  const stateValue = screen.getByDisplayValue(apartment.state)
  expect(stateValue).toBeInTheDocument()

  const squareFootage = screen.getByLabelText(/Square Footage/)
  expect(squareFootage).toBeInTheDocument()
  const sqfootValue = screen.getByDisplayValue(apartment.square_footage)
  expect(sqfootValue).toBeInTheDocument()

  const price = screen.getByLabelText(/Monthly Rental Price/)
  expect(price).toBeInTheDocument()
  const priceValue = screen.getByDisplayValue(apartment.price)
  expect(priceValue).toBeInTheDocument()

  const bedroomValues = screen.getAllByDisplayValue(apartment.bedrooms)
  expect(bedroomValues.length).toBeGreaterThan(0)
  expect(bedroomValues[0]).toBeInTheDocument()

  const bathroomValues = screen.getAllByDisplayValue(apartment.bathrooms)
  expect(bathroomValues.length).toBeGreaterThan(0)
  expect(bathroomValues[0]).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pet Policy/)
  expect(pets).toBeInTheDocument()
  const petValue = screen.getByDisplayValue(apartment.pets)
  expect(petValue).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()
  const imageValue = screen.getByDisplayValue(apartment.image)
  expect(imageValue).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
