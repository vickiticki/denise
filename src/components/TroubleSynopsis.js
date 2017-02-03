import React, { Component } from 'react'
import { Link } from 'react-router'

class Trouble extends Component {

  render () {
    return <div className='main'>
      <h1>The Trouble with Dead People</h1>
      <div className='synopsis'>
        <p>As a child, all Circe Lindquist wanted was to be normal, but Death had other plans.  Circe, a descendent of Valkyries, Norse Gods, and Viking royalty, was born a Reaper, the Grim kind. She has The Light inside of her, and after she crossed her first spirit during Kindergarten, all hell broke loose. She learned words like schizophrenic and mental institution, and it left her traumatized.  The Shadow People told her the only way out was to kill herself and she hatched a plan, but goddess Death staged an intervention and she brought the goddesses Freja and Circe with her.  They offered her a painless passing and an eternity of riding flying ponies with the Valkyries, but she'd never see her family again.  Circe opted to live and she coped by pretending to be a superhero, keeping her psychic abilities a secret.</p>
        <p>Adult Circe still juggles her public and secret lives and it becomes more difficult when she finds the body of her best friend's estranged husband shot in the crotch and a dark entity tormenting the victim's spirit. To free the victim's spirit, Circe must identify the specter and use her analytic and psychic abilities to determine who wanted him dead and who could've summoned the entity. As she plunges deeper into her investigation, she asks questions she shouldn't have asked while avoiding the cop who is trying to uncover her secret.</p>
        <p>Circe's mother earns a living as Psychic Sybil.  Visit her in her reading room and have your fortune told.</p>
      </div>
      <button className='toGame' type='submit' name='Tarot Game'><Link to='/Tarot'>Pyschic Sybil</Link></button>

    </div>
  }
}

export default Trouble
