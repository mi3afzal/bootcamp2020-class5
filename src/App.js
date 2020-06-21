import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import ThemeButton from './ThemeButton';
import ThemeContext from './ThemeContext';

function App() {
	//let [darkTheme, setDarkTheme] = useState(true);
	let themeState = useState(true);

	return (
		<div className="App">
			<ThemeContext.Provider value={themeState}>
			<header className={`App-header ${ themeState[0] ? 'darkTheme' : 'lightTheme'}`}>
				<Counter />
				<br/><br/>
				<ThemeButton />
				<h3>Counter App with Theme switch</h3>
				<p>use React’s Context API and useReducer React Hook <br />
				Auto Deployment on Surge through Github actions with custome YAML config.</p>

				<p>
					<span>Developed in React with Love by </span> 
					<a
					className="App-link"
					href="https://mi3afzal.com"
					target="_blank"
					rel="noopener noreferrer"
					>
					Muhammad Irfan Afzal
					</a>
				</p>
			</header>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
