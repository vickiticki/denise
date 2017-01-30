import React, { Component } from 'react'
import cx from 'classNames'
import data from '../data.js'
import shuffle from 'shuffle-array'

class Card extends Component {
  constructor () {
    super()
    this.setState = {
      cards: shuffle(data.cards)

    }
  }

  static propTypes = {
    handleClick: React.PropTypes.func
  }

  render () {
    return <div className='cardItem'
      onClick={() => this.props.handleClick()}>
      {data.cards.map((card, i) => {
        return <div key={i}
          className={cx('card', {down: true})}>
          <img src={card.image} />
          <p>{card.fortune}</p>
        </div>
      })}
    </div>
  }
}

export default Card
