import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../Components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../Components/firebase/firebase.utlis";
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

	async handleSubmit(event) {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			alert("user not found");
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
