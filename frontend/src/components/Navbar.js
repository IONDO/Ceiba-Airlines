import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import '../Navbar.css';

class Navbar extends Component {
  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div id="navbar" className="navbar-container">
            <ul>
              <li>
                <Link to={"/"}>
                  <div className="icon">
                    <i class="fas fa-search-location"></i>
                  </div>
                  <div className="name">
                    <span>Search</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <div className="icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div className="name">
                    <span>Profile</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/mytrips">
                  <div className="icon">
                    <i class="fas fa-plane-departure"></i>
                  </div>
                  <div className="name">
                    <span>My trips</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <div className="icon">
                    <i class="fas fa-sign-out-alt"></i>
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
