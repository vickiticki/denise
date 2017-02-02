import React, { Component } from 'react'

import Card from './Card'
import shuffle from 'array-shuffle'
// import cx from 'classNames'
import data from '../data.js'

class Tarot extends Component {
  constructor () {
    super()
    this.state = {
      dealt: [],
      cards: shuffle(data.cards)
      // card: true
    }
  }

  deal () {
    // move a card from the top of cards to dealt
    this.setState({
      dealt: [
        ...this.state.dealt,
        ...this.state.cards.slice(0, 1)
      ],
      cards: this.state.cards.slice(1)
    })
  }

  reset () {
    this.setState({
      dealt: []
    })
  }

  render () {
    return <div className='main'>
      <h1 className='logo'>Tarot with Sybil</h1>

      {this.state.dealt.length === 0
        ? <div className='instructions'>
          <p> Come in, sit down and relax.
          </p>
          <p> Simply click the cards to see what they have to say.</p>
        </div>
      : <div className='board'>
        {this.state.dealt.map((card, i) => {
          return <Card key={i} image={card.image} fortune={card.fortune} />
        })}
      </div>}

      {this.state.dealt.length === 3 ? <button type='reset' name='Reset'
        onClick={() => this.reset()}>New Cards</button> : <button type='submit' name='Deal'
          onClick={() => this.deal()}>Deal</button>}
    </div>
  }
}

export default Tarot
