import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PlanetDesc } from "../component/planetdesc";
import { Context } from "../store/appContext";

export const InfoPlanet = () => {
	const params = useParams();
	const { store } = useContext(Context);
	return (
		<Container>
			{store.planets.map((item, index) => {
				if (index == params.id) {
					return (
						<PlanetDesc
							name={item.name}
							climate={item.climate}
							population={item.population}
							orbital_period={item.orbital_period}
							rotation_period={item.rotation_period}
							diameter={item.diameter}
						/>
					);
				}
			})}
		</Container>
	);
};
