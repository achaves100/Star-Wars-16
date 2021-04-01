import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<Link to="/persons">
						<img
							className="d-block w-100"
							src="https://cdn.mos.cms.futurecdn.net/Rv3YiBSiN2nyiP66iFdTj3-1200-80.jpg"
							alt="Persons"
							width={600}
							height={600}
						/>
					</Link>
					<Carousel.Caption>
						<h3>Persons</h3>
						<h4>Learn more about your favorite Star Wars characters</h4>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/planets">
						<img
							className="d-block w-100"
							src="https://wallpapercave.com/wp/Cq0wdqN.jpg"
							alt="Planets"
							width={600}
							height={600}
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planets</h3>
						<h4>Learn more about your favorite Star Wars planets</h4>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
