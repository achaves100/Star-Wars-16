import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card2 } from "../component/card2";

export const Ships = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.ships);
	useEffect(() => {
		actions.loadShips();
	}, []);
	return (
		<>
			<div className="Container">
				<ul className="card-deck ">
					{store.ships.map((item, index) => {
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
