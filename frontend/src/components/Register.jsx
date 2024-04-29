import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../App.css'

const Register = () => {
	const navigate = useNavigate()
	const schema = yup.object({
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Email is a required field'),
		password: yup
			.string()
			.required('Password is a required field')
			.min(8, 'Password must be at least 8 characters')
			.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
			.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
			.matches(/[0-9]/, 'Password must contain at least one number')
			.matches(
				/[!@#$%^&*(),.?':;{}|<>]/,
				'Password must contain at least one special character'
			),
		password2: yup
			.string()
			.required('Password confirmation is a required field')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})

	const { handleSubmit, control } = useForm({ resolver: yupResolver(schema) })

	const submission = (data) => {
		AxiosInstance.post(`register/`, {
			email: data.email,
			password: data.password,
		}).then(() => {
			navigate(`/`)
		})
	}

	return (
		<div className='flex items-center justify-center h-screen bg-slate-800'>
			<form onSubmit={handleSubmit(submission)}>
				<div className='bg-slate-200 min-w-80 w-1/4 rounded-md p-8 flex flex-col'>
					<h5 className='text-xl text-slate-800 mb-1'>Coresponse</h5>
					<h2 className='text-3xl text-slate-800 mb-8'>Registration</h2>
					<MyTextField label={'Email'} name={'email'} control={control} />
					<MyPassField label={'Password'} name={'password'} control={control} />
					<MyPassField label={'Confirm Password'} name={'password2'} control={control} />
					<MyButton type={'submit'} label={'REGISTER'} />
					<div className='flex mt-4'>
						<p class>Already registered? Please</p>
						<Link
							to='/'
							className='text-orange-600 hover:underline hover:underline-offset-4 font-bold ml-1 text-md'>
							login
						</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Register
