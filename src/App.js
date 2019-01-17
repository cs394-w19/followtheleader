import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Components/Card.js'
import Header from './Components/Header.js'
import DistanceSlider from './Components/DistanceSlider'

class App extends Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Body>
          {this.props.children}
        </Body>
      </Grid>
    );
  }
}

const Grid = styled.div`
  min-height: 100vh;
  overflow:auto;
  width:100%;
`;

const Body = styled.div`
  grid-row: 2;
  width: 100%;
  height: 100%;
  background-color: #F7F7FF;
`;

export default App;
