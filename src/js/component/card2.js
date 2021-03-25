import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card2 = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.climate}</p>
				<p className="card-text">{props.terrain}</p>
			</div>
			<Link to={"/infoplanet/" + props.index}>
				<button className="btn btn-primary">Learn more...</button>
			</Link>
		</div>
	);
};
Card2.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	index: PropTypes.number
};
