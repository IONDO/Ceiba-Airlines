import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../css/App.css';

class NoMatch extends Component {
    constructor(props) {
		super(props)
		this.searchedPage = props.location;
	}


    render () {
        return (
            <div className="page-container">
                <h1>404</h1>
                <h2>We're sorry but the page you are looking for is on vacation, why don't you do the same?</h2>
                <Link className="link" to="/login">Search</Link>
            </div>
        )
    }
}

export default NoMatch;