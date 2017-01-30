import React, { Component } from 'react'
import cx from 'classNames'
import data from '../data.js'
import shuffle from 'shuffle-array'

class Card extends Component {
  constructor () {
    super()
    this.state = {
      cards: shuffle(data.cards)
    }
  }

  static propTypes = {
  //   image: React.PropTypes.string,
    handleClick: React.PropTypes.func
  //   description: React.PropTypes.string,
  //   fortune: React.PropTypes.string
  }

  render () {
    return <div className='cardItem'
      onClick={() => this.props.handleClick()}>
      {data.cards.map((card, i) => {
        return <div key={i}
          className={cx('card', {up: true, down: false}, 'fortune', {clicked: true})}>
          <img src={card.image} />
          <p>{card.fortune}</p>
        </div>
      })}
    </div>
  }
}

export default Card
