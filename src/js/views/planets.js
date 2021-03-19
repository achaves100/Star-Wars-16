import React from "react";
import { Link } from "react-router-dom";

export const Planets = () => {
	return (
		<div className="text-center mt-5">
			<h1 className="display-3">Planets</h1>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
