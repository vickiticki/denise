import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Tarot from './Tarot'
import History from './History'
import About from './About'
import Trouble from './TroubleSynopsis'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Tarot} />
        <Route path='/About' component={About} />
        <Route path='/History' component={History} />
        <Route path='/Trouble' component={Trouble} />
      </Route>
    </Router>
  }
}

export default App
