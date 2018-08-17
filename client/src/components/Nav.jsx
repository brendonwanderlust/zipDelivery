import React, { Component } from 'react';
import '../styles/Nav.css';
import beerMeLogo from '../img/beerpint.png';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="header-main">

                    <div className="logo">
                        <a className="NavBeerMeLogo" href=""><img className="AppNavImg" src={beerMeLogo} alt="BeerMe! logo"></img></a>
                        <span className="p-3 companyText">Zip Delivery</span>                    
                    </div>

                    <div className="navigation">
                        <ul className="">
                                <a href="/">Home</a>
                                <a href="/Results">Get A Quote!</a>
                        </ul>
                    </div>

                </div>                
            </nav>  
        )    
    }
}

export default Nav;