import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

test("renders NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const titleText = screen.getByText(
    /Oops it looks like this apartment is still under construction.../
  )
  expect(titleText).toBeInTheDocument()

  const subTitleText = screen.getByText(/Lets look at some finished apartments/)
  expect(subTitleText).toBeInTheDocument()

  const navButton = screen.getByText(/HOME/)
  expect(navButton).toBeInTheDocument()

  const logoLink = screen.getByRole("link", { name: /HOME/ })
  fireEvent.click(logoLink)
  expect(window.location.pathname).toBe("/")
})
