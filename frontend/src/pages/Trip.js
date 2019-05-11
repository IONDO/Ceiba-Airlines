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
	
	renderFlight(title, flight) {
		return <>
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
			</div>
		</>;
	}

  render() {
		console.log(this.state.trip);
    return (
      <div>
				{this.state.trip ? 
					[this.renderFlight("Outbound",this.state.trip.outboundFlight), 
					 (this.state.trip.inboundFlight) ? this.renderFlight("Inbound",this.state.trip.inboundFlight) : null]
					: <span></span>}
      </div>
    );
  }
}

export default withAuth(Trip);