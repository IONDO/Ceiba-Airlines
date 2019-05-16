import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div id="navbar" className="navbar-container">
            <ul>
              <li key={"search"}>
                <Link to={"/"}>
                  <div className="icon">
                    <i className="fas fa-search-location"></i>
                  </div>
                  <div className="name">
                    <span>Search</span>
                  </div>
                </Link>
              </li>
              <li key={"profile"}>
                <Link to="/profile">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="name">
                    <span>Profile</span>
                  </div>
                </Link>
              </li>
              <li key={"trips"}>
                <Link to="/mytrips">
                  <div className="icon">
                    <i className="fas fa-plane-departure"></i>
                  </div>
                  <div className="name">
                    <span>My trips</span>
                  </div>
                </Link>
              </li>
              <li key={"logout"}>
                <Link to="/login">
                  <div className="icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <div className="name">
                    <span>
                    <input type="button" value="Logout" onClick={logout}/>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
