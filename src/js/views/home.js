import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<span>
			<Link to="/planets" />

			<div className="d-flex flex-row justify-content-center">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to="/planets">
							<button type="button" className="btn btn-primary">
								Go to Planets
							</button>
						</Link>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
						<Link to="/persons">
							<button type="button" className="btn btn-primary">
								Go to Persons
							</button>
						</Link>
					</div>
				</div>
			</div>
		</span>
	</div>
);
