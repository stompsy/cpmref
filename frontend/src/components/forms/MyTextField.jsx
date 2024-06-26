import * as React from 'react'
import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import '../../App.css'

export default function MyTextField(props) {
	const { label, name, control } = props
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
				<TextField
					id='outlined-basic'
					onChange={onChange}
					value={value}
					label={label}
					variant='outlined'
					className={'w-full !mb-4'}
					error={!!error}
					helperText={error?.message}
				/>
			)}
		/>
	)
}
