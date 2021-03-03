import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/home-page.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/Shop/shop-page.component";
function App() {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
			<Route path='/shop' component={ShopPage} />
		</div>
	);
}

export default App;
