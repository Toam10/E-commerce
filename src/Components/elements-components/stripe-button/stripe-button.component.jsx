import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IVKmqJsEBa1WbRi8bf51MjvHIyY0abLAi4wRp2mP2RDjMMuluMmAPROsQekuHGLC0nbTX73rLaC94yS9twIU0MG00m3Se4xwi";
	const onToken = (token) => {
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Crwn Clothing'
			billingAddress
			shippingAddress
			image='http://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};


export default StripeCheckoutButton