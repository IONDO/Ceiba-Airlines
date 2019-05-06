import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
class Trips extends Component {
  render() {
    return (
      <div>
        <h1>Find below the list of flights saved</h1>
      </div>
    );
  }
}

export default withAuth(Trips);