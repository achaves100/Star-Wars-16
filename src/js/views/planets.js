import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card2 } from "../component/card2";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadPlanets();
	// 	console.log("today", store.planets);
	// }, []);
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
									index={index}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
