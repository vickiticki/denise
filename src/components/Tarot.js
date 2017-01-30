import React, { Component } from 'react'

import Card from './Card'
// import shuffle from 'array-shuffle'
// import cx from 'classNames'

class Tarot extends Component {
  constructor () {
    super()
    this.state = {
      card: true
    }
  }

  flip () {
    this.state.true ? this.state.false : this.state.true
  }

  render () {
    return <div className='main'>
      <h1 className='logo'>Tarot with Sybil</h1>

      <div className='board'>
        <Card handleClick={() => this.flip} />
        {/* <Card />
        <Card /> */}
      </div>
      <button>Cut the Deck</button>
    </div>
  }
}

export default Tarot
