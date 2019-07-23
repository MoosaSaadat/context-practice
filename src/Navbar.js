import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import styles from "./styles/NavbarStyles";
import { FormControlLabel } from "@material-ui/core";

function Navbar (props) {
	const { classes } = props;
	const { toggleTheme, isDarkMode } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	const languageTranslation = {
		english: {
			title: "Sign In Form",
			colorMode: "Color Mode"
		},
		french: {
			title: "Formulaire de connexion",
			colorMode: "Mode de couleur"
		},
		spanish: {
			title: "Formulario de registro",
			colorMode: "Modo de color"
		}
	};
	return (
		<div className={classes.root}>
			<AppBar position="static" color={isDarkMode ? "primary" : "default"}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="Current Language">
						<VerifiedUserIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						{languageTranslation[language].title}
					</Typography>
					<FormControlLabel
						control={<Switch onChange={toggleTheme} />}
						label={languageTranslation[language].colorMode}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(Navbar);
