import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../reset.css'
import '../index.css';

class Begin extends Component {
  render() {
    return (
      <div>
        <div className='beginBody'>
          <Link to='/start'>
            <div className="beginBody" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Begin;