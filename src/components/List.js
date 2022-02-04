const food = ['Salad 🥗', 'Pizza 🍕', 'Burger 🍔', 'Fries 🍟', 'Coke 🥤']

const List = () => {
	return (
		<>
			<ul>
				{food.map((fooditem, index) => (
					<li key={index}>{fooditem}</li>
				))}
			</ul>
		</>
	);
};

export default List;