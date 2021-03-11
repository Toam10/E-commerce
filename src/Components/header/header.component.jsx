import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Components/firebase/firebase.utlis";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
const UserSignInToggel = (currentUser) => {
	if (currentUser) {
		return (
			<div className='option' onClick={() => auth.signOut()}>
				SIGN OUT
			</div>
		);
	} else {
		return (
			<Link className='option' to='/signin'>
				SIGN IN
			</Link>
		);
	}
};

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>

				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{UserSignInToggel(currentUser)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
