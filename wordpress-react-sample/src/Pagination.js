import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pagination extends Component {

	render() {
		const numberOfPages = this.props.pages
		var pages = []
		for (var i = 1; i <= numberOfPages; i++) {
			pages.push(i);
		}
		const listPages = pages.map((page) =>
			<li key={page.toString()}>
				<Link to={`/page/${page}`} replace>{page}</Link>
			</li>
		)

		return (
			<div>
				<nav>
					<ul>{listPages}</ul>
				</nav>
			</div>
		)
	}
}

export default Pagination
