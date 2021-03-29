import React, { useState } from "react";
import axios from "axios";
import { SpContainer } from "./styles";
import { spLink } from "../../Js/services";

function SouthparkWidget() {
	const [joke, setJoke] = useState("");
	const [punchline, setPunchline] = useState("");
	const getJoke = () => {
		axios
			.get(spLink)
			.then((res) => {
				setJoke(res.data.setup);
			})
			.catch((error) => console.log(error));
	};

	const getPunchline = () => {
		axios.get(spLink).then((res) => {
			setPunchline(res.data.punchline);
		});
	};

	return (
		<SpContainer>
			Jokes
			<button onClick={getJoke}>press</button>
			{joke}
			<button onClick={getPunchline}>here</button> {punchline}
		</SpContainer>
	);
}

export default SouthparkWidget;
