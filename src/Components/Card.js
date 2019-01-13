import React, { Component } from 'react';
import './Card.css'


class Card extends Component{
  render() {
    let data = this.props.propdata
    return (
      <div id='main_card'>
        <p>
          {data['place']}
        </p>
        <p>
          {data['tag']}
        </p>
        <p>
          {data['distance']}
        </p>
      </div>
    );
  }
}

export default Card;
