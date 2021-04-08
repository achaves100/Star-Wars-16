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
		return store.favorites.map((item, index) => (
			<Dropdown.Item key={index}>
				{item}
				<button
					type="button"
					className="btn btn-dark float-right"
					onClick={e => {
						DeleteFavorite(index);
					}}>
					<i className="fas fa-trash" />
				</button>
			</Dropdown.Item>
		));
	};

	return (
		<Container fluid>
			<span>{JSON.stringify(store.favorites)}</span>
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
					<DropdownButton menuAlign="right" variant="Primary" title="Favorites">
						{ShowFavorites()}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
