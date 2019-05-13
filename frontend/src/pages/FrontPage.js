import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import moment from "moment";

import Navbar from "../components/Navbar";

import "react-datepicker/dist/react-datepicker.css";
import 'bulma/css/bulma.css';
import '../FrontPage.css';
import '../css/style.css'

import { withAuth } from "../lib/AuthProvider";
import travel from '../lib/travel';

class FrontPage extends Component {

    state = {
        routes: [],
        originOptions: [],
        originText: '',
        departureDate: undefined,
        destinationOptions: [],
        destinationText: '',
        returnDate: undefined
    }

    componentDidMount() {
        travel.routes()
            .then(routes => this.setState({ routes }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
    }

    onSearchOriginChange = (e) => {
        const originText = e.target.value;
        let originOptions = [];
        if (originText.length > 0) {
            const regex = new RegExp(`^${originText}`, 'i')
            originOptions = this.state.routes
                .filter(route => regex.test(route.from.name))
                .sort((left, right) => left.from.name.localeCompare(right.from.name))
        }
        this.setState({ originOptions, originText });
    }

    onSearchDestinationChange = (e) => {
        const destinationText = e.target.value;
        let destinationOptions = [];
        if(destinationText.length > 0) {
            const regex = new RegExp(`^${destinationText}`, 'i');
            destinationOptions = this.state.originOptions[0].to
                .filter(destination => regex.test(destination.name))
                .sort((left, right) => left.name.localeCompare(right.name))
        }
        this.setState({ destinationOptions, destinationText });
    }

    originSelected(route) {
        this.setState(() => ({
            originText: route.from.name,
            originOptions: [route],
        }))
    }

    destinationSelected(destination) {
        this.setState(() => ({
            destinationText: destination.name,
            destinationOptions: [destination],
        }))
    }

    renderFlightOrigin () {
        const { originText, originOptions } = this.state;
        if(originOptions.length === 0 ||
            ((originOptions.length === 1) && (originText === originOptions[0].from.name))) {
            return null;
        }
        return (
            <div className="suggestions">
                <ul>
                    {originOptions.map((origin) => 
                        <li onClick={() => this.originSelected(origin)} key={origin._id}>{origin.from.name}</li>)}
                </ul>
            </div>
        )
    }

    renderFlightDestination () {
        const { destinationText, destinationOptions } = this.state;
        if(destinationOptions.length === 0 ||
            ((destinationOptions.length === 1) && (destinationText === destinationOptions[0].name))) {
            return null;
        }
        return (
            <div className="suggestions">
                <ul>
                    {destinationOptions.map((destination) => 
                        <li onClick={() => this.destinationSelected(destination) } key={destination._id}>{destination.name}</li>)}
                </ul>
            </div>
        )
    }

    formatDate(date) {
        return moment(date).format('DD/MM/YYYY')
    }

    search = () => {
        this.props.history.push(`/search?from=${this.state.originOptions[0].from.code}&to=${this.state.destinationOptions[0].code}&depart=${this.formatDate(this.state.departureDate)}&return=${this.formatDate(this.state.returnDate)}`);
    }

    handleDepartureChange = (departureDate) => this.setState({ departureDate })

    handleReturnChange = (returnDate) => this.setState({ returnDate })
     
  render() {
    const { user} = this.props;
    return (
        <div className="frontpage">
            <div className="frontpage-container">
            <h1 className="user-message">Welcome {user.fullname}</h1>
            <div className="section-center">
            <div className="container">
                <div className="frontpage-search-box">
                    <div className="booking-form">
                        <div className="form-group">
								<div className="form-checkbox">
									<label id="roundtrip">
										<input type="radio" id="roundtrip" name="flight-type"/>
										<span></span>Roundtrip
									</label>
									<label id="one-way">
										<input type="radio" id="one-way" name="flight-type"/>
										<span></span>One way
									</label>
								</div>
						</div>
                        <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label">Flying from</span>
                                        <input className="form-control" type="text" 
                                            value={this.state.originText} 
                                            onChange={this.onSearchOriginChange}
                                            placeholder="City or airport" 
                                        />
                                        {this.renderFlightOrigin()}
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label">Flyning to</span>
                                        <input className="form-control" 
                                            type="text" 
                                            value={this.state.destinationText} 
                                            onChange={this.onSearchDestinationChange}
                                            placeholder="City or airport"
                                            disabled={this.state.originOptions.length !== 1}/>
                                        {this.renderFlightDestination()}
									</div>
								</div>
						</div>
                        <div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label">Departing</span>
                                        <DatePicker className="form-control" 
                                            selected={this.state.departureDate}
                                            onChange={this.handleDepartureChange}
                                            minDate={new Date()}
                                            dateFormat="dd/mm/yyyy"
                                            placeholderText="dd/mm/yyyy"
                                        />
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<span className="form-label">Returning</span>
                                        <DatePicker className="form-control"
                                            selected={this.state.returnDate}
                                            onChange={this.handleReturnChange}
                                            minDate={this.state.departureDate}
                                            dateFormat="dd/mm/yyyy"
                                            placeholderText="dd/mm/yyyy"
                                        />
									</div>
								</div>
								<div className="col-md-2">
									<div className="form-group">
										<span className="form-label">Adults (18+)</span>
										<select className="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span className="select-arrow"></span>
									</div>
								</div>
								<div className="col-md-2">
									<div className="form-group">
										<span className="form-label">Children (0-17)</span>
										<select className="form-control">
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</select>
										<span className="select-arrow"></span>
									</div>
								</div>
							</div>
                            <div className="button-section">
								<div className="form-btn">
                                    <input className="submit-btn button" 
                                        onClick={this.search}
                                        type="button"
                                        value="Show flights"
                                        disabled={
                                            this.state.originOptions.length !== 1 ||
                                            this.state.destinationOptions.length !== 1 ||
                                            !this.state.departureDate ||
                                            !this.state.returnDate
                                        }
                                    />
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
        </div>
    );
  }
}

export default withAuth(FrontPage);
