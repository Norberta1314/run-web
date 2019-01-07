import React, { Component } from 'react';
import GameFlash from '../../static/22.swf'
import '../../index.css'

class Game extends Component {
  render() {
    return (
      <div>
        <embed src={ GameFlash }
               className='gameFlash'/>
      </div>
    );
  }
}

export default Game;