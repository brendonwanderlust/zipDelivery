import React, { Component } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import zipDeliveryLogo from '../img/logo-lala.png';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="header-main">

                    <div className="logo">
                        <a className="NavBeerMeLogo" href=""><img className="AppNavImg" src={zipDeliveryLogo} alt="ZipDelivery logo"></img></a>
                        <span className="p-3 companyText">ZipDelivery</span>                    
                    </div>

                    <div className="navigation">
                        <ul className="">
                                <Link to="/">Home</Link>
                                <Link to="/Quoter">Get A Quote!</Link>
                        </ul>
                    </div>

                </div>                
            </nav>  
        )    
    }
}

export default Nav;