import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

import travel from '../lib/travel';


class Trip extends Component {
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

  render() {
    return (
      <div>
        {this.state.trip ? 
        <>
        <div className="card-header">Outbound</div>
				<div className="card-body">
					<p>From</p>
					<span>{this.state.trip.outboundFlight.from}</span>
          <p>To</p>
					<span>{this.state.trip.outboundFlight.to}</span>
					<p>Departure time</p>
					<span>{this.state.trip.outboundFlight.departure_time}</span>
					<p>Duration</p>
					<span>{this.state.trip.outboundFlight.duration}</span>
					<p>Arriving time</p>
					<span>{this.state.trip.outboundFlight.arrival_time}</span>
					<p>Price</p>
					<span>{this.state.trip.outboundFlight.price} CFAs</span>
					<br/>
				</div>
        <div className="card-header">Inbound</div>
				<div className="card-body">
					<p>From</p>
					<span>{this.state.trip.inboundFlight.from}</span>
          <p>To</p>
					<span>{this.state.trip.inboundFlight.to}</span>
					<p>Departure time</p>
					<span>{this.state.trip.inboundFlight.departure_time}</span>
					<p>Duration</p>
					<span>{this.state.trip.inboundFlight.duration}</span>
					<p>Arriving time</p>
					<span>{this.state.trip.inboundFlight.arrival_time}</span>
					<p>Price</p>
					<span>{this.state.trip.inboundFlight.price} CFAs</span>
					<br/>
        </div>
        </>
        : <span></span>
        }
        {console.log(this.state.trip)}
      </div>
    );
  }
}

export default withAuth(Trip);