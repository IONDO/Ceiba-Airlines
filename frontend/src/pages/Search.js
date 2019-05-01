import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';

class Search extends Component {
	constructor(props) {
		super()
		this.params = queryString.parse(props.location.search);
		console.log(`Esto es un mensaje del ${JSON.stringify(this.params)}`)
	}

    render () {
        return (
            <div>
                <section>
					<h3 className="direction">Ida</h3>
					<div className="card">
						<div className="card-header">Ceiba Airlines</div>
						<div className="card-body">
							<p>Departure time</p>
							<p>{this.params.from}</p>
							<p>Time</p>
							<p>Duration</p>
							<p>Time</p>
							<p>Arriving time</p>
							<p>Time</p>
						</div>
					</div>
				</section>
				<section>
					<h3 className="direction">Vuelta</h3>
					<div className="card">
						<div className="card-header">Ceiba Airlines</div>
						<div className="card-body">
							<p>Departure time</p>
							<p>Time</p>
							<p>Duration</p>
							<p>Time</p>
							<p>Arriving time</p>
							<p>Time</p>
						</div>
					</div>
				</section>
				<div>
					<Link to={"/"}>Back</Link>
				</div>
            </div>
        )
    }

}

export default Search;