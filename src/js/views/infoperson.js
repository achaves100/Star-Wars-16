import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Image, Row, Col } from "react-bootstrap";
import { PersonDesc } from "../component/persondesc";

export const InfoPerson = () => (
	<Container>
		<PersonDesc />
	</Container>
);
