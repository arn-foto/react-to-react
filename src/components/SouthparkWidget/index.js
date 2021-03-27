import React from "react";
import spLink from "../../Js/services";
import axios from "axios";

function SouthparkWidget() {
	axios
		.get(spLink)
		.then((res) => console.log(res))
		.catch((error) => console.log(error));

	return <div>South Park API</div>;
}

export default SouthparkWidget;
