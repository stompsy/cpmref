import '../App.css'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate()
	const { handleSubmit, control } = useForm()

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
				<div className='bg-slate-200 min-w-80 w-1/4 rounded-md p-8'>
					<h5 className='text-xl text-slate-800 mb-1'>Coresponse</h5>
					<h2 className='text-4xl text-slate-800 mb-8'>User Registration</h2>
					<MyTextField label={'Email'} name={'email'} control={control} />
					<MyPassField label={'Password'} name={'password'} control={control} />
					<MyPassField label={'Confirm Password'} name={'password2'} control={control} />
					<MyButton type={'submit'} label={'REGISTER'} />
					<div className='text-center'>
						<Link to='/'> Already registered? Please login! </Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Register
