import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
			</div>
			<a href="#" className="btn btn-primary">
				Read more...
			</a>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string
};
