import React, { Component } from 'react';
import Axios from 'axios';
import QuoteAccept from './QuoteAccept';
import '../styles/Quoter.css';
const querystring = require("querystring");


class Quoter extends Component {

    state = {
        results: {},
        quoteHasRun: false
    }

    setResults(results) {
        this.setState({
            results
        })
    }

    handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.origin.value);
    console.log(e.target.destination.value);
    
    let reqObject = {
        blank: "blank",
        originLocation: e.target.origin.value,
        destinationLocation: e.target.destination.value,
        itemDimensions: e.target.dimensions.value,
        itemWeight: e.target.weight.value

    }

    let stringifiedReqObject = querystring.stringify(reqObject);

    console.log(stringifiedReqObject);

    Axios.get('/api/search?q='+stringifiedReqObject)
        .then((response) => {
            this.setState({
                results: response.data,
                quoteHasRun: true
            })
            console.log(response.data);
        })
        
    }

    render() {
        return (
            <div className="Quoter">
                {/* Quoter is a form with fields for origin 
                location, destination location, item dimensions, 
                item weight, and a "Get Quote" Button. After the 
                get quote button is clicked a response from 
                the backend with the quote value is provided. 
                Then an accept quote button appears which 
                triggers the display of the <AcceptQuote/> 
                Component.*/}

                <form className="locationSearchBar" onSubmit={this.handleSubmit.bind(this)}> 
                    <input className="textbox" name="origin" type="text" placeholder="Origin Location"></input>
                    <input className="textbox" name="destination" type="text" placeholder="Destination Location"></input>
                    <input className="textbox" name="dimensions" type="text" placeholder="Dimensions (L x W x H)"></input>
                    <input className="textbox" name="weight" type="number" placeholder="Weight"></input>
                    <input className="searchBarButton" type="submit" value="Submit"></input>
                </form>
                {this.state.quoteHasRun ? (
                    <QuoteAccept results={this.state.results} setResults={this.setResults.bind(this)}/>
                ) : (
                    <div className="noQuoteEmptyDiv"></div>
                )}
            </div>
        );
    }
}


export default Quoter;