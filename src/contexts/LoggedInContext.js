import React, { createContext, useState } from "react";

const LoggedInContext = createContext();

function LoggedInProvider (props) {
	const [ isLoggedIn, setLoggedIn ] = useState(false);
	const toggleLogin = () => setLoggedIn(!isLoggedIn);
	return (
		<LoggedInContext.Provider value={{ isLoggedIn, toggleLogin }}>
			{props.children}
		</LoggedInContext.Provider>
	);
}

export { LoggedInContext, LoggedInProvider };
