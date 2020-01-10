import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import { BrowserRouter,Route } from "react-router-dom";

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
      <BrowserRouter>
      <div className='App container'>
       
        <Navbar></Navbar>
        <Route path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>

      </div>
      </BrowserRouter>
    )
  }
}

export default App
