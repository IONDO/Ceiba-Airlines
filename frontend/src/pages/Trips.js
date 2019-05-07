import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

import travel from '../lib/travel';


class Trips extends Component {
	constructor(props) {
    super(props)
		this.state = {
			trips: [],
			flights: [],
			filteredOutboundFlights: [],
			filteredInboundFlights: []
		}
	}

	componentDidMount() {
		travel.trips()
				.then(trips => {
					this.setState({ trips })
					travel.flights()
					.then(flights => {
						this.setState({ flights })
						this.compareOutbound()
						this.compareInbound()
					})
						.catch(error => {
								console.log("error", error);
								this.setState({ status: "error" });
						});
				})
					.catch(error => {
						console.log("error", error);
							this.setState({ status: "error" });
					});
				}

	compareOutbound() {

		const userTrips = this.state.trips;
		const availableFlights = this.state.flights;
		const filteredOutboundFlights = []
		userTrips.forEach((userTrip) => availableFlights.forEach((availableFlight) => {
			if(userTrip.outboundFlightId === availableFlight._id) {
				filteredOutboundFlights.push(availableFlight)	
			}
		}));
		this.setState({ filteredOutboundFlights })
	}

	compareInbound() {
		console.log('cargando')
		const userTrips = this.state.trips;
		const availableFlights = this.state.flights;
		const filteredInboundFlights = []
		userTrips.forEach((userTrip) => availableFlights.forEach((availableFlight) => {
			if(userTrip.inboundFlightId === availableFlight._id) {
				filteredInboundFlights.push(availableFlight)	
			}
		}));
		this.setState({ filteredInboundFlights })
	}



  render() {
		const {filteredOutboundFlights, filteredInboundFlights} = this.state
    return (
      <div>
        <h1>Find below the your list of saved flights</h1>
				<ul>
					{filteredOutboundFlights.map(outboundFlight => <li key={outboundFlight._id}>
						<div className="card-header">Outbound</div>
									<div className="card-body">
										<p>From</p>
										<span>{outboundFlight.from}</span>
										<p>Departure time</p>
										<span>{outboundFlight.departure_time}</span>
										<p>Duration</p>
										<span>{outboundFlight.duration}</span>
										<p>To</p>
										<span>{outboundFlight.to}</span>
										<p>Arriving time</p>
										<span>{outboundFlight.arrival_time}</span>
										<p>Price</p>
										<span>{outboundFlight.price} CFAs</span>
									</div>

					</li>)}
				</ul>
				<ul>
					{filteredInboundFlights.map(inboundFlight => <li key={inboundFlight._id}>
						<div className="card-header">Inbound</div>
									<div className="card-body">
										<p>From</p>
										<span>{inboundFlight.from}</span>
										<p>Departure time</p>
										<span>{inboundFlight.departure_time}</span>
										<p>Duration</p>
										<span>{inboundFlight.duration}</span>
										<p>To</p>
										<span>{inboundFlight.to}</span>
										<p>Arriving time</p>
										<span>{inboundFlight.arrival_time}</span>
										<p>Price</p>
										<span>{inboundFlight.price} CFAs</span>
									</div>

					</li>)}
				</ul>
      </div>
    );
  }
}

export default withAuth(Trips);