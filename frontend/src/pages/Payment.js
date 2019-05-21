import React, {Component} from 'react';
import { withAuth } from "../lib/AuthProvider";

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Payment extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_SMPWTwoXXlWVDCqtEz08DOFB00YF3T8dR4">
        <div className="example">
          <Elements>
            <CheckoutForm onBought={this.props.onBought} amount={this.props.amount}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default withAuth(Payment);
