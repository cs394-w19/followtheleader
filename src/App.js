import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Components/Card.js'
import Header from './Components/Header.js'
import DistanceSlider from './Components/DistanceSlider'
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

    this.updateDistance = this.updateDistance.bind(this);
  }

  componentWillMount = () => {
    this.setState({ locations: data.location, maxLoad: data.location.filter(location => location.distance <= this.state.radius).length });
  };

  loadMore = () => {
    let numNewPosts = 8
    this.setState({ load: this.state.load + numNewPosts });
  };

  updateDistance = ratio => {
    let maxRadius = 5;
    let newRadius = ratio/10*maxRadius;
    let newMaxLoad = this.state.locations.filter(location => location.distance <= newRadius).length;
    this.setState({ radius: newRadius, maxLoad: newMaxLoad, load: 8 });
  };

  render() {
    return (
      <Grid>
        <Header/>
        <Body>
          {this.state.locations
            .filter(location => location.distance <= this.state.radius)
            .slice(0, this.state.load)
            .map((data,index) => (
            <Card propdata={data}/>
          ))}
          {this.state.load < this.state.maxLoad &&
            <LoadMore onClick={this.loadMore}> Load More </LoadMore>}
          <DistanceSlider handleDistanceChanged={ratio => this.updateDistance(ratio)} />
          Radius: {this.state.radius} Miles
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
  padding-top:75px;
  background-color: #F7F7FF;
`;

const LoadMore = styled.div`
  margin: 10px 15px;
  text-align: center;
  max-width:100%;

  :hover {
    cursor: pointer;
  }
`


export default App;
