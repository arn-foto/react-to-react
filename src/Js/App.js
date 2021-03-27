import React, { Component } from "react";
import axios from "axios";
import { spLink } from "./services";

class App extends Component {
	render() {
		axios
			.get(spLink)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		return (
			<div className="App">
				<h1>Reps, son</h1>
			</div>
		);
	}
}

export default App;
