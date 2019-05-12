import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

import Navbar from "../components/Navbar";

import 'bulma/css/bulma.css';
import '../App.css';
import '../Profile.css';

class Profile extends Component {

    state = {
      fullname: this.props.user.fullname,
      username: this.props.user.username,
    };

    handleFormSubmit = event => {
      event.preventDefault();
      const { fullname, username } = this.state;
      this.props.update({ fullname, username });
    };

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
     
    render() {
        const { fullname,username } = this.state;
        return (
            <div className="profile-container">
            <Navbar />
              <div className="profile-update">
                <div className="form">
                <form onSubmit={this.handleFormSubmit}>
                    <input
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={this.handleChange}
                      placeholder="Fullname"
                    />
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
