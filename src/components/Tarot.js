import React, { Component } from 'react'

import Card from './Card'
import shuffle from 'array-shuffle'
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
      <h1 className='logo'>T<span className='flick'>a</span>rot with Sybil</h1>

      {this.state.dealt.length === 0
        ? <div className='instructions'>
          <p> Welcome to my online reading room. I am Sybil, Seer and high Priestess of Seidr-the ancient Norse magick religion. I am a descendant of Freja, Goddess of beauty, love, war, and death, leader of the Valkyries. I was born with the gift of prophecy and magick. </p>
          <p>Instructions: before dealing the cards, relax and open your mind to your inner energy.  Carefully consider your question; as you look at your cards, study the image as well as the prophecy. What message does the image give you? Write down your question and result to contemplate later.</p>
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
