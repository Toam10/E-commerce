import React from "react";
import FormInput from "../elements-components/form-input/form-input.component";
import CustomButton from '../elements-components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from "../../Components/firebase/firebase.utlis";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			email: "",
			password: "",
			warningBox: false,
		};
	}

	displayWarningBox = (warningBox) => {
		if (warningBox) {
			this.state.warningBox &&
				window.setTimeout(() => {
					this.setState({ warningBox: false });
				}, 3000);
			return (
				<div className='warning-box-container'>
					<div className='warning-box'>email or password is not curret</div>
				</div>
			);
		}
	};

	async handleSubmit(event) {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			this.setState({ warningBox: true });
			console.log(error);
		}
	}

	handleChange(event) {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I all ready have an acount</h2>
				<span>Sign in with your email and password</span>
				<form>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						label='email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						label='password'
						handleChange={this.handleChange}
						required
					/>
					{this.displayWarningBox(this.state.warningBox)}
					<div className='buttons-container'>
						<CustomButton onClick={this.handleSubmit} type='submit'>
							Sign in
						</CustomButton>
						<CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
