import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: "white",
		width: "100vw",
		height: "100vh"
	}
};

class PageContent extends Component {
	render () {
		return <div className={this.props.classes.root}>{this.props.children}</div>;
	}
}

export default withStyles(styles)(PageContent);
