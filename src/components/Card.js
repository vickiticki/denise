import React, { Component } from 'react'
import data from '../data.js'
import cx from 'classNames'

class Card extends Component {
  static propTypes = {
    isUp: React.PropTypes.bool,
    image: React.PropTypes.string,
    handleClick: React.PropTypes.func
  }

  render () {
    return <div className={cx('card', {'up': true, 'down': false})}>
      {data.cards.map((card, i) => {
        return <div key={i}>
          <img src={card.image} />
          <h5>{card.title}</h5>
          <p>{card.fortune}</p>
        </div>
      })}
    </div>
  }
}

export default Card
