import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import shortid from 'shortid'

const postStyle = {
  'width': '100%'
}

class Post extends Component {
  render() {
    const now = shortid.generate()
    return (
      <div className="w3-quarter">
        <img src={"https://loremflickr.com/g/447/675/kitties?rand="+now} alt="{this.props.slug}" style={postStyle} />
        <h3><Link to={`/${this.props.slug}`}>{this.props.title}</Link></h3>
      </div>
    );
  }
}

export default Post