import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<span>
			<Link to="/planets">
				<img width={600} height={400} src="https://wallpapercave.com/wp/Cq0wdqN.jpg" alt="Planets" />
			</Link>
		</span>
		<span>
			<Link to="/persons">
				<img
					width={600}
					height={400}
					src="https://cdn.mos.cms.futurecdn.net/Rv3YiBSiN2nyiP66iFdTj3-1200-80.jpg"
					alt="People"
				/>
			</Link>
		</span>
	</div>
);
