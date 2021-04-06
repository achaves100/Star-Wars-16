import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
            <img
                className="card-img-top"
                src="https://wallpapercave.com/wp/wp3978715.jpg"
                />
			<div className="card-body ">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
			</div>
			<Link to={"/infoperson/" + props.index}>
				<button className="btn btn-primary">Learn more...</button>
			</Link>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	index: PropTypes.number
};
