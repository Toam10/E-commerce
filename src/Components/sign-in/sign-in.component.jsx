import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../Components/firebase/firebase.utlis";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ email: "", password: "" });
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
				<from>
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
					<div className='buttons-container'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</from>
			</div>
		);
	}
}

export default SignIn;
