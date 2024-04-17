import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import Show from "../pages/Show"
import mockApartments from "../mockApartments.js"

test("renders Show component", () => {
  render(
    <MemoryRouter initialEntries={["/apartment/1"]}>
      <Routes>
        <Route
          path="/apartment/:id"
          element={<Show apartments={mockApartments} />}
        />
      </Routes>
    </MemoryRouter>
  )
  const apartment = mockApartments.find((item) => item.id === 1)

  const apartmentImage = screen.getByAltText("apartment")
  expect(apartmentImage).toBeInTheDocument()
  expect(apartmentImage).toHaveAttribute("src", apartment.image)

  const apartmentPrice = screen.getByText(/1800/)
  expect(apartmentPrice).toBeInTheDocument()

  const address = screen.getByText(/9A, Oaklands Road, London, England/)
  expect(address).toBeInTheDocument()

  const bedAndBath = screen.getByText(/2 bedrooms | 2 bathrooms/)
  expect(bedAndBath).toBeInTheDocument()

  const squareFootage = screen.getByText(/500 sq.ft./)
  expect(squareFootage).toBeInTheDocument()

  const pets = screen.getByText(/Pet policy: yes!/)
  expect(pets).toBeInTheDocument()
})
