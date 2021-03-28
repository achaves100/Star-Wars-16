import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const InfoPlanet = () => (
	<div className="text-center mt-5 d-flex text-left w-50 m-auto">
		<Link to="/persons">
			<img
				width={400}
				height={300}
				src="https://www.teahub.io/photos/full/68-686120_star-wars-death-star-background.jpg"
				alt="Planets"
			/>
		</Link>

		<h6 className="text-left ml-3">
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem.
		</h6>
	</div>
);
