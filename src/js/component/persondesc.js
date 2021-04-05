import React from "react";
import PropTypes from "prop-types";
import { Container, Table, Image, Row, Col } from "react-bootstrap";

export const PersonDesc = props => {
	return (
		<Container>
			<Container>
				<Row>
					<Col xs={6} md={6}>
						<Container>
							<Image
								src="https://images.saymedia-content.com/.image/t_share/MTc1MTEzODQ1NTYzNjY0MTk2/benjamin-coxs-top-20-coolest-star-wars-characters.jpg"
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
									The life of Anakin Skywalkers was once that of a child slave on the harsh desert
									planet of Tatooine, before the Jedi master Qui-Gon Jinn discovered him and
									determined that Anakin was the chosen one due to being conceived by the
									medichlorians. Under the training of Obi-Wan Kenobi, Anakin became more in tune with
									the Force, and rose among the Jedi ranks.
								</p>{" "}
								<p>
									But as he grew older, he only felt more and more imperfect. With the tipping point
									being a dream about his wife dying at birth, Anakin turned to the dark side of the
									Force to fix himself, which resulted in him falling into lava during a battle
									against Obi-Wan.
								</p>{" "}
								<p>
									Even though he was severely damaged, the Emperor rescued him and supported him with
									new armor, turning him into Darth Vader. Years later, after discovering his son,
									Vader had a change of heart, and sacrificed himself to save him from the Emperor and
									the Dark Side. After life, Anakin would spend his afterlife as a spirit of the
									Force, guiding the next generations of Skywalkers to come.
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
							<th>Birth Year</th>
							<th>Gender</th>
							<th>Heigth</th>
							<th>Skin Color</th>
							<th>Eye Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.name}</td>
							<td>{props.birth_year}</td>
							<td>{props.gender}</td>
							<td>{props.height}</td>
							<td>{props.skin_color}</td>
							<td>{props.eye_color}</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			;
		</Container>
	);
	PersonDesc.propTypes = {
		name: PropTypes.string,
		birth_year: PropTypes.number,
		gender: PropTypes.string,
		height: PropTypes.number,
		skin_color: PropTypes.string,
		eye_color: PropTypes.string
	};
};
