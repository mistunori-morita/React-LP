import React, { Component } from 'react';
import './resources/styles.css';
import './style.css';
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VuneNfo from './components/VuneNfo'
import Highlights from './components/Highlights'
import Prcing from './components/Pricing'
import Location from './components/location'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Featured />
       <VuneNfo />
       <Highlights />
       <Prcing />
       <Location/>
      </div>
    );
  }
}

export default App;
