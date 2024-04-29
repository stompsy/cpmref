import { React, useEffect, useMemo, useState } from 'react'
import AxiosInstance from './AxiosInstance'

const Home = () => {
	const [myData, setMyData] = useState()
	const [loading, setLoading] = useState(true)

	const GetData = () => {
		AxiosInstance.get(`users/`).then((res) => {
			setMyData(res.data)
			console.log(res.data)
			setLoading(false)
		})
		// .catch((error) => {
		// 	console.log(error)
		// })
	}

	useEffect(() => {
		GetData()
	}, [])

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					{myData.map((item, index) => (
						<div key={index} className='m-2 p-2 shadow-lg'>
							<div>ID: {item.id}</div>
							<div>Email: {item.email}</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Home
