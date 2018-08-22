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

    setQuoteHasRun() {
        this.setState({
            quoteHasRun: false
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

        Axios.get('/api/search?q=' + stringifiedReqObject)
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
                <div className="formContainer">
                    <form id="quoteForm" className="quoteForm" onSubmit={this.handleSubmit.bind(this)}>
                        <h1>Location Information:</h1>
                        <input className="textbox" name="origin" type="text" placeholder="Origin Location"></input>
                        <input className="textbox" name="destination" type="text" placeholder="Destination Location"></input>
                        <h1>Item Information:</h1>
                        <input className="textbox" name="dimensions" type="text" placeholder="Dimensions (L x W x H)"></input>
                        <input className="textbox" name="weight" type="number" placeholder="Weight"></input><br></br>
                        <input className="submitAcceptBtn" type="submit" value="Get Your Quote!"></input>
                    </form>
                    {this.state.quoteHasRun ? (
                        <QuoteAccept setQuoteHasRun={this.setQuoteHasRun.bind(this)} results={this.state.results} />
                    ) : (
                            <div className="noQuoteEmptyDiv"></div>
                        )}
                </div>
                    
                

            </div>
        );
    }
}


export default Quoter;