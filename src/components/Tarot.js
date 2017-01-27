import React, { Component } from 'react'
import { Link } from 'react-router'

import Card from './Card'

class Tarot extends Component {

  render () {
    return <div className='main'>
      <ul className='navigation'>
        <li>
          <Link to='/'>Tarot</Link>
        </li>
        <li>
          <Link to='/History'>History</Link>
        </li>
      </ul>
      <h1 className='logo'>Tarot with Sybil</h1>

      <div className='board'>
        <Card />
      </div>
      <button>Cut the Deck</button>

    </div>
  }
}

export default Tarot
