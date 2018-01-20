import React, { Component } from 'react'
import helpers from './Helpers'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      body: ''
    }
  }

  componentDidMount() {
    helpers.getPost(this.props.match.params.slug).then(
      (result) => {
        let post = result.data[0]
        // console.log(post)
        if (post && post.id) {
          this.setState({
            title: post.title.rendered,
            date: post.date,
            body: post.excerpt.rendered
          })
        }
      }
    )
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.date}</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.body }} />
      </div>
    );
  }
}

export default Post