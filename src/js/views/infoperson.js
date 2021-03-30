import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Table, Image, Row, Col } from "react-bootstrap";
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
