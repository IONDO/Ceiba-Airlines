import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import 'bulma/css/bulma.css';
import '../App.css';
import '../FrontPage.css';
import flights from '../data/flights'

class FrontPage extends Component {

    state = {
        flights: flights,
        origin: [],
        destination: [],
        originText: '',
        destinationText: '',
    }

    onSearchOriginChange = (e) => {
        const value = e.target.value;
        console.log(value)
        let origin = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            origin = this.state.flights.sort().filter(flight => regex.test(flight.fly_from))
        }
        this.setState({ origin, originText:value });
    }

    onSearchDestinationChange = (e) => {
        const value = e.target.value;
        console.log(value)
        let destination = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            destination = this.state.flights.sort().filter(flight => regex.test(flight.fly_to))
        }
        this.setState({ destination, destinationText:value });
    }

    originSelected (value) {
        this.setState(() => ({
            originText: value,
            origin: [],

        }))
    }

    destinationSelected (value) {
        this.setState(() => ({
            destinationText: value,
            destination: [],

        }))
    }

    renderFlightOrigin () {
        const { origin } = this.state;
        if(origin.length === 0) {
            return null;
        }
        return (
            <ul>
                {origin.map((flight) => <li onClick={() => this.originSelected(flight.fly_from)}>{flight.fly_from}</li>)}
            </ul>
        )

    }

    renderFlightDestination () {
        const { destination } = this.state;
        if(destination.length === 0) {
            return null;
        }
        return (
            <ul>
                {destination.map((flight) => <li onClick={() => this.destinationSelected(flight.fly_to)}>{flight.fly_to}</li>)}
            </ul>
        )

    }

    handleClick = () => {
        this.props.history.push("/search");
    }


     
  render() {
    return (
        <div className="App">
            <div className="level">
                <div className="level-left">
                 <input type="checkbox" name="trip"/>Ida
                 <input type="checkbox" name="trip"/>Vuelta
                </div>
           </div>
           <div className="level">
               <div className="level-item has-text-centered">
                    <div>
                        <label className="highlited-text"><strong>Origen</strong></label>
                        <input className="input destiny-box" type="text" value={this.state.originText} onChange={this.onSearchOriginChange}
                        placeholder="Origen" 
                        />
                        {this.renderFlightOrigin()}
                    </div>
                    <div>
                        <label className="highlited-text"><strong>Destino</strong></label>
                        <input className="input destiny-box" type="text" value={this.state.destinationText} onChange={this.onSearchDestinationChange}
                        placeholder="Destino"/>
                        {this.renderFlightDestination()}
                    </div>
                    <br></br>

               </div>
               <div className="level-item has-text-centered">
                    <div>
                        <label className="highlited-text"><strong>Ida</strong></label>    
                        <input className="input destiny-box" type="date"/>
                    </div>
                    
                    <div>
                    <label className="highlited-text"><strong>Vuelta</strong></label>    
                    <input className="input destiny-box" type="date"/>
                    </div>
               </div>
               <div className="level-item has-text-centered">
                    
                    <div className="select is-rounded">
                        <select>
                          <option>Pasajeros</option>
                          <option>Adulto</option>
                          <option>Niño</option>
                          <option>Bebe</option>
                        </select>
                    </div>       
               </div>
               <div className="level-item has-text-centered">
                        <button className="button" onClick={this.handleClick}
                        type="button">Buscar</button>
               </div>
           </div>
        </div>
    );
  }
}

export default FrontPage;
