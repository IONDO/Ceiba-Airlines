import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import 'bulma/css/bulma.css';
import '../App.css';

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
            <div className="App">
                <h3>{this.props.user.fullname} update your profile</h3>
                <form onSubmit={this.handleFormSubmit}>
                  <label>Fullname:</label>
                    <input
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={this.handleChange}
                      placeholder="testing@test.com"
                    />
                    <input type="submit" value="Update" />
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      placeholder="testing@test.com"
                    />
                    <input type="submit" value="Update" />
                </form>
                <div>
					        <Link to={"/"}>Search</Link>
				        </div>
            </div>
        );
    }
}

export default withAuth(Profile);
