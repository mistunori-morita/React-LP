import React, { Component } from 'react';
import './resources/styles.css';
import './style.css';
import {Element} from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VuneNfo from './components/VuneNfo'
import Highlights from './components/Highlights'
import Prcing from './components/Pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Element name="featured">
       <Featured />
       </Element>
        <Element name="venuenfo">
       <VuneNfo />
       </Element>
        <Element name="highlihts">
          <Highlights />
       </Element>
        <Element name="pricing">
       <Prcing />
       </Element>
        <Element name="location">
        <Location/>
       </Element>
       <Footer/>
      </div>
    );
  }
}

export default App;
