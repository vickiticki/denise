import React, { Component } from 'react'

class About extends Component {

  render () {
    return <div className='main'>
      <h1>About the Author</h1>
      <div className='top'>
        <div className='profile'>
          <div className='headShot'>
            <img src='https://raw.githubusercontent.com/lizthrilla/tarot/master/src/denisePic.jpg' />
          </div>
          <h3> Denise Tiller</h3>
          <ul className='followMe'>
            <li>
              <i className='fa fa-wordpress' aria-hidden='true' />
            </li>
            <li>
              <a href='http://twitter.com/Deftiller'>
                <i className='fa fa-twitter' aria-hidden='true' />
              </a>
            </li>
            <li>
              <a alt='instagram' href='http://instagram.com/Denominatrix'>
                <i className='fa fa-instagram' aria-hidden='true' />
              </a>
            </li>
            <li>
              <a href='https://www.goodreads.com/user/show/6550567-denise-tiller' alt='Good Reads'>
                <i className='fa fa-book' aria-hidden='true' />
              </a>
            </li>
          </ul>
        </div>
        <div className='about1'>
          <p>Denise's fascination with the bizarre stems from her earliest memory.  At 2 years old, her parents took her up the creaky steps into the attic of her grandmother's house one night, which was filled with women's heads.  Denise never shared this memory until she was an adult and realized Grandma wasn't a serial killer.   She owned a beauty shop and those were wig mannequins. </p>
          <p> While her grandmother wasn't a serial killer, Denise was 5 years old when the first spree killer, Charles Starkweather, killed his girlfriend's family in Denise's neighborhood.  She remembers her mother picking her older brother and sister up from the same high school that Carol Ann Fugate attended.  The entire family would wait with the shades down and doors locked until the pair was caught.  Her father was an alternate on the jury for Starkweather's trial, and he saved all the newspaper clippings, as well as the autographs of the judge and jury. </p>
          <p> Later, in 1985, Denise was living in Orange County, California when Richard Ramirez, the Night Stalker, was terrorizing Southern California.  Her husband traveled a lot, so a very pregnant Denise agreed to buy a gun.  Ramirez was caught the day they went to pick up the .38, but when two infamous killers hit that close to home, you can either live in fear or channel it into your writing.</p>
        </div>
      </div>

      <div className='about2'>
        <p> Denise is a graduate of the University of Nebraska and holds a black belt in Mathematics as a Fellow of the Society of Actuaries.  She co-authored the actuarial best-seller, Life, Health and Annuity Reinsurance, now in it's fourth edition.  In 1999, her novel, Calculated Risk won the greater dallas Writer's Association's Most Publishable Novel, the Millard Lampell Award, the Betty Heinrich's Award, and the CNW/FFWA Florida State Novel Chapter and Best in Fiction Division.  Timberwolf Press published Calculated Risk in 2000 and the audio version was a finalist for the 2001 Violet Crow Audio Book award given by the Texas Writers League.</p>
        <p>Through the years, Denise has remained active in Sisters in Crime and Mystery Writers of America.  She served as president of Partners in Crime, the Kansas City Chapter of Sisters in Crime, was President of the Guppies, the unpublished writers of Sisters in Crime, for three years, and was selected to be a Kansas City Voice for the Kansas City Star. In 2012 she earned a Master's of Information and Library Science from Emporia State University.</p>
        <p>Her guilty pleasure is watching paranormal television, probably because she grew up in a haunted house. Although skeptics feel the need to tell her it is her imagination, she's not prone to hysteria. A few years ago, she decided to follow this passion and write a paranormal mystery series.</p>
        <p>Denise currently resides in Florida with her husband, 2 dogs, 2 cats, and a rotating stable of visiting daughters.</p>
      </div>
    </div>
  }
}
export default About
