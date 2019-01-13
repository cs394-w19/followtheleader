import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Components/Card.js'
import Settings from './Components/Settings.js'
import Header from './Components/Header.js'

class App extends Component {
  render() {
    let data = [{'place': 'Main Library', 'tag': 'Worst place on campus',
                  'distance': '.2 miles'},
                {'place': 'Lake Front', 'tag': 'Best place on campus',
                              'distance': '.4 miles'},
                {'place': 'The Rock', 'tag': 'More paint than rock at this point',
                              'distance': '.6 miles'},
                {'place': 'Spac', 'tag': 'Get the the Gym!',
                              'distance': '.8 miles'}];
    return (
      <Grid>
        <Header/>
        <Body>
          {data.map((data,index) => (
            <Card propdata={data}/>
          ))}
        </Body>
      </Grid>
    );
  }
}

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 75px 1fr;
`;

const Body = styled.div`
  grid-row: 2;
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
`;



export default App;
