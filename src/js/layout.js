import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Persons } from "./views/persons";
import { Planets } from "./views/persons";
import { Ships } from "./views/ships";

import { InfoPerson } from "./views/infoperson";
import { InfoPlanet } from "./views/infoplanet";
import { InfoShip } from "./views/infoship";

// import { Ships } from "./views/ships";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		state.actions.loadPeoples();
		state.actions.loadPlanets();
		setLoading(false);
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMenu />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/persons">
							<Persons />
						</Route>
						<Route exact path="/infoperson/:id">
							<InfoPerson />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/infoplanet/:id">
							<InfoPlanet />
						</Route>
						<Route exact path="/ships">
							<Ships />
						</Route>
						<Route exact path="/infoship/:id">
							<InfoShip />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
