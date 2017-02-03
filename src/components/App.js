import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Tarot from './Tarot'
import History from './History'
import Home from './Home'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Tarot} />
        <Route path='/Home' component={Home} />
        <Route path='/History' component={History} />
      </Route>
    </Router>
  }
}

export default App
