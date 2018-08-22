import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/QuoteAccept.css';


class QuoteAccept extends Component {

    state = {
        message: '',
    }

    setMessage(message) {
        this.setState({
            message
        })
    }

    resetForm() {
        document.getElementById('formContainer').reset();
        document.getElementById('quoteForm').reset();
        this.props.setQuoteHasRun();
        // this.props.setQuoteHasRun();
    }

    QuoteAcceptHandleSubmit(e) {
        e.preventDefault();
        console.log("So far");
        console.log("So good");

        const fName = e.target.FirstName.value;
        const lName = e.target.LastName.value;
        const eMail = e.target.EmailAddress.value;
        const message = "Your quote is " + document.getElementById('Quote').innerHTML;



        Axios.post('/email/email', {
            firstName: fName,
            lastName: lName,
            email: eMail,
            message: message
        })
            .then((response) => {
                console.log(response);
                console.log(response.request.statusText);
                if (response.request.statusText === 'OK') {
                    this.setState({
                        message: response.data.message
                    })
                    console.log(this.state.message)
                    alert("Message Sent.");
                    this.resetForm();
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
    }



    render() {
        console.log(this.props.results);
        return (
            <div className="QuoteAccept">
                {/* Create a new form that adds First Name, Last Name,
                Email Address, and submit. On click of the submit button
                an email is sent with your delivery details. */}

                <div className="formContainer-Quoter">
                    <h1 className="QuoteHeader">Consider it Delivered! Your Total: <span id="Quote"><strong>${this.props.results}</strong></span></h1>
                    <p>Want your quote emailed to you? Submit the form below.</p>
                    <form id="formContainer" onSubmit={this.QuoteAcceptHandleSubmit.bind(this)} method="POST"><br />
                        <input className="textbox" name="FirstName" type="text" placeholder="First Name"></input>
                        <input className="textbox" name="LastName" type="text" placeholder="Last Name"></input><br></br>
                        <input className="textbox" name="EmailAddress" type="email" placeholder="Email Address"></input><br></br>
                        <input className="submitAcceptBtn" type="submit" value="Send Me My Quote!"></input>
                    </form>
                    {this.state.message ? (
                        <div className="modalDiv"><span id="ResponseMessage">{this.state.message}</span></div>
                    ) : (
                            <div className="noQuoteEmptyDiv"></div>
                        )}
                </div>



            </div>
        );
    }
}


export default QuoteAccept;