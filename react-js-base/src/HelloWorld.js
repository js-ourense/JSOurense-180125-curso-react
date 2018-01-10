import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	
  constructor(props) {
    super(props);
    this.state= { msg: 'Curso React.js 25-01-2018' };
  }
  
  render() {
    return (
      <div className="hello">
	    <h1>{this.state.msg }</h1>
	  </div>
    );
  }
}

export default HelloWorld;
