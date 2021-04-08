import React from "react";
import PropTypes from "prop-types";
import { Container, Table, Image, Row, Col } from "react-bootstrap";

export const ShipDesc = props => {
	return (
		<Container>
			<Container>
				<Row>
					<Col xs={6} md={6}>
						<Container>
							<Image
								src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon.jpg"
								width={550}
								height={375}
								rounded
							/>
						</Container>
					</Col>

					<Col xs={6} md={6}>
						<Container>
							<h6 className="text-left ml-3" style={{ color: "white" }}>
								<p>
									An extensively modified Corellian light freighter, the Millennium Falcon is a legend
									in smuggler circles and is coveted by many for being the fastest hunk of junk in the
									galaxy. Despite her humble origins and shabby exterior, the ship that made the
									Kessel Run in less than 12 parsecs has played a role in some of the greatest
									victories of the Rebel Alliance and the New Republic.
								</p>
								<p>
									The Falcon looks like a worn-out junker, but beneath her hull she’s full of
									surprises. A succession of owners, including Lando Calrissian and Han Solo, have
									made special modifications that boosted the freighter’s speed, shielding and
									firepower to impressive – and downright illegal – levels. The price of such
									tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky.
								</p>
							</h6>
						</Container>
					</Col>
				</Row>
			</Container>
			<Container>
				<Table bordered hover variant="dark text-center">
					<thead>
						<tr>
							<th>Name</th>
							<th>Manufacturer</th>
							<th>Max Atmosphering Speed</th>
							<th>Hyperdrive Rating</th>
							<th>Length</th>
							<th>Starship Class</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.name}</td>
							<td>{props.manufacturer}</td>
							<td>{props.max_atmosphering_speed}</td>
							<td>{props.hyperdrive_rating}</td>
							<td>{props.length}</td>
							<td>{props.starship_class}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			;
		</Container>
	);
	ShipDesc.propTypes = {
		name: PropTypes.string,
		manufacturer: PropTypes.string,
		max_atmosphering_speed: PropTypes.number,
		hyperdrive_rating: PropTypes.number,
		length: PropTypes.number,
		starship_class: PropTypes.string
	};
};
