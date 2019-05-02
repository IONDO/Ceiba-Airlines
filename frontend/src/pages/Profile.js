import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import 'bulma/css/bulma.css';
import '../App.css';

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
            <div className="App">
                <h3>{this.props.user.username} update your profile</h3>
                <form onSubmit={this.handleFormSubmit}>
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
            </div>
        );
    }
}

export default withAuth(Profile);
