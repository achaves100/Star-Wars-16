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
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
								labore et dolore magnam aliquam quaerat voluptatem.
							</h6>
						</Container>
					</Col>
				</Row>
			</Container>
			<Container>
				<Table bordered hover variant="dark">
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
