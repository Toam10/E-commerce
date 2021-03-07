import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return (
		<button
			type='submit'
			className={`${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`}
			{...otherProps}
		>
			{children.toUpperCase()}
		</button>
	);
};

export default CustomButton;
