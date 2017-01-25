import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Tarot from './Tarot'
import History from './History'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route>
        {/* <Route component={Main} > */}
        <Route path='/' component={Tarot} />
        <Route path='/History' component={History} />
      </Route>
    </Router>
  }
}

export default App
