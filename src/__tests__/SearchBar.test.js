import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SearchBar from "../components/SearchBar"

test("SearchBar", () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  )

  const searchBar = screen.getByPlaceholderText("search flats")
  expect(searchBar).toBeInTheDocument()
})
