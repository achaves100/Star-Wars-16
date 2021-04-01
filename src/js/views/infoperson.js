import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PersonDesc } from "../component/persondesc";
import { Context } from "../store/appContext";

export const InfoPerson = () => {
	const params = useParams();
	const { store } = useContext(Context);
	return (
		<Container>
			{store.peoples.map((item, index) => {
				if (index == params.id) {
					return <PersonDesc />;
				}
			})}
		</Container>
	);
};
