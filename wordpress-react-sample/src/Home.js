import React, { Component } from 'react'
import helpers from './Helpers'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
      totalPosts: 0,
      posts: []
    }
    // console.log(this.state)
  }

  getThePosts(page) {
    helpers.getPosts(page).then(
      (result) => {
        // console.log(result.data)
        if (result && result.data) {
          this.setState({
            currentPage: page,
            totalPages: result.headers['x-wp-totalpages'],
            totalPosts: result.headers['x-wp-total'],
            posts: result.data
          })
        }
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    let page = nextProps.match.params.number || 1
    let currentPage = this.state.currentPage
    if (page.toString() !== currentPage.toString()) {
      this.getThePosts(page)
    }
  }

  componentDidMount() {
    let page = this.props.match.params.number || 1
    // console.log(page)
    this.getThePosts(page)
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
        <Pagination pages={`${this.state.totalPages}`} />
      </div>
    )
  }
}

export default Home