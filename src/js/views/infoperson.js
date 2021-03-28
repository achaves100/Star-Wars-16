import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const InfoPerson = () => (
	<div className="text-center mt-5 d-flex text-left w-50 m-auto col-6">
		<Link to="/persons">
			<img
				width={400}
				height={300}
				src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
				alt="Planets"
			/>
		</Link>
		<h6 className="text-left ml-3 col-6">
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem.
		</h6>
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
		;
	</div>
);
