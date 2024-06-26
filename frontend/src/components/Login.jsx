import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import MyMessage from './Message'
import '../App.css'

const Login = () => {
	const navigate = useNavigate()
	const { handleSubmit, control } = useForm()
	const [showMessage, setShowMessage] = useState(false)

	const submission = (data) => {
		AxiosInstance.post(`login/`, {
			email: data.email,
			password: data.password,
		})
			.then((response) => {
				console.log(response)
				localStorage.setItem('Token', response.data.token)
				navigate(`/home`)
			})
			.catch((error) => {
				setShowMessage(true)
				console.error('Error during login: ', error)
			})
	}

	return (
		<div className='flex items-center justify-center h-screen bg-slate-800'>
			{showMessage ? (
				<MyMessage
					msg='Login error. Please try again, or reset your password.'
					color={'bg-red-600'}
				/>
			) : null}
			<form onSubmit={handleSubmit(submission)}>
				<div className='bg-slate-200 min-w-80 w-1/4 rounded-md p-8 flex flex-col'>
					<h5 className='text-xl text-slate-800 mb-1'>Coresponse</h5>
					<h2 className='text-3xl text-slate-800 mb-8'>User Login</h2>
					<MyTextField label='Email' name={'email'} control={control} />
					<MyPassField label='Password' name={'password'} control={control} />
					<MyButton type={'submit'} label='LOGIN' />
					<div className='flex'>
						<p>Don't have an account?</p>
						<Link
							to='/register'
							className='text-orange-600 hover:underline hover:underline-offset-4 font-bold ml-1 text-md'>
							Sign up
						</Link>
					</div>
					<div className='flex'>
						<p>Forgot password?</p>
						<Link
							to='/request/password_reset'
							className='text-orange-600 hover:underline hover:underline-offset-4 font-bold ml-1 text-md'>
							Click here
						</Link>
						<p className='text-orange-600 font-bold'>?</p>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login
