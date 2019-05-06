import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

import FrontPage from "./pages/FrontPage"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Trips from "./pages/Trips"

import './App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/" component={FrontPage} />
            <PrivateRoute path="/search" component={Search} />
            <PrivateRoute path="/mytrips" component={Trips} />
            <PrivateRoute path="/profile" component={Profile} />
            
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
