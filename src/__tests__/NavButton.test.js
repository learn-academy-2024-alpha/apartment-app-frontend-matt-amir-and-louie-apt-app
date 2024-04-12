import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavButton from "../components/NavButton"

test("NavButton", () => {
	render(
		<BrowserRouter>
			<NavButton url="test" buttonContent="Button" />
		</BrowserRouter>
	)

	const navButton = screen.getByText("Button")
	expect(navButton).toBeInTheDocument()
	expect(screen.getByRole("link", { name: "Button" })).toHaveAttribute(
		"href",
		"/test"
	)
})
