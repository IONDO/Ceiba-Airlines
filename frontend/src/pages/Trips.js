import React, { Component } from "react";
import {Link} from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';
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
      <div className="trips">
        <div className="trips-container">
					<div className="table-container">
						<div className="table-wrap">
							<div className="table">
								<div className="table-wrap-nextcols">
									<div>
										<table>
										<thead>
											<tr>
												<th className="column2">Trip</th>
												<th className="column2">Outbound Date</th>
												<th className="column2">Inbound Date</th>
											</tr>
										</thead>
										<tbody>
											{this.state.trips.map(trip =>
											<tr>
												<td>
													<Link to={`/mytrips/${trip._id}`} className="trip-link">
													{trip.outboundFlight.from} - {trip.outboundFlight.to}
													</Link>
												</td>
												<td>
													<span>{moment(trip.departureDate).format('DD-MM-YYYY')}</span>
												</td>
												<td>
												{trip.inboundFlight ? 
													<span>{moment(trip.returnDate).format('DD-MM-YYYY')}</span> :
													<span></span>
												}
												</td>
											</tr>
											)}
										</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default withAuth(Trips);