import React, { Component } from "react";
import {Link} from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import Navbar from "../components/Navbar";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Trips.css';

import travel from '../lib/travel';
import moment from "moment"


class Trips extends Component {
	constructor(props) {
    super(props)
		this.state = {
			trips: []
		}
	}

	componentDidMount() {
		travel.trips()
			.then(trips => {
				this.setState({ trips })
			})
			.catch(error => {
				console.log("error", error);
					this.setState({ status: "error" });
			});
	}

  render() {
    return (
      <div className="my-trips-container">
				<div className="my-trips-header">
					<h1 className="my-trips-header-title ">My trips</h1>
				</div>
				<div className="my-trips-list-wrapper trip-row">
					<div className="my-trips-list-content">
						<div>
							{this.state.trips.map(trip =>
								<>
									<div className="my-trip-item-table">
										<div className="my-trip-item-table-row">
											<div className="my-trip-item-table-row-base">
													<div className="my-trip-item-table-dir">
														<strong><Link to={`/mytrips/${trip._id}`} className="trip-link">
															{trip.outboundFlight.from} - {trip.outboundFlight.to}
															</Link>
														</strong>
													</div>
													<div className="my-trip-item-table-date">
														<div>{moment(trip.departureDate).format('DD-MM-YYYY')} </div>
														{trip.inboundFlight ? 
															<div>{moment(trip.returnDate).format('DD-MM-YYYY')}</div> :
															<span></span>
														}
													</div>
											</div>
										</div>
									</div>
									<div className="space-between-item">
										<span> </span>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className="fixed-top-navbar">
          <Navbar />
        </div>
			</div>
    );
  }
}

export default withAuth(Trips);