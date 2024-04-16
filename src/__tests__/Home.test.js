import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import apartment from "../assets/apartments/apartment5.avif"
import mockApartments from "../mockApartments.js"

test("renders home component", () => {
  render(
    <BrowserRouter>
      <Home apartments={mockApartments} />
    </BrowserRouter>
  )

  const searchBar = screen.getByPlaceholderText("search flats")
  expect(searchBar).toBeInTheDocument()

  const searchButton = screen.getByRole("button", { name: /search/i })
  expect(searchButton).toBeInTheDocument()
})
