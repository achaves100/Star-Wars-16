import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card3 } from "../component/card3";

export const Ships = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.ships);
	// useEffect(() => {
	// 	actions.loadShips();
	// }, []);
	return (
		<>
			<div className="Container">
				<ul className="card-deck ">
					{store.ships.map((item, index) => {
						return (
							<div className="col-md-4 mb-3" key={index}>
								<Card3
									name={"Name: " + item.name}
									max_atmosphering_speed={"Max Atmosphering Speed: " + item.max_atmosphering_speed}
									starship_class={"Starship Class: " + item.starship_class}
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
