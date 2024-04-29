import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import MyTextField from './forms/MyTextField'
import MyButton from './forms/MyButton'
import MyMessage from './Message'
import '../App.css'

const PasswordResetRequest = () => {
	const navigate = useNavigate()
	const { handleSubmit, control } = useForm()

	const [showMessage, setShowMessage] = useState(false)

	const submission = (data) => {
		AxiosInstance.post(`api/password_reset/`, {
			email: data.email,
		})
			.then((response) => {
				setShowMessage(true)
			})
			.catch((error) => {
				console.error('Error resetting password: ', error)
			})
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-slate-800'>
			{showMessage ? (
				<MyMessage
					msg='An email was sent to the address provided containing instructions to reset your password'
					color={'bg-green-600'}
				/>
			) : null}
			<form onSubmit={handleSubmit(submission)}>
				<div className='bg-slate-200 min-w-80 w-1/4 rounded-md p-8 flex flex-col'>
					<h5 className='text-xl text-slate-800 mb-1'>Coresponse</h5>
					<h2 className='text-3xl text-slate-800 mb-8'>Password Reset</h2>
					<MyTextField label='Email' name={'email'} control={control} />
					<MyButton type={'submit'} label='REQUEST PASSWORD RESET' />
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

export default PasswordResetRequest
