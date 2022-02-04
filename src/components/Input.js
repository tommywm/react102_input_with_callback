const Input = ({ placeholderText = 'Type something', stateController }) => {
	const handleChange = (event) => {
		stateController(event.target.value);
	}
	return (
		<>
			<input
				onChange={handleChange}
				placeholder={placeholderText}
				type='text'
			/>
		</>
	);
};

export default Input;