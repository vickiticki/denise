import React, { Component } from 'react'
import { Link } from 'react-router'

class History extends Component {

  render () {
    return <div>
      <ul className='navigation'>
        <li>
          <Link to='/'>Tarot</Link>
        </li>
      </ul>
      <div className='main'>
        <h1>History of Tarot</h1>
        <p className='historyP'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='historyP'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <footer>
        <h6 className='copyright'>&copy; 2017 Liz Tiller </h6>
      </footer>
    </div>
  }
}

export default History
