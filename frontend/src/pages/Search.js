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
			selectedInbound: undefined,
		}
	}

	componentDidMount() {
		fetch(`http://localhost:5000/api/search?from=${this.params.from}&to=${this.params.to}&depart=${this.params.depart}`)
            .then(response => response.json())
            .then(({ flights }) => this.setState({ outboundFlights: flights }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
		fetch(`http://localhost:5000/api/search?from=${this.params.to}&to=${this.params.from}&depart=${this.params["return"]}`)
            .then(response => response.json())
            .then(({ flights }) => this.setState({ inboundFlights: flights }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
	}

    render () {
		
        return (
            <div> 
                <div>
					<h3 className="direction">Ida</h3>
					<ul>
						{(this.state.outboundFlights.length > 0)
							? this.state.outboundFlights.map(outbound =>
							<li key={outbound._id}> 
								<div className="card">
									<div className="card-header">Ceiba Airlines</div>
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
										<br/>
										<input type="button"
											   value="Select"
											   onClick={this.handleClick}
										/>
									</div>
								</div>
							</li>)
							: <span>Sorry, there are no available flights for this date</span>
						}
					</ul>
				</div>
				<div>
					<h3 className="direction">Vuelta</h3>
					<ul>
						{(this.state.inboundFlights.length > 0) 
							? this.state.inboundFlights.map(inbound =>
							<li key={inbound._id}> 
								<div className="card">
									<div className="card-header">Ceiba Airlines</div>
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
										<br/>
										<input type="button" 
											   value="Select"
											   onClick={this.handleClick}/>
									</div>
								</div>
							</li>)
							: <span>Sorry, there are no available flights for this date</span>
						}
					</ul>
				</div>
				<div>
					<Link to={"/"}>Back</Link>
				</div>
            </div>
        )
    }

}

export default Search;