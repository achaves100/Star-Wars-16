import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img
					width={80}
					height={30}
					src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
					alt="Star Wars"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
