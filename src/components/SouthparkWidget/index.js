import React from "react";
import axios from "axios";
import { SpContainer } from "./styles";
import { spLink } from "../../Js/services";

function SouthparkWidget() {
	const getChar = () => {
		axios
			.get(spLink)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	};

	return (
		<SpContainer>
			South Park API
			<button onClick={getChar}>press</button>
		</SpContainer>
	);
}

export default SouthparkWidget;
