import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Image, Row, Col } from "react-bootstrap";

export const PersonDesc = () => (
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
			<Table bordered hover variant="dark">
				<tbody>
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
		</Container>
		;
	</Container>
);
