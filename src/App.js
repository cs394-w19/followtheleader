import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Components/Header.js'
import data from './location.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      load: 8,
      radius: 2.5,
      maxLoad: 0
    }
  }

  componentWillMount = () => {
    this.setState({ locations: data.location, maxLoad: data.location.filter(location => location.distance <= this.state.radius).length });
  };

  loadMore = () => {
    let numNewPosts = 8
    this.setState({ load: this.state.load + numNewPosts });
  };

  updateDistance = newRadius => {
    let newMaxLoad = this.state.locations.filter(location => location.distance <= newRadius).length;
    this.setState({ radius: newRadius, maxLoad: newMaxLoad, load: 8 });
  };

  render() {
    return (
      <Grid>
        <Header />
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
