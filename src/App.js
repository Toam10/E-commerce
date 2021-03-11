import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/home-page.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/Shop/shop-page.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
	auth,
	enterCustomerIntoThePlatformThroughGoogle,
} from "./Components/firebase/firebase.utlis";

import { connect, useStore } from "react-redux";
import { setCurrentUser } from "./Components/redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Components/redux/user/user.selectors";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log(userAuth);
			if (userAuth) {
				const userRef = await enterCustomerIntoThePlatformThroughGoogle(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({ id: snapShot.id, ...snapShot.data() });
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUp />
							)
						}
					/>

					<Route exact path='/checkout' component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
