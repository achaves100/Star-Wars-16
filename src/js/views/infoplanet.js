import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Image, Row, Col } from "react-bootstrap";

export const InfoPlanet = () => (
	<Container>
		<Container>
			<Row>
				<Col xs={6} md={5}>
					<Container>
						<Image src="https://wallpapercave.com/wp/oha7fD9.jpg" width={400} height={300} rounded />
					</Container>
				</Col>

				<Col xs={6} md={7}>
					<Container>
						<h6 className="text-left ml-3">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
							consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
							dolore magnam aliquam quaerat voluptatem.
						</h6>
					</Container>
				</Col>
			</Row>
		</Container>
		<Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</Container>
		;
	</Container>
);
