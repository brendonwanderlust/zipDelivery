import React, { Component } from 'react';
import '../styles/Footer.css';
import PoweredByGoogle from "../img/powered_by_google.png";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <footer>
                    {/* This is the Footer */}
                    <img src={PoweredByGoogle} alt="Powered By Google"/>
                </footer>
            </div>    
        )    
    }
}

export default Footer;