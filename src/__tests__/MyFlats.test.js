import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyFlats from "../pages/MyFlats"
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers"

test("renders MyFlats component", async () => {
  render(
    <BrowserRouter>
      <MyFlats apartments={mockApartments} user={mockUsers[0]} />
    </BrowserRouter>
  )

  const myFlats = mockApartments.filter(
    (apt) => apt.user_id === mockUsers[0].id
  )

  const indexHeader = screen.getByText(/My Flats/)
  expect(indexHeader).toBeInTheDocument()

  const apartmentImage = screen.getAllByAltText("sneak peek of the apartment")
  expect(apartmentImage).toHaveLength(myFlats.length)

  const editButton = screen.getAllByText("edit")
  expect(editButton).toHaveLength(myFlats.length)

  const deleteButton = screen.getAllByText("delete")
  expect(deleteButton).toHaveLength(myFlats.length)

  myFlats.forEach((apartment) => {
    const bedroomsAndBathroomsElements = screen.queryAllByText(
      `${apartment.bedrooms} bedrooms | ${apartment.bathrooms} bathrooms`
    )

    const isBedroomsAndBathroomsPresent = bedroomsAndBathroomsElements.some(
      (element) =>
        element.textContent.includes(
          `${apartment.bedrooms} bedrooms | ${apartment.bathrooms} bathrooms`
        )
    )

    expect(bedroomsAndBathroomsElements).toHaveLength(0)

    const squareFootage = screen.getByText(
      `${apartment.square_footage} square feet`
    )
    expect(squareFootage).toBeInTheDocument()

    const petsElements = screen.queryAllByText(`Pet policy: ${apartment.pets}`)
    expect(petsElements.length).toBeGreaterThan(0)
  })
})

test("renders without any apartments", () => {
  render(
    <BrowserRouter>
      <MyFlats apartments={[]} />
    </BrowserRouter>
  )

  const noApartments = screen.getByText("You don't have any Flats listed.")
  expect(noApartments).toBeInTheDocument()

  const footerLogo = screen.getByAltText("small apartment app logo")
  expect(footerLogo).toBeInTheDocument()
  expect(
    screen.getByRole("link", { name: "small apartment app logo" })
  ).toHaveAttribute("href", "/")

  const addApartmentButton = screen.getByText(/add an apartment/i)
  expect(addApartmentButton).toBeInTheDocument()
})
