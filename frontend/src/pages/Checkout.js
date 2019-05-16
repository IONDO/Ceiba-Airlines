import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../css/App.css';
import '../css/Search.css';
import '../css/Checkout.css';

import travel from '../lib/travel';


class Checkout extends Component {
	/* constructor(props) {
    super(props)
		//this.tripId = props.match.params.tripId;
		this.state = {
      trip: undefined,
		}
	} */

/*   componentDidMount() {
    travel.trip(this.tripId)
        .then(trip => this.setState({ trip }))
        .catch(error => {
            console.log("error", error);
            this.setState({ status: "error" });
        });
	} */
	
/* 	renderFlight(title, flight) {
		return <>
			<div className="card-header">{title}</div>
			<div className="card-body">
				<p>This is a test</p>
			</div>
		</>;
	} */

  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-form-container">
						<h3>Payment information:</h3>
            <div className="form-row">
              <div className="form-holder">
                <label className="payment-method method">
                  <img src="../img/card-payment.png" alt=""/>
                  Debit/Credit card
                </label>
              </div>
            </div>
            <div className="form-row">
                <div className="form-holder form-holder-2">
                  <label className="form-inner">
                    <span className="form-inner-text">Card holder name*</span>
                  </label>
                </div>
             </div>
             <div className="form-row">
                <div className="form-holder">
                  <label className="form-inner">
                    <span className="form-inner-text">Card number*</span>
                  </label>
                </div>
                <div className="form-holder">
                  <label className="form-inner">
                    <span className="form-inner-text">CVC*</span>
                  </label>
                </div>
             </div>
             <div className="form-row form-row-date">
                <div className="form-holder form-holder-2 date">
                  <div className="form-special-label">Expiry Date*</div>
                  <select className="form-select select">
                      <option value="Month" disabled="" selected="">Month</option>
											<option value="Feb">Feb</option>
											<option value="Mar">Mar</option>
											<option value="Apr">Apr</option>
											<option value="May">May</option>
									</select>
                  <select className="form-select select">
                      <option value="Year" disabled="" selected="">Year</option>
											<option value="2023">2023</option>
											<option value="2022">2022</option>
											<option value="2021">2021</option>
											<option value="2020">2020</option>
                      <option value="2019">2019</option>
											<option value="2018">2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
                      <option value="2015">2015</option>                      
									</select>
                </div>
             </div>
        </div>
        <div className="action-payment">
          <button className="submit-payment">Submit payment</button>
        </div>
      </div>
    );
  }
}

export default withAuth(Checkout);