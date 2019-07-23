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

function Navbar (props) {
	const { classes, languageContext } = props;
	const { toggleTheme, isDarkMode } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	const languageTranslation = {
		english: "Sign In Form",
		french: "Formulaire de connexion",
		spanish: "Formulario de registro"
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
						{languageTranslation[languageContext.language]}
					</Typography>
					<Switch onChange={toggleTheme} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "Search" }}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withLanguageContext(withStyles(styles)(Navbar));
