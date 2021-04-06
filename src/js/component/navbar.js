import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
    const { store, actions } = useContext(Context);
    
	const FavoriteRemove = index => {
		actions.removeFavorites(index);
	};

	const FavoriteAdd = () => {
		if (store.favoritos) {
			return store.favoritos.map((item, index) => {
				return (
					<a className="dropdown-item" href="#" key={index}>
						{item}

						<button
							type="button"
							className="btn btn-dark float-right"
							onClick={e => {
								FavoriteRemove(index);
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
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"
						alt="Star Wars"
					/>
				</Link>

				<Navbar.Collapse className="justify-content-end">
					<DropdownButton title="Favorites">
						<Dropdown.Item>{FavoriteAdd}</Dropdown.Item>
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
