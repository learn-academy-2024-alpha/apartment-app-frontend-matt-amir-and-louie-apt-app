import React from "react"
import { render, screen } from "@testing-library/react"
import Logo from "../assets/Footerlogo.png"
import Footer from "../components/Footer"
import { BrowserRouter } from "react-router-dom"

test("footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const footerLogo = screen.getByAltText("roof tops with sun behind it")
  expect(footerLogo).toBeInTheDocument()
  expect(footerLogo).toHaveAttribute("src", Logo)
  expect(
    screen.getByRole("link", { name: "roof tops with sun behind it" })
  ).toHaveAttribute("href", "/")

  const footerText = screen.getByText(
    /Matt|Amir|Louie LEARN Academy Alpha 2024/
  )
  expect(footerText).toBeInTheDocument()
})
