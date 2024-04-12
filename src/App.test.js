import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
test("renders learn react link", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)

	const headerLogoLink = screen.getByRole("link", { name: "flat finders logo" })
	expect(headerLogoLink).toBeInTheDocument()

	const footerLogoLink = screen.getByRole("link", {
		name: "roof tops with sun behind it",
	})
	expect(footerLogoLink).toBeInTheDocument()
})
