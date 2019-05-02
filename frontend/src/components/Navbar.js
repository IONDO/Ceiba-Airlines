import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>Welcome {user.username}</p>
            <Link to="/profile">Profile</Link>
            <Link to="/mytrips">My trips</Link>
            <Link to="logout">
              <input type="button" value="Logout" onClick={logout}/>
            </Link>
          </>
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
