import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<span>
			<Link to="/planets" />
		</span>
		<div className="card" style="width: 18rem;">
			<div className="card-body">
				<h5 cclassName="card-title">Card title</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p className="card-text">Card Text.</p>
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
		<span>
			<Link to="/persons">
				<img
					width={400}
					height={300}
					src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
					alt="Persons"
				/>
			</Link>
		</span>
		<span>
			<Link to="/ships">
				<img width={400} height={300} src="https://wallpaperaccess.com/full/1183675.jpg" alt="Ships" />
			</Link>
		</span>
	</div>
);
