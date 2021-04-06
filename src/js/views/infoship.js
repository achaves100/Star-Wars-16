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
							birth_year={item.birth_year}
							gender={item.gender}
							height={item.height}
							skin_color={item.skin_color}
							eye_color={item.eye_color}
						/>
					);
				}
			})}
		</Container>
	);
};
