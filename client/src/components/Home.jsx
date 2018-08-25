import React, { Component } from 'react';
import '../styles/Home.css';
import BannerImageOne from "../img/Untitled-3.jpg";
import BannerImageTwo from "../img/delivery.jpg";
import SaveMoney from "../img/SaveMoney.png";
import SaveTime from "../img/SaveTime.png";
import RemoveHeadaches from "../img/SaveTrouble.png";
import HowItWorks from "../img/how-it-works.png";


class Home extends Component {

    render() {
        return (
            <div className="Home">
                {/* This is the landing page */}
                <div className="banner">
                    <img className="imageOne" src={BannerImageOne} alt="Large Banner" />
                    <img className="imageTwo" src={BannerImageTwo} alt="Medium Banner" />
                    <h1>Furniture Delivered Locally in 55 Minutes!</h1>
                    <h2>Request and Track Deliveries from a Smartphone or Desktop.</h2>
                    <button className="RequestQuoteBtn">Request a Quote</button>
                </div>

                <div className="benefitSection">
                    <div class="standAloneTitleSection">
                        <h1>Delivery made easy</h1>
                        <h3>ZipDelivery connects you with the best delivery drivers nearby.<br></br>
                            Deliver faster with less hassle.</h3>
                    </div>
                    <div >
                        <div className="threeBenefitWrapper">
                            <div class="custom-three-col">
                                <img src={SaveTime} alt="Save Time" width="120" height="120" sizes="(max-width: 120px) 100vw, 120px"></img>
                                <h3>Save Time</h3>
                                <p><strong>With average delivery times less than 55 minutes</strong>, delivery has never been faster.</p>
                            </div>
                            <div class="custom-three-col">
                                <img src={SaveMoney} alt="Save Money" sizes="(max-width: 120px) 100vw, 120px"></img>
                                <h3>Save Money</h3>
                                <p><strong>Save up to 70%</strong> when compared with owning and managing your own fleet.</p>
                            </div>

                            <div class="custom-three-col">
                                <img src={RemoveHeadaches} alt="Save Trouble" sizes="(max-width: 120px) 100vw, 120px"></img>
                                <h3>Remove Headaches</h3>
                                <p>Never lose a package again - ZipDelivery lets you <strong>track your delivery status real-time!</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="howItWorks">
                    <div className="howItWorksImgContainer">
                        <img src={HowItWorks} alt="How it works"></img>
                    </div>
                    
                </div>

                <div className="forBusinesses">

                </div>

                <div className="driveForUs">

                </div>


            </div>
        );
    }
}


export default Home;