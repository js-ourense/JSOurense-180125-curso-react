import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <footer>
        <p>{this.props.year}</p>
      </footer>
    );
  }
}

export default Footer