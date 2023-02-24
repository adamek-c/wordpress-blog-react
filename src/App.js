import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import { Home, Blog, Contact } from "./pages/index";
// components
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/blog/">
					<Blog />
				</Route>
				<Route path="/kontakt/">
					<Contact />
				</Route>
			</Switch>
		</>
	);
};

export default App;
