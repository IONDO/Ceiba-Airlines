import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

import Navbar from "../components/Navbar";

import 'bulma/css/bulma.css';
import '../css/App.css';
import '../css/Profile.css';

class Profile extends Component {
    state = {
      username: this.props.user.username,
    };

    handleFormSubmit = event => {
      event.preventDefault();
      const { username } = this.state;
      this.props.update({ username });
    };

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
     
    render() {
        const { username } = this.state;
        return (
            <div className="profile-container">
            <Navbar />
              <div className="profile-update">
                <div className="form">
                <form onSubmit={this.handleFormSubmit}>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      placeholder="Username"
                    />
                    <button>Update</button>
                </form>
              </div>  
				      </div>
            </div>
        );
    }
}

export default withAuth(Profile);
