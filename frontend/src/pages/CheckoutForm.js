import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';

class CheckoutForm extends Component {

  onToken = (token) => {
      fetch("/checkout", {
          method: "POST",
          body: { 
            amount: this.props.amount,
            currency: 'usd',
            token: JSON.stringify(token)
          },
      }).then(() => {
          this.props.onBought(token);
          alert("Thank you for flying with Ceiba!");
      })
  }

  render() {
    return (
      <div className="checkout">
        <StripeCheckout
            stripeKey="pk_test_SMPWTwoXXlWVDCqtEz08DOFB00YF3T8dR4"
            token={this.onToken}
        />
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
