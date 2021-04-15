import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card2 = props => {
	const { store, actions } = useContext(Context);

	function favoritos(name) {
		let existe = store.favorites.find(el => el === name);

		if (existe != undefined) {
			return true;
		}
	}
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://www.wallpaperbetter.com/wallpaper/932/534/344/purple-planets-2K-wallpaper-middle-size.jpg"
			/>
			<div className="card-body ">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.climate}</p>
				<p className="card-text">{props.terrain}</p>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<Link to={"/infoplanet/" + props.index}>
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
Card2.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	index: PropTypes.number
};
