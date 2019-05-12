import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Navbar from "../components/Navbar";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';
import travel from '../lib/travel';

class Search extends Component {
	constructor(props) {
		super(props)
		this.params = queryString.parse(props.location.search);
		this.state = {
			outboundFlights: [],
			inboundFlights: [],
			selectedOutbound: undefined,
			selectedInbound: undefined,
			saving: false
		}
	}

	componentDidMount() {
		travel.search(this.params.from, this.params.to, this.params.depart)
			.then(outboundFlights => this.setState({ outboundFlights }))
			.catch(error => {
				console.log("error", error);
				this.setState({ status: "error" });
			});
		travel.search(this.params.to, this.params.from, this.params["return"])
            .then(inboundFlights => this.setState({ inboundFlights }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
	}

	handleSelectOutbound(selectedOutbound) {
		this.setState({ selectedOutbound });
	}

	handleSelectInbound(selectedInbound) {
		this.setState({ selectedInbound });
	}

	save() {
		const outbound = this.state.selectedOutbound._id;
		const inbound = this.state.selectedInbound ? this.state.selectedInbound._id : undefined;
		const departureDate = this.params.depart;
		const returnDate= this.params["return"]
		this.setState({ saving: true }, () => 
			travel
				.createTrip(outbound, departureDate, inbound, returnDate)
				.then(tripId => {
					this.props.history.push(`/mytrips/${tripId}`)
				})
		);
    }

    render () {
        return (
            <div className="search-container">
				<Navbar />
				<div className="search">
					<div className="section booking-results">
                		<div className="card child">
							<ul>
								{(this.state.outboundFlights.length > 0)
									? this.state.outboundFlights.map(outbound =>
									<li key={outbound._id}> 
											<div className="card-header flight-list-header">
												<div className="details">
													<div className="destination">
														<div className="icon">
															<img src="../img/plane-taking-off.png" alt=""/>
														</div>
														<span>{outbound.from} - {outbound.to}</span>
													</div>
												</div>
												<div className="date-section">{this.params.depart}</div>
											</div>
											<div className="card-body flight-list-wrapper">
												<div className="flight-header">
													<div className="flight-header__flight-basic">
														<div className="flight-header__selected-header">
															<div className="flight-header__content">
																<div className="flight-header__informations">
																	<div className="duration meta-row">
																		<div className="flexy">
																			<div className="direct">Direct</div>
																			<strong className="time-label">({outbound.duration})</strong>
																		</div>
																	</div>
																	<div className="time meta-row">
																		<div className="start-time">{outbound.departure_time}</div>
																		<div className="plane">
																			<hr className="horizontal-line" />
																		</div>
																		<div className="end-time">{outbound.arrival_time}</div>
																	</div>
																	<div className="flight-cities">
																		<div className="cities">
																			<span className="cities__departure">{outbound.from}</span>
																			<span className="cities__destination">{outbound.to}</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="price-section">
														<div className="price">
															<div className="price-wrapper">
																<div className="price-price">
																	<span>{outbound.price} CFAs</span>
																</div>
																<div>
																	<input className="btn-select-flight"
																		type="button"
																		value="Select"
																		onClick={() => this.handleSelectOutbound(outbound)}
																	/> 
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
									</li>)
									: <span>Sorry, there are no available flights for this date</span>
								}
							</ul>
						</div>
						<div className="card child">
							<ul>
								{(this.state.inboundFlights.length > 0)
									? this.state.inboundFlights.map(inbound =>
									<li key={inbound._id}> 
											<div className="card-header flight-list-header">
												<div className="details">
													<div className="destination">
														<div className="icon">
															<img src="../img/plane-taking-off.png" alt=""/>
														</div>
														<span>{inbound.from} - {inbound.to}</span>
													</div>
												</div>
												<div className="date-section">{this.params["return"]}</div>
											</div>
											<div className="card-body flight-list-wrapper ">
												<div className="flight-header">
													<div className="flight-header__flight-basic">
														<div className="flight-header__selected-header">
															<div className="flight-header__content">
																<div className="flight-header__informations">
																	<div className="duration meta-row">
																		<div className="flexy">
																			<div className="direct">Direct</div>
																			<strong className="time-label">({inbound.duration})</strong>
																		</div>
																	</div>
																	<div className="time meta-row">
																		<div className="start-time">{inbound.departure_time}</div>
																		<div className="plane">
																			<hr className="horizontal-line" />
																		</div>
																		<div className="end-time">{inbound.arrival_time}</div>
																	</div>
																	<div className="flight-cities">
																		<div className="cities">
																			<span className="cities__departure">{inbound.from}</span>
																			<span className="cities__destination">{inbound.to}</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="price-section">
														<div className="price">
															<div className="price-wrapper">
																<div className="price-price">
																	<span>{inbound.price} CFAs</span>
																</div>
																<div>
																	<input className="btn-select-flight"
																		type="button"
																		value="Select"
																		onClick={() => this.handleSelectInbound(inbound)}
																	/> 
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
									</li>)
									: <span>Sorry, there are no available flights for this date</span>
								}
							</ul>
						</div>
						</div>
					{this.state.selectedOutbound ?
						<div className="selection-wrapper">
							<div className="selection-summary">
								<h2 className=" selection-summary-header">Your trip</h2>
								<hr/>
								<div>
									<div className="card-body selection-summary-booking">
										<div className="selection-summary-booking-route">
											{this.state.selectedOutbound ? 
												<>
													<h4 className="selection-summary-booking-route-heading-top">
														<span>{this.state.selectedOutbound.from_code} {this.state.selectedOutbound.from} - </span>
														 <span>{this.state.selectedOutbound.to_code} {this.state.selectedOutbound.to}</span>
													</h4>
													<table className="selection-summary-booking-route-table">
														<tbody>
															<tr className="selection-summary-booking-route-tr">
																<td className="selection-summary-booking-route-table-heading">Departure</td>
																<td>{this.state.selectedOutbound.departure_time}, {this.params.depart}</td>
															</tr>
															<tr className="selection-summary-booking-route-tr">
																<td className="selection-summary-booking-route-table-heading">Arrival</td>
																<td>{this.state.selectedOutbound.arrival_time}, {this.params.depart}</td>
															</tr>
														</tbody>
													</table>
												</> : 
												<span>Select a flight</span>
											}
										</div>
									</div>
									<div className="card-body selection-summary-booking">
										<div className="selection-summary-booking-route">
											{this.state.selectedInbound ?
												<>
													<h4 className="selection-summary-booking-route-heading-bottom">
														<span>{this.state.selectedInbound.from_code} {this.state.selectedInbound.from} - </span>
														<span>{this.state.selectedInbound.to_code} {this.state.selectedInbound.to}</span>
													</h4>
													<table className="selection-summary-booking-route-table">
														<tbody>
															<tr className="selection-summary-booking-route-tr">
																<td className="selection-summary-booking-route-table-heading">Departure</td>
																<td>{this.state.selectedInbound.departure_time}, {this.params["return"]}</td>
															</tr>
															<tr className="selection-summary-booking-route-tr">
																<td className="selection-summary-booking-route-table-heading">Arrival</td>
																<td>{this.state.selectedInbound.arrival_time}, {this.params["return"]}</td>
															</tr>
														</tbody>
													</table>
												</> :
												<span></span>
											}
										</div>	
									</div>
								</div>
								<div className="selection-summary-footer">
									<h3 className="selection-summary-total">
										Total
										:
										<span className="selection-summary-price-total">
										{this.state.selectedInbound ?
											<>
											{this.state.selectedOutbound.price + this.state.selectedInbound.price} CFAs
											</> : <span>{this.state.selectedOutbound.price} CFAs</span>
										} 
										</span>
									</h3>		
									{this.state.selectedOutbound ?
											<>
												<input className="btn-select-flight" 
													type="button" 
													value="Save"
													onClick={() => this.save()}
													disabled={this.state.saving}
												/>
											</> : 
											<span></span>
									}
								</div> 
							</div>
						</div> : <span></span>
					}
				</div>
				<div>
					<Link to={"/"}>Back</Link>
				</div>
            </div>
        )
    }

}

export default Search;