import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import random from 'lodash/random'

const postStyle = {
  'width': '100%'
}

const images = [
  'cherries.jpg'
  , 'croissant.jpg'
  // , 'gondol.jpg'
  , 'popsicle.jpg'
  , 'salmon.jpg'
  , 'sandwich.jpg'
  , 'steak.jpg'
  , 'wine.jpg'
  // , 'workshop.jpg'
]

class Post extends Component {
  render() {
    const randomNumber = random(images.length -1)
    const image = images[randomNumber]
    return (
      <div className="w3-quarter">
        <img src={"img/"+image} alt="{this.props.slug}" style={postStyle} />
        <h3><Link to={`/${this.props.slug}`}>{this.props.title}</Link></h3>
      </div>
    );
  }
}

export default Post