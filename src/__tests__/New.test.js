import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import New from "../pages/New"

test("renders New component", () => {
  render(
    <BrowserRouter>
      <New />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Add a New Listing/)
  expect(signInTitle).toBeInTheDocument()

  const streetLabel = screen.getByLabelText("Street Name")
  expect(streetLabel).toBeInTheDocument()

  const unit = screen.getByLabelText(/Unit/)
  expect(unit).toBeInTheDocument()

  const cityLabel = screen.getByLabelText("City")
  expect(cityLabel).toBeInTheDocument()

  const stateLabel = screen.getByLabelText("Country")
  expect(stateLabel).toBeInTheDocument()

  const squareFootageLabel = screen.getByLabelText("Square Footage")
  expect(squareFootageLabel).toBeInTheDocument()

  const price = screen.getByLabelText(/Monthly Rental Price/)
  expect(price).toBeInTheDocument()

  const bedrooms = screen.getByLabelText(/Bedrooms/)
  expect(bedrooms).toBeInTheDocument()

  const bathrooms = screen.getByLabelText(/Bathrooms/)
  expect(bathrooms).toBeInTheDocument()

  const pets = screen.getByLabelText(/Pet Policy/)
  expect(pets).toBeInTheDocument()

  const image = screen.getByLabelText(/Image URL/)
  expect(image).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
