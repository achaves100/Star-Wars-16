import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Persons = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);
	return (
		<>
			<div className="Container">
				<ul className="card-deck">
					{store.peoples.map((item, index) => {
						return (
							<div className="col-md-4 mb-3" key={index}>
								<Card
									name={"Name: " + item.name}
									hair={"Hair Color: " + item.hair_color}
									eyes={"Eyes Color: " + item.eye_color}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
