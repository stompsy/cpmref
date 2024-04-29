import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import MyMessage from './Message'
import '../App.css'

const PasswordReset = () => {
	const navigate = useNavigate()
	const { handleSubmit, control } = useForm()
	const { token } = useParams()
	console.log(token)

	const [showMessage, setShowMessage] = useState(false)

	const submission = (data) => {
		AxiosInstance.post(`api/password_reset/confirm/`, {
			password: data.password,
			token: token,
		})
			.then((response) => {
				setShowMessage(true)
				setTimeout(() => {
					navigate('/')
				}, 5000)
			})
			.catch((error) => {
				console.error('Error resetting password: ', error)
			})
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-slate-800'>
			{showMessage ? (
				<MyMessage
					msg='Your password reset was successful! You will now be redirected to the login page.'
					color={'bg-green-600'}
				/>
			) : null}
			<form onSubmit={handleSubmit(submission)}>
				<div className='bg-slate-200 min-w-80 w-1/4 rounded-md p-8 flex flex-col'>
					<h5 className='text-xl text-slate-800 mb-1'>Coresponse</h5>
					<h2 className='text-3xl text-slate-800 mb-8'>Reset password</h2>
					<MyPassField label='Password' name={'password'} control={control} />
					<MyPassField label='Confirm Password' name={'password2'} control={control} />
					<MyButton type={'submit'} label='RESET PASSWORD' />
					<div className='flex mt-4'>
						<p>Return to</p>
						<Link
							to='/'
							className='text-orange-600 hover:underline hover:underline-offset-4 font-bold ml-1 text-md'>
							Login
						</Link>
						<p className='text-orange-600 font-bold'>?</p>
					</div>
					<div className='flex'>
						<p>Don't have an account?</p>
						<Link
							to='/register'
							className='text-orange-600 hover:underline hover:underline-offset-4 font-bold ml-1 text-md'>
							Sign up
						</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default PasswordReset
