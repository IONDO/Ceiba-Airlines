import React, { Component } from "react";
import {Link} from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

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
      <div>
        <h1>Find below the your list of saved flights</h1>
				<table>
					<thead>
						<tr>
							<th>Trip</th>
							<th>Outbound Date</th>
							<th>Inbound Date</th>
						</tr>
					</thead>
					<tbody>
						{this.state.trips.map(trip =>
						<tr>
							<td>
								<Link to={`/mytrips/${trip._id}`}>
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
    );
  }
}

export default withAuth(Trips);