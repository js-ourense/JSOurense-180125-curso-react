import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Post from './Post'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/:slug' component={Post} />
        </Switch>
      </main>
    )
  }
}

export default Main