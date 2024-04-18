import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home"
import Index from "./pages/Index.js"
import Show from "./pages/Show.js"
import mockApartments from "./mockApartments.js"
import "./App.css"
import NotFound from "./pages/NotFound.js"
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"
import MyFlats from "./pages/MyFlats.js"

const App = () => {
	const [user, setUser] = useState(null)
	const [apartments, setApartments] = useState(mockApartments)
	useEffect(() => {
		const checkForLoggedInUser = localStorage.getItem("user")
		if (checkForLoggedInUser) setUser(JSON.parse(checkForLoggedInUser))
	}, [])

	const signIn = async (user) => {
		try {
			const signInResponse = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(user),
			})
			if (!signInResponse) {
				throw new Error(signInResponse.errors)
			}
			const payload = await signInResponse.json()
			localStorage.setItem("token", signInResponse.headers.get("Authorization"))
			localStorage.setItem("user", JSON.stringify(payload))
			setUser(payload)
		} catch (error) {
			console.error("Error fetching user sign in request")
		}
	}

	const signUp = async (user) => {
		try {
			const signUpResponse = await fetch("http://localhost:3000/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(user),
			})
			if (!signUpResponse) {
				throw new Error(signUpResponse.errors)
			}
			const payload = await signUpResponse.json()
			localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
			localStorage.setItem("user", JSON.stringify(payload))
			setUser(payload)
		} catch (error) {
			console.error("Error fetching user sign up request")
		}
	}

	const logOut = async () => {
		try {
			const signOutResponse = await fetch("http://localhost:3000/logout", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			})
			if (!signOutResponse) {
				throw new Error(signOutResponse.errors)
			}
			await signOutResponse.json()
			setUser(null)
			localStorage.removeItem("token")
			localStorage.removeItem("user")
		} catch (error) {
			console.error("Error fetching user sign out request")
		}
	}
	const deleteApartment = async (id) => {
		console.log(id)
	}

	return (
		<>
			<Header user={user} logOut={logOut} />
			<Routes>
				<Route path="/" element={<Home apartments={apartments} />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/index" element={<Index apartments={apartments} />} />
				<Route
					path="/apartment/:id"
					element={<Show apartments={apartments} />}
				/>
				{user && (
					<Route
						path="/myFlats"
						element={
							<MyFlats
								apartments={apartments}
								user={user}
								deleteApartment={deleteApartment}
							/>
						}
					/>
				)}
				<Route path="/myFlats" element={<MyFlats />} />
				<Route path="/signin" element={<SignIn signIn={signIn} />} />
				<Route path="/signup" element={<SignUp signUp={signUp} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
