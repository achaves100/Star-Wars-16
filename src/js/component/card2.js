import React from "react";
import PropTypes from "prop-types";

export const Card2 = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.diameter}</p>
				<p className="card-text">{props.terrain}</p>
			</div>
		</div>
	);
};
Card2.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	terrain: PropTypes.string
};
