import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

import travel from '../lib/travel';


class Checkout extends Component {
	constructor(props) {
    super(props)
    console.log(props)
		this.tripId = props.match.params.tripId;
		this.state = {
      trip: undefined,
		}
	}

  componentDidMount() {
    travel.trip(this.tripId)
        .then(trip => this.setState({ trip }))
        .catch(error => {
            console.log("error", error);
            this.setState({ status: "error" });
        });
	}
	
	renderFlight(title, flight) {
		return <>
			<div className="card-header">{title}</div>
			<div className="card-body">
				<p>From</p>
				<span>{flight.from}</span>
				<p>To</p>
				<span>{flight.to}</span>
				<p>Departure time</p>
				<span>{flight.departure_time}</span>
				<p>Duration</p>
				<span>{flight.duration}</span>
				<p>Arriving time</p>
				<span>{flight.arrival_time}</span>
				<p>Price</p>
				<span>{flight.price} CFAs</span>
				<br/>
			</div>
		</>;
	}

  render() {
		console.log(this.state.trip);
    return (
      <div>
        <div className="passanger-box">
            <div className="passanger-header">
                <span></span>
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Checkout);