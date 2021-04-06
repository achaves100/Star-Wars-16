import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ShipDesc } from "../component/shipdesc";
import { Context } from "../store/appContext";

export const InfoShip = () => {
	const params = useParams();
	const { store } = useContext(Context);
	return (
		<Container>
			{store.ships.map((item, index) => {
				if (index == params.id) {
					return (
						<ShipDesc
							name={item.name}
							manufacturer={item.manufacturer}
							max_atmosphering_speed={item.max_atmosphering_speed}
							hyperdrive_rating={item.hyperdrive_rating}
							length={item.length}
							starship_class={item.starship_class}
						/>
					);
				}
			})}
		</Container>
	);
};
