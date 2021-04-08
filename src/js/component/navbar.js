import React, { useContext, useState } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	const DeleteFavorite = index => {
		actions.removeFavorites(index);
	};

	const ShowFavorites = () => {
		if (store.favorites) {
			return store.favorites.map((item, index) => {
				return (
					<Dropdown.Item key={index}>{item}</Dropdown.Item>
					// <a className="dropdown-item" href="#" key={index}>
					// 	{item}

					// 	<button
					// 		type="button"
					// 		className="btn btn-dark float-right"
					// 		onClick={e => {
					// 			DeleteFavorite(index);
					// 		}}>
					// 		<i className="fas fa-trash" />
					// 	</button>
					// </a>
				);
			});
		} else {
			return <Dropdown.Item>Sin favoritos</Dropdown.Item>;
		}
	};

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
					<DropdownButton variant="Primary" title="Favorites">
						{ShowFavorites}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

{
	/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */
}

{
	/* <Dropdown>
	<Dropdown.Toggle variant="success" id="dropdown-basic">
		Dropdown Button
	</Dropdown.Toggle>
	<Dropdown.Menu>
		<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
		<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
		<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown>; */
}
