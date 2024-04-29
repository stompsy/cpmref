import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoutes'
import PasswordResetRequest from './components/PasswordResetRequest'
import PasswordReset from './components/PasswordReset'

import './App.css'

function App() {
	const location = useLocation()
	const noNavbar =
		location.pathname === '/' ||
		location.pathname === '/register' ||
		location.pathname.includes('password')

	return (
		<>
			{noNavbar ? (
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/request/password_reset' element={<PasswordResetRequest />} />
					<Route path='/password-reset/:token' element={<PasswordReset />} />
				</Routes>
			) : (
				<Navbar
					content={
						<Routes>
							<Route element={<ProtectedRoute />}>
								<Route path='/home' element={<Home />} />
								<Route path='/about' element={<About />} />
							</Route>
						</Routes>
					}
				/>
			)}
		</>
	)
}

export default App
