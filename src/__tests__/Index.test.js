import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Index from "../pages/Index" // Adjust import to match your component
import mockApartments from "../mockApartments"

describe("Index component", () => {
  test("renders Index component with apartments", () => {
    render(
      <BrowserRouter>
        <Index apartments={mockApartments} />
      </BrowserRouter>
    )

    const indexHeader = screen.getByText(/Flat Listings/)
    expect(indexHeader).toBeInTheDocument()

    const apartmentImages = screen.getAllByAltText(
      "sneak peek of the apartment"
    )
    expect(apartmentImages).toHaveLength(mockApartments.length)

    const seeMoreButtons = screen.getAllByText("See More")
    expect(seeMoreButtons).toHaveLength(mockApartments.length)

    mockApartments.forEach((apartment) => {
      const cityAndStateText = `${apartment.city}, ${apartment.state}`
      const bedroomsText = `${apartment.bedrooms} bedrooms`

      const cityAndStateElements = screen.queryAllByText(cityAndStateText)
      const bedroomsElements = screen.queryAllByText(bedroomsText)

      expect(cityAndStateElements.length).toBeGreaterThan(0)
      expect(bedroomsElements.length).toBeGreaterThan(0)

      cityAndStateElements.forEach((element) => {
        expect(element).toBeInTheDocument()
      })

      bedroomsElements.forEach((element) => {
        expect(element).toBeInTheDocument()
      })
    })
  })

  test("renders Index component without any apartments", () => {
    render(
      <BrowserRouter>
        <Index apartments={[]} />
      </BrowserRouter>
    )
    const indexHeader = screen.getByText(/Flat Listings/)
    expect(indexHeader).toBeInTheDocument()
  })
})
