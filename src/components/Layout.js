import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div className='main'>
      <ul className='navigation'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Tarot'>Tarot</Link>
        </li>
        <li>
          <Link to='/History'>History</Link>
        </li>
        <li>
          <Link to='/Trouble'>The Trouble with Dead People</Link>
        </li>
      </ul>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}

export default Layout
