import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header.js';
import Body from './Component/Body.js';
import Footer from './Component/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <h1> it meets the criteria </h1>
        <Body />

        <Footer />

      </div>
    );
  }
}

export default App;
