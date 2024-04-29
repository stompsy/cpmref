const MyMessage = ({ msg, color }) => {
	return (
		<div
			className={`${color} text-white text-center font-semibold px-8 py-2 absolute top-5 rounded-md`}>
			<p>{msg}</p>
		</div>
	)
}

export default MyMessage
