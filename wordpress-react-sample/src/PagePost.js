import React, { Component } from 'react'
import helpers from './Helpers'

class PagePost extends Component {
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
      <div className="w3-container w3-padding-32 w3-center">
        <h3>{this.state.title}</h3>
        <p>{this.state.date}</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.body }} />
      </div>
    );
  }
}

export default PagePost