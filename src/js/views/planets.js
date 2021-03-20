import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);
	return (
		<div className="text-center mt-5">
			<h1 className="display-3">Planets</h1>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
