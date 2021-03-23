import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card2 } from "../component/card2";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);
	return (
		<>
			<div className="Container">
				<ul className="card-deck">
					{store.peoples.map((item, index) => {
						return (
							<div className="col-md-4 mb-3" key={index}>
								<Card2 name={item.name} hair={item.diameter} eyes={item.terrain} />
							</div>
						);
					})}
				</ul>
			</div>

			<div className="text-centered mt-5">
				<h1>Planets</h1>
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
			</div>
		</>
	);
};
