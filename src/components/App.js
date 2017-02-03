import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Tarot from './Tarot'
import History from './History'
import Home from './Home'
import Trouble from './TroubleSynopsis'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Tarot' component={Tarot} />
        <Route path='/History' component={History} />
        <Route path='/Trouble' component={Trouble} />
      </Route>
    </Router>
  }
}

export default App
