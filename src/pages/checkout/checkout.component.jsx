import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotalAmount } from "../../Components/redux/cart/cart.selectors";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../Components/elements-components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, totalAmount }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className='total'>TOTAL:${totalAmount}</div>
		<div className='warning-payments'>
				*Please use to following test credit card for payments*
				<br></br>{`4242 4242 4242 4242 Exp:${new Date().getMonth() + 2 }/ ${new Date().getFullYear()}  -- CW: 123`}
		</div>
		<StripeCheckoutButton className='stripe-button' price={totalAmount} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalAmount: selectCartTotalAmount,
});

export default connect(mapStateToProps)(CheckoutPage);
