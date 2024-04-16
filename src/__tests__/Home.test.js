import React from "react"
import { render, screen } from "testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import apartment from "../assets/apartments/apartment5.avif"

test("renders home component"),
  () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const homeImage = screen.getByAltText(
      "A spanning view of a bridge leading into a city on the water"
    )
    expect(homeImage).toBeInTheDocument()
    expect(homeImage).toHaveAttribute("src", apartment)

    // const homeTitleText = screen.getByText(//)
    // expect(homeTitleText).toBeInTheDocument()
  }
