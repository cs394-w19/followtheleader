import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card.js'
import Settings from './Settings.js'
import Header from './Header.js'
import DistanceSlider from './DistanceSlider'

class HomePage extends Component {
  render() {
    let data = [{'place': 'Main Library', 'tag': 'Worst place on campus',
                  'distance': '1 miles', 'id': 'main'},
                {'place': 'Lake Front', 'tag': 'Best place on campus',
                              'distance': '3 miles', 'id': 'lake'},
                {'place': 'The Rock', 'tag': 'More paint than rock at this point',
                              'distance': '5 miles', 'id': 'rock'},
                {'place': 'Spac', 'tag': 'Get the the Gym!',
                              'distance': '10 miles', 'id': 'spac'}];
    return (
      <div>
        {data.map((data,index) => (
          <Link to={`/location/${data.id}`} style={{textDecoration: 'none'}}>
            <Card propdata={data}/>
          </Link>
        ))}
        <DistanceSlider handleDistanceChanged={v => console.log(v)} />
      </div>
    );
  }
};

export default HomePage;
