import React, { Component } from 'react'
import { Link } from 'react-router'

import Card from './Card'

class Tarot extends Component {

  render () {
    return <div className='styles'>
      <ul className='navigation'>
        <li>
          <Link to='/'>Tarot</Link>
        </li>
        <li>
          <Link to='/History'>History</Link>
        </li>
      </ul>
      <div className='main'>
        <div className='logo'>
          <h1>Tarot by Sybil</h1>
        </div>
        <div className='board'>
          <Card />
        </div>

        <button>Cut the Deck</button>
      </div>
    </div>
  }
}

export default Tarot
