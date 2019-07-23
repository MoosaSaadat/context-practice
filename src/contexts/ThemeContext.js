import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider (props) {
	const [ isDarkMode, setMode ] = useState(false);
	const toggleTheme = setMode(!isDarkMode);
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
