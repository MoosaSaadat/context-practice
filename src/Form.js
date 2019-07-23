import React, { useContext } from "react";
import {
	Paper,
	Avatar,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Input,
	FormControlLabel,
	Checkbox,
	Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
import { LoggedInContext } from "./contexts/LoggedInContext";

const languageTranslation = {
	english: {
		signIn: "Sign In",
		email: "Email",
		pass: "Password",
		rememberMe: "Remember Me?",
		logOut: "Log Out?"
	},
	spanish: {
		signIn: "Registrarse",
		email: "Email",
		pass: "Contraseña",
		rememberMe: "Recuérdame?",
		logOut: "Cerrar sesión?"
	},
	french: {
		signIn: "Se connecter",
		email: "Email",
		pass: "Mot de passe",
		rememberMe: "Souviens-toi de moi?",
		logOut: "Connectez - Out?"
	}
};

function Form (props) {
	const { classes } = props;
	const { language, changeLanguage } = useContext(LanguageContext);
	const { isLoggedIn, toggleLogin } = useContext(LoggedInContext);
	const loginForm = (
		<Paper className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography variant="h5" className={classes.typo}>
				{languageTranslation[language].signIn}
			</Typography>
			<Select value={language} onChange={changeLanguage}>
				<MenuItem value="english">English</MenuItem>
				<MenuItem value="french">French</MenuItem>
				<MenuItem value="spanish">Spanish</MenuItem>
			</Select>
			<form className={classes.form} onSubmit={toggleLogin}>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="email">
						{languageTranslation[language].email}
					</InputLabel>
					<Input id="email" name="email" />
				</FormControl>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="password">
						{languageTranslation[language].pass}
					</InputLabel>
					<Input id="password" name="password" type="password" />
				</FormControl>
				<FormControlLabel
					control={<Checkbox color="primary" />}
					label={languageTranslation[language].rememberMe}
				/>
				<Button
					variant="contained"
					fullWidth
					type="submit"
					color="primary"
					className={classes.submit}>
					{languageTranslation[language].signIn}
				</Button>
			</form>
		</Paper>
	);
	const loggedIn = (
		<Paper className={classes.paper}>
			<CheckCircleIcon classes={{ root: classes.loginIcon }} />
			<Button
				variant="contained"
				onClick={toggleLogin}
				fullWidth
				color="secondary"
				className={classes.submit}>
				{languageTranslation[language].logOut}
			</Button>
		</Paper>
	);
	return (
		<main className={classes.main}>{isLoggedIn ? loggedIn : loginForm}</main>
	);
}

export default withStyles(styles)(Form);
