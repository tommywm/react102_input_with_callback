const Button = ({ fancyFunction, fancyWords }) => {
	return (
		<>
			<button
				onClick={fancyFunction}
				type='button'
			>
				{fancyWords}
			</button>
		</>
	);
};

export default Button;