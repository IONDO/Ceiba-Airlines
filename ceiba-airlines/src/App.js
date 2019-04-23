import React, { Component } from 'react';
import FrontPage from './pages/FrontPage';
import Search from './pages/Search';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={FrontPage}/>
          <Route path="/search" component={Search}/>
        </div>
      </Router>
    );
  }
}

export default App;
