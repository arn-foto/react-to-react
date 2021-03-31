import React, { useState } from "react";
import axios from "axios";
import { JokeContainer } from "./styles";
import { spLink } from "../../Js/services";

function SouthparkWidget() {
	const [joke, setJoke] = useState("");
	const [punchline, setPunchline] = useState("");

	const getJoke = () => {
		axios
			.get(spLink)
			.then((res) => {
				setJoke(
					res.data.type +
						"---" +
						"---" +
						res.data.setup +
						"---" +
						res.data.punchline
				);
			})
			.catch((error) => console.log(error));
	};

	return (
		<JokeContainer>
			Jokes
			<button onClick={getJoke}>press</button>
			{joke}
		</JokeContainer>
	);
}

export default SouthparkWidget;
