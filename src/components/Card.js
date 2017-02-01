import React, { Component } from 'react'
import cx from 'classNames'
// import data from '../data.js'
// import shuffle from 'shuffle-array'

class Card extends Component {

  state = {
    up: false,
    blurred: false
  }

  static propTypes = {
    image: React.PropTypes.string,
    fortune: React.PropTypes.string
  }

  handleClick () {
    if (this.state.up) {
      this.setState({
        blurred: true
      })
    } if (this.state.blurred) {
      this.setState({
        blurred: false
      })
    } else {
      this.setState({
        up: true
      })
    }
  }

  render () {
    return <div
      className={cx('cardItem', {
        down: !this.state.up,
        blur: this.state.blurred
      })}
      onClick={() => this.handleClick()}>
      <img src={this.props.image} />
      <p>{this.props.fortune}</p>
    </div>
  }
}

export default Card
