import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container fluid>
			<Navbar bg="dark" text-white>
				<Link to="/">
					<img
						width={80}
						height={30}
						src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
						alt="Star Wars"
					/>
				</Link>

				<Navbar.Collapse className="justify-content-end">
					<DropdownButton variant="dark" title="Favorites">
						<Dropdown.Item>Empty</Dropdown.Item>
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
