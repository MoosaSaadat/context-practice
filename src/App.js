import React from "react";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoggedInProvider } from "./contexts/LoggedInContext";

function App () {
	return (
		<ThemeProvider>
			<PageContent>
				<LanguageProvider>
					<Navbar />
					<LoggedInProvider>
						<Form />
					</LoggedInProvider>
				</LanguageProvider>
			</PageContent>
		</ThemeProvider>
	);
}

export default App;
