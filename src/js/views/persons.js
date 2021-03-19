import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Persons = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="text-center mt-5">
			<h1 className="display-3">Persons</h1>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
