import React, { Component } from 'react';
import logo from './js_ou.jpeg';
import './App.css';
import HelloWorld from './HelloWorld.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} alt="" />
        <HelloWorld/>
      </div>
    );
  }
}

export default App;
