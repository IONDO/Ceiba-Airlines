import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import { Link } from "react-router-dom";

import '../css/main.css';
import '../css/util.css'

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleFormSubmit}>
              <span className="login100-form-title p-b-53">
                Ceiba Airlines
              </span>
              <div className="wrap-input100 validate-input" data-validate = "Username is required">
                <input className="input100"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  placeholder="johndoe@test.com"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="*********"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                  Login
                </button> 
              </div>
              <div class="w-full text-center p-t-55">
                <span class="txt2">
                  Don't have an account yet?
                </span>
                <Link to="/signup"> Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
