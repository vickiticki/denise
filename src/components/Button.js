import React, { Component } from 'react'

class Button extends Component {

  render () {
    return <button onClick={() => this.deal()}>Deal</button>
  }
}

export default Button
