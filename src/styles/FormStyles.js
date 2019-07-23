export default (theme) => ({
	main: {
		width: "auto",
		display: "block",
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			width: "400px",
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
	},
	typo: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	avatar: {
		margin: theme.spacing(0),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3)
	},
	submit: {
		marginTop: theme.spacing(3)
	},
	loginIcon: {
		fontSize: "10rem",
		fill: "#76d275"
	}
});
