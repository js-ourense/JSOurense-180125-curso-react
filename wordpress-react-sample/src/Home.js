import React, { Component } from 'react'
import helpers from './Helpers'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
      totalPosts: 0,
      posts: []
    }
  }

  componentDidMount() {
    helpers.getPosts().then(
      (result) => {
        // console.log(result)
        this.setState({
          totalPages: result.headers['x-wp-totalpages'],
          totalPosts: result.headers['x-wp-total'],
          posts: result.data
        })
      }
    )
  }

  render() {

    const posts = this.state.posts
    const listPosts = posts.map((post) =>
      <li key={post.id.toString()}><Link to={`/${post.slug}`}>{post.title.rendered}</Link></li>
    )

    return (
      <div>
        <p>currentPage: {this.state.currentPage}</p>
        <p>totalPages: {this.state.totalPages}</p>
        <p>totalPosts: {this.state.totalPosts}</p>
        <ul>{listPosts}</ul>
      </div>
    )
  }
}

export default Home