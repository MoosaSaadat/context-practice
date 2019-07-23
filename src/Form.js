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

class Form extends Component {
	render () {
		const { classes } = this.props;
		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography variant="h5">Sign In!</Typography>
					<Select value="english">
						<MenuItem value="english">English</MenuItem>
						<MenuItem value="french">French</MenuItem>
						<MenuItem value="spanish">Spanish</MenuItem>
					</Select>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input id="email" name="email" autoFocus />
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input id="password" name="password" autoFocus />
						</FormControl>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="Remember Me?"
						/>
						<Button
							variant="contained"
							fullWidth
							type="submit"
							color="primary"
							className={classes.submit}>
							Sign In
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(Form);