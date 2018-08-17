import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Quoter from './components/Quoter';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Quoter" component={Quoter}/>
        </Switch>  
        <Footer/>
      </div>
    );
  }
}

export default App;
