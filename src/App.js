import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home"
import Index from "./pages/Index.js"
import Show from "./pages/Show.js"
import New from "./pages/New.js"
import Edit from "./pages/Edit.js"
import NotFound from "./pages/NotFound.js"
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"
import MyFlats from "./pages/MyFlats.js"
import "./App.css"

const App = () => {

	const [user, setUser] = useState(null)
	const [apartments, setApartments] = useState([])
	useEffect(() => {
		const checkForLoggedInUser = localStorage.getItem("user")
		if (checkForLoggedInUser) setUser(JSON.parse(checkForLoggedInUser))
		getApartments()
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

	const getApartments = async () => {
		try {
			const getResponse = await fetch("http://localhost:3000/apartments")
			if (!getResponse.ok) {
				throw new Error("Error on the get request for apartments")
			}
			const getResult = await getResponse.json()
			setApartments(getResult)
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const createApartment = async (newApartment) => {
		try {
			const postResponse = await fetch("http://localhost:3000/apartments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newApartment),
			})
			if (!postResponse.ok) {
				throw new Error("Error on the post request for Apartments")
			}
			await postResponse.json()
			getApartments()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}
	const updateApartment = async (editApartment, id) => {
		console.log("editApartment:", editApartment)
		console.log("id:", id)
		try {
			const patchResponse = await fetch(
				`http://localhost:3000/apartments/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(editApartment),
				}
			)
			if (!patchResponse.ok) {
				throw new Error("Error on the patch request for apartments")
			}
			await patchResponse.json()
			getApartments()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}

	const deleteApartment = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/apartment/${id}`, {
				method: "DELETE",
			})
			if (!response.ok) {
				throw new Error("Error on the delete request")
			}
			getApartments()
		} catch (error) {
			alert("Opps something went wrong", error.message)
		}
	}

	return (
		<>
			<Header user={user} logOut={logOut} />
			<Routes>
				<Route path="/" element={<Home apartments={apartments} />} />
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
				{user && (
					<Route
						path="/new"
						element={<New createApartment={createApartment} user={user} />}
					/>
				)}
				{user && (
					<Route
						path="/apartment-edit/:id"
						element={
							<Edit
								apartments={apartments}
								updateApartment={updateApartment}
								user={user}
							/>
						}
					/>
				)}
				<Route path="/signin" element={<SignIn signIn={signIn} />} />
				<Route path="/signup" element={<SignUp signUp={signUp} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
