import React, { Component } from 'react';

import DatePicker from "react-datepicker";

import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";
import 'bulma/css/bulma.css';
import '../App.css';
import '../FrontPage.css';

class FrontPage extends Component {

    state = {
        routes: [],
        originOptions: [],
        originText: '',
        departureDate: undefined,
        destinationOptions: [],
        destinationText: '',
        returnDate: undefined
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/`)
            .then(response => response.json())
            .then(({ routes }) => this.setState({ routes }))
            .catch(error => {
                console.log("error", error);
                this.setState({ status: "error" });
            });
    }

    onSearchOriginChange = (e) => {
        const originText = e.target.value;
        let originOptions = [];
        if (originText.length > 0) {
            const regex = new RegExp(`^${originText}`, 'i')
            originOptions = this.state.routes
                .filter(route => regex.test(route.from.name))
                .sort((left, right) => left.from.name.localeCompare(right.from.name))
        }
        this.setState({ originOptions, originText });
    }

    onSearchDestinationChange = (e) => {
        const destinationText = e.target.value;
        let destinationOptions = [];
        if(destinationText.length > 0) {
            const regex = new RegExp(`^${destinationText}`, 'i');
            destinationOptions = this.state.originOptions[0].to
                .filter(destination => regex.test(destination.name))
                .sort((left, right) => left.name.localeCompare(right.name))
        }
        this.setState({ destinationOptions, destinationText });
    }

    originSelected(route) {
        this.setState(() => ({
            originText: route.from.name,
            originOptions: [route],
        }))
    }

    destinationSelected(destination) {
        this.setState(() => ({
            destinationText: destination.name,
            destinationOptions: [destination],
        }))
    }

    renderFlightOrigin () {
        const { originText, originOptions } = this.state;
        if(originOptions.length === 0 ||
            ((originOptions.length === 1) && (originText === originOptions[0].from.name))) {
            return null;
        }
        return (
            <ul>
                {originOptions.map((origin) => 
                    <li onClick={() => this.originSelected(origin)} key={origin._id}>{origin.from.name}</li>)}
            </ul>
        )

    }

    renderFlightDestination () {
        const { destinationText, destinationOptions } = this.state;
        if(destinationOptions.length === 0 ||
            ((destinationOptions.length === 1) && (destinationText === destinationOptions[0].name))) {
            return null;
        }
        return (
            <ul>
                {destinationOptions.map((destination) => 
                    <li onClick={() => this.destinationSelected(destination) } key={destination._id}>{destination.name}</li>)}
            </ul>
        )

    }

    formatDate(date) {
        return moment(date).format('DD/MM/YYYY')
    }

    search = () => {
        this.props.history.push(`/search?from=${this.state.originOptions[0].from.code}&to=${this.state.destinationOptions[0].code}&depart=${this.formatDate(this.state.departureDate)}&return=${this.formatDate(this.state.returnDate)}`);
    }

    handleDepartureChange = (departureDate) => this.setState({ departureDate })

    handleReturnChange = (returnDate) => this.setState({ returnDate })
     
  render() {
    return (
        <div className="App">
            {/* <div className="level">
                <div className="level-left">
                 <input type="checkbox" name="trip"/>Ida
                 <input type="checkbox" name="trip"/>Vuelta
                </div>
            </div> */}
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
                        <input className="input destiny-box" 
                               type="text" 
                               value={this.state.destinationText} 
                               onChange={this.onSearchDestinationChange}
                               placeholder="Destino"
                               disabled={this.state.originOptions.length !== 1}/>
                        {this.renderFlightDestination()}
                    </div>
                    <br></br>

               </div>
               <div className="level-item has-text-centered">
                    <div>
                        <label className="highlited-text"><strong>Ida</strong></label>    
                        <DatePicker selected={this.state.departureDate}
                               onChange={this.handleDepartureChange}
                               minDate={new Date()}
                               dateFormat="dd/MM/yyyy"
                               placeholderText="DD/MM/YYYY"/>
                    </div>
                    
                    <div>
                        <label className="highlited-text"><strong>Vuelta</strong></label>    
                        <DatePicker selected={this.state.returnDate}
                               onChange={this.handleReturnChange}
                               minDate={new Date()}
                               dateFormat="dd/MM/yyyy"
                               placeholderText="DD/MM/YYYY"/>
                    </div>
               </div>
{/*                <div className="level-item has-text-centered">
                    
                    <div className="select is-rounded">
                        <select>
                          <option>Pasajeros</option>
                          <option>Adulto</option>
                          <option>Niño</option>
                          <option>Bebe</option>
                        </select>
                    </div>       
               </div> */}
               <div className="level-item has-text-centered">
                    <input className="button" 
                            onClick={this.search}
                            type="button"
                            value="Buscar"
                            disabled={
                                this.state.originOptions.length !== 1 ||
                                this.state.destinationOptions.length !== 1 ||
                                !this.state.departureDate ||
                                !this.state.returnDate
                            }/>
               </div>
           </div>
        </div>
    );
  }
}

export default FrontPage;
