import React, { Component } from 'react';
import './Card.css'


class Card extends Component{
  render() {
    let data = {'place': 'Sears Tower', 'tag': 'Tallest building in Chicago',
                  'distance': '.4 miles'};
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
