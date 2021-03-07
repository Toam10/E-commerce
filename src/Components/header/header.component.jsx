import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Components/firebase/firebase.utlis";
import { ReactComponent as Logo } from "../../assets/crown.svg";

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

const Header = ({ currentUser }) => {
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
			</div>
		</div>
	);
};

export default Header;