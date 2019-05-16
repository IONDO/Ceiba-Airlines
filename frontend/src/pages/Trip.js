import React, { Component, Fragment } from "react";
import { withAuth } from "../lib/AuthProvider";

import Navbar from "../components/Navbar";

import 'bulma/css/bulma.css';
import '../css/App.css';
import '../css/Search.css';

import travel from '../lib/travel';


class Trip extends Component {
	constructor(props) {
    super(props)
		this.tripId = props.match.params.tripId;
		this.state = {
			trip: undefined,
			isLoading: true,
		}
	}

  componentDidMount() {
    travel.trip(this.tripId)
        .then(trip => {
					console.log("tripi", trip)
					this.setState({ 
						trip,
						isLoading: false
					 }
				)})
        .catch(error => {
            console.log("error", error);
            this.setState({ status: "error" });
        });
	}
	
	renderFlight(title, flight) {
		return <div>
			<div className="search-container trip">
				<div className="search">
					<div className="section booking-results">
						<div className="card child">
							<div className="card-header flight-list-header">{title}</div>
							<div className="card-body flight-list-wrapper">
								<div className="flight-header">
									<div className="flight-header__flight-basic">
										<div className="flight-header__selected-header">
											<div className="flight-header__content">
												<div className="flight-header__informations">
													<div className="duration meta-row">
														<div className="flexy">
															<div className="direct">Direct</div>
															<strong className="time-label">({flight.duration})</strong>
														</div>
													</div>
													<div className="time meta-row">
														<div className="start-time">{flight.departure_time}</div>
														<div className="plane">
															<hr className="horizontal-line" />
														</div>
														<div className="end-time">{flight.arrival_time}</div>
													</div>
													<div className="flight-cities">
														<div className="cities">
															<span className="cities__departure">{flight.from}</span>
															<span className="cities__destination">{flight.to}</span>
														</div>
													</div>
													<div className="duration meta-row">
														<div className="flexy">
															<div className="direct">Price</div>
															<span className="direct">{flight.price} CFAs</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div className="fixed-top-navbar">
          <Navbar />
        </div>
			</div>
		</div>;
	}

  render() {
    return (
      <div>
				{this.state.isLoading 
					? (<div>loading</div>)
					: (<div>
							{this.state.trip.outboundFlight && this.renderFlight("Outbound",this.state.trip.outboundFlight)}
							{this.state.trip.inboundFlight && this.renderFlight("Inbound",this.state.trip.inboundFlight)}
						</div>
					)}
      </div>
    );
  }
}

export default withAuth(Trip);