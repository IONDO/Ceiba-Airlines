import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

class Search extends Component {
	constructor(props) {
		super(props)
		this.params = queryString.parse(props.location.search);
		this.state = {
			outboundFlights: [],
			inboundFlights: [],
			selectedOutbound: undefined,
			selectedInbound: undefined
		}
	}

	componentDidMount() {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/search?from=${this.params.from}&to=${this.params.to}&depart=${this.params.depart}`)
            .then(response => response.json())
            .then(({ flights }) => this.setState({ outboundFlights: flights }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
		fetch(`${process.env.REACT_APP_BACKEND_URL}/api/search?from=${this.params.to}&to=${this.params.from}&depart=${this.params["return"]}`)
            .then(response => response.json())
            .then(({ flights }) => this.setState({ inboundFlights: flights }))
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

    render () {
        return (
            <div>
				<div className="search">
					<div className="section">
                	<div className="card child">
						<ul>
							{(this.state.outboundFlights.length > 0)
								? this.state.outboundFlights.map(outbound =>
								<li key={outbound._id}> 
										<div className="card-header">Ida</div>
										<div className="card-body">
											<p>From</p>
											<span>{outbound.from}</span>
											<p>Departure time</p>
											<span>{outbound.departure_time}</span>
											<p>Departure date</p>
											<span>{this.params.depart}</span>
											<p>Duration</p>
											<span>{outbound.duration}</span>
											<p>To</p>
											<span>{outbound.to}</span>
											<p>Arriving time</p>
											<span>{outbound.arrival_time}</span>
											<p>Price</p>
											<span>{outbound.price} CFAs</span>
											<br/>
											<input type="button"
												   value="Select"
												   onClick={() => this.handleSelectOutbound(outbound)}
											/>
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
									
										<div className="card-header">Vuelta</div>
										<div className="card-body">
											<p>From</p>
											<span>{inbound.from}</span>
											<p>Departure time</p>
											<span>{inbound.departure_time}</span>
											<p>Return date</p>
											<span>{this.params["return"]}</span>
											<p>Duration</p>
											<span>{inbound.duration}</span>
											<p>To</p>
											<span>{inbound.to}</span>
											<p>Arriving time</p>
											<span>{inbound.arrival_time}</span>
											<p>Price</p>
											<span>{inbound.price} CFAs</span>
											<br/>
											<input type="button" 
												   value="Select"
												   onClick={() => this.handleSelectInbound(inbound)}/>
										</div>
							
								</li>)
								: <span>Sorry, there are no available flights for this date</span>
							}
						</ul>
					</div>
					</div> 
				{(this.state.outboundFlights > 0) ?
					<div className="card">
						<div className="card-header">Total Price</div>
						<div className="card-body">
							{this.state.selectedOutbound ? 
								<>
								<h3>Ida</h3>
								<p>From</p>
								{this.state.selectedOutbound.from}
								<p>Departure time</p>
								{this.state.selectedOutbound.departure_time}
								<p>To</p>
								{this.state.selectedOutbound.to}
								<p>Arriving time</p>
								{this.state.selectedOutbound.arrival_time}
								<p>Duration</p>
								{this.state.selectedOutbound.duration}
								<p>Price</p>
								{this.state.selectedOutbound.price}
								</> : 
								<span>Select a flight</span>
							}
							<hr/>
							{this.state.selectedInbound ?
								<>
								<h3>Vuelta</h3>
								<p>From</p>
								{this.state.selectedInbound.from}
								<p>Departure time</p>
								{this.state.selectedInbound.departure_time}
								<p>To</p>
								{this.state.selectedInbound.to}
								<p>Arriving time</p>
								{this.state.selectedInbound.arrival_time}
								<p>Duration</p>
								{this.state.selectedInbound.duration}
								<p>Price</p>
								{this.state.selectedInbound.price}
								<hr/>
								</> :
								<span></span>
							}
							<br/>
							{this.state.selectedOutbound ?
								<>
								<input type="button" 
									value="Save"
									onClick={this.handleSave}/>
								</> : 
								<span></span>
							}
						</div> 
						</div>
						: <span></span>
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