import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Buy some milk'
      },
      {
        id: 2,
        content: 'Play cricket'
      }
    ]
  }

  render () {
    return (
      <Router>
        <div className='App container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </Router >
    )
  }
}

export default App
