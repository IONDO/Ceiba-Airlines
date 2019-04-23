import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import '../Search.css';
import flights from '../data/flights'

class Search extends Component {
    render () {
        return (
            <div>
                <section>
					<h3 className="direction">Ida</h3>
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
            </div>
        )
    }

}

export default Search;