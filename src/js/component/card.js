import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	function favoritos(name) {
		let existe = store.favorites.find(el => el === name);

		if (existe != undefined) {
			return true;
		}
	}
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img className="card-img-top" src="https://wallpapercave.com/wp/wp3978715.jpg" />
			<div className="card-body ">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<Link to={"/infoperson/" + props.index}>
					<button className="btn btn-primary">Learn more...</button>
				</Link>
				{store.favorites.length == 0 ? (
					<i
						className="far fa-heart fa-2x"
						onClick={() => {
							actions.addFavorites(props.name);
						}}
					/>
				) : favoritos(props.name) ? (
					<i
						className="fas fa-heart fa-2x"
						onClick={() => {
							actions.deleteFav(props.name);
						}}
					/>
				) : (
					<i
						className="far fa-heart fa-2x"
						onClick={() => {
							actions.addFavorites(props.name);
						}}
					/>
				)}
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	index: PropTypes.number
};
