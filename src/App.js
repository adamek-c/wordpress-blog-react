import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default App;
