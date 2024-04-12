import React from "react"
import { render, screen } from "@testing-library/react"
import Logo from "../assets/FlatFinderLogo.png"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"

test("Header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const headerLogo = screen.getByAltText("flat finders logo")
  expect(headerLogo).toBeInTheDocument()
  expect(headerLogo).toHaveAttribute("src", Logo)
  expect(
    screen.getByRole("link", { name: "flat finders logo" })
  ).toHaveAttribute("href", "/")

  const rentLink = screen.getByText("Rent")
  expect(rentLink).toBeInTheDocument()

  const buyLink = screen.getByText("Buy")
  expect(buyLink).toBeInTheDocument()

  const sellLink = screen.getByText("Sell")
  expect(sellLink).toBeInTheDocument()

  const signInLink = screen.getByText("Sign in")
  expect(signInLink).toBeInTheDocument()
})
