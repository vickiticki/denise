import React, { Component } from 'react'

class Reset extends Component {

  reset () {
    this.setState({
      dealt: []
    })
  }

  render () {
    return <button typ='reset' name='reset'
      onClick={() => this.reset()}>Cut the Deck</button>
  }
}

export default Reset
