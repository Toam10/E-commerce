import React from "react";
import FormInput from '../elements-components/form-input/form-input.component'
import CustomButton from "../elements-components/custom-button/custom-button.component";

import { auth, enterCustomerIntoThePlatformThroughGoogle } from "../firebase/firebase.utlis";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState(
			{
				[name]: value,
			},
		);
	}

	async handleSubmit(event) {
		const { confirmPassword, password, email, displayName } = this.state;
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("password dont match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await enterCustomerIntoThePlatformThroughGoogle(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			return console.log(error);
		}
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have account</h2>
				<span>sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleInputChange}
						label='Name'
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleInputChange}
						label='Email'
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleInputChange}
						label='Password'
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleInputChange}
						label='Confirm Password'
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
