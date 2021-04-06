import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card3 = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://www.giantfreakinrobot.com/wp-content/uploads/2019/12/eta2-900x506.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.max_atmosphering_speed}</p>
				<p className="card-text">{props.starship_class}</p>
			</div>
			<Link to={"/infoship/" + props.index}>
				<button className="btn btn-primary">Learn more...</button>
			</Link>
		</div>
	);
};
Card3.propTypes = {
	name: PropTypes.string,
	max_atmosphering_speed: PropTypes.number,
	starship_class: PropTypes.string,
	index: PropTypes.number
};
