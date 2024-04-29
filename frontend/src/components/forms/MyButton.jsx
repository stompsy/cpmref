import * as React from 'react'
import Button from '@mui/material/Button'

export default function MyButton(props) {
	const { label, type } = props
	return (
		<Button
			type={type}
			variant='contained'
			className={'w-full !h-12 !mt-1 !mb-4 !bg-orange-600'}>
			{label}
		</Button>
	)
}
