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
		if (store.favoritos) {
			return store.favoritos.map((item, index) => {
				return (
					<a className="dropdown-item" href="#" key={index}>
						{item}

						<button
							type="button"
							className="btn btn-dark float-right"
							onClick={e => {
								DeleteFavorite(index);
							}}>
							<i className="fas fa-trash" />
						</button>
					</a>
				);
			});
		} else {
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
						<Dropdown.Item>{ShowFavorites}</Dropdown.Item>
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
