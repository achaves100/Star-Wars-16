import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card2 } from "../component/card2";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);
	return (
		<>
			<div className="Container">
				<ul className="card-deck ">
					{store.planets.map((item, index) => {
						return (
							<div className="col-md-4 mb-3" key={index}>
								<Card2
									name={"Name: " + item.name}
									climate={"Climate: " + item.climate}
									terrain={"Terrain: " + item.terrain}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
