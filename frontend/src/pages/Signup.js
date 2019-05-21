import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import '../css/main.css';
import '../css/util.css'

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {  username, password } = this.state;
    this.props.signup({ username, password });
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
			    <div className="login100-more" ></div>
			    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
				    <form className="login100-form validate-form" onSubmit={this.handleFormSubmit}>
					    <span className="login100-form-title p-b-59">
					    	Sign Up
					    </span>
					    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input className="input100"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="Email address..."
              />
					    	<span className="focus-input100"></span>
					    </div>
					    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="*************"
              />
					    	<span className="focus-input100"></span>
					    </div>
              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                Signup
                </button> 
              </div>
              <div className="w-full text-center p-t-55">
                    <span className="txt2">
                    Already have account?
                    </span>
                    <Link to={"/login"}> Login</Link>
              </div>
				    </form>
		      </div>
		    </div>
	    </div>
    );
  }
}

export default withAuth(Signup);
