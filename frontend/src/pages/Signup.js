import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = {
    fullname: "",
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { fullname, username, password } = this.state;
    this.props.signup({ fullname,username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { fullname,username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Fullname:</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={this.handleChange}
            placeholder="Testing"
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="testing@test.com"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="*********"
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
