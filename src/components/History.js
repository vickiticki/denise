import React, { Component } from 'react'

class History extends Component {

  render () {
    return <div className='history'>
      <h1>History of Tarot</h1>
      <p className='historyP'>
        Playing cards were introduced in Europe in the mid-fourteenth century and consisted of four suits.  Soon, a set of triumph cards were added and eventually became known as trump cards.  Only the extremely wealthy could own this beautiful, hand painted cards and the Visconti-Sforza owned several famous decks. With the invention of the printing press, the cards became more affordable and the Tarot de Marseilles became a popular design and established the motifs of the triumph cards.</p>

      <p className='historyP'>Beginning in the mid sixteenth century, tarot cards were sometimes used for divination.  Modern tarot decks consist of 78 cards.  The Major Arcana consist of 22 cards numbered from 0 to 21. These cards tell the story of a metaphysical journey beginning with card 0, The Fool—a young man with no experience of the world and ends with card 21—The World. The four suits are called the Minor Arcana and named wands, swords, cups, and pentacles. The suits have cards numbered from 1-10 and 4 court cards, the King, Queen, Knight, and Page/Jack.</p>

      <p className='historyP'>The Rider-Waite-Smith deck was first published in 1910 and the design is widely known.  Its popularity codified the symbolism of the Major Arcana. Recently, self-publishing has become popular and has encouraged artists to create a variety of different styles. Today's practitioners can find decks the more closely reflect their personal esthetics
        </p>

      <footer>
        <h6 className='copyright'>Tarot with Sybil &copy; 2017 Liz Tiller Based on <span>The Trouble with Dead People</span> by Denise Tiller</h6>
        <h6 className='copyright'>Card images based on the content of the<a href='http://www.scp-wiki.net/'> SCP Foundation [www.scp-wiki.net]</a>, under the <a href='https://creativecommons.org/licenses/by-sa/3.0/'>Creative Commons — Attribution-ShareAlike 3.0 Unported— CC BY-SA 3.0 [creativecommons.org]</a>.</h6>

      </footer>
    </div>
  }
}

export default History
