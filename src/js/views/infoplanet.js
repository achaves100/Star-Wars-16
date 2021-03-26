import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const InfoPlanet = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<span>
			<Link to="/planets">
				<img
					width={400}
					height={300}
					src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
					alt="Planets"
				/>
			</Link>
		</span>
	</div>
);
