import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/home-page.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shop/shop-page.component";
import Header from "./Components/header/header.component";
function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
