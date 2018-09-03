import React, { Component } from 'react';
import './resources/styles.css';
import './style.css';
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VuneNfo from './components/VuneNfo'
import Highlights from './components/Highlights'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Featured />
       <VuneNfo />
       <Highlights />
      </div>
    );
  }
}

export default App;
