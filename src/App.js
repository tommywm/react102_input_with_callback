import { useState } from 'react';

import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import List from './components/List';
import Title from './components/Title';

function App() {
	const [textFromInput, setTextFromInput] = useState('🚀');

	const doMagic = () => {
		console.log(`I'm a reusable limitless button component now`);
	}

	return (
		<>
			<Container>
				<Title coolPropName={textFromInput} />
				<List />
				<Button
					fancyFunction={doMagic}
					fancyWords='PUSH'
				/>
				<Input
					placeholderText='Write something here..'
					stateController={setTextFromInput}
				/>
			</Container>
		</>
	);
}

export default App;
