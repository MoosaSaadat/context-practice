import React, { Component } from "react";
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
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const languageTranslation = {
	english: {
		signIn: "Sign In",
		email: "Email",
		pass: "Password",
		rememberMe: "Remember Me?"
	},
	spanish: {
		signIn: "Registrarse",
		email: "Email",
		pass: "Contraseña",
		rememberMe: "Recuérdame?"
	},
	french: {
		signIn: "Se connecter",
		email: "Email",
		pass: "Mot de passe",
		rememberMe: "Souviens-toi de moi?"
	}
};

class Form extends Component {
	static contextType = LanguageContext;
	render () {
		const { classes } = this.props;
		const { language, changeLanguage } = this.context;
		console.log(language);
		return (
			<main className={classes.main}>
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
					<form className={classes.form}>
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
							<Input id="password" name="password" />
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
			</main>
		);
	}
}

export default withStyles(styles)(Form);
