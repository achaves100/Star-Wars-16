import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Persons = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.peoples);
	useEffect(() => {
		actions.loadPeoples();
	}, []);
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
									index={index}
								/>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
};
