import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import DistanceSlider from './DistanceSlider'
import data from '../location.json';

const MAX_DISTANCE = 5

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      load: 8,
      radius: MAX_DISTANCE / 2,
      maxLoad: 0
    }
  }

  componentWillMount = () => {
    this.setState({ locations: data.location.sort((l1, l2) => l1.distance > l2.distance), maxLoad: data.location.filter(location => location.distance <= this.state.radius).length });
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
      <div>
        <h2>Within {this.state.radius} mile(s):</h2>
        {this.state.locations
            .filter(location => location.distance <= this.state.radius)
            .slice(0, this.state.load)
            .map((data,index) => (
              <Link to={`/location/${data.id}`} style={{textDecoration: 'none'}} key={index}>
                <Card propdata={data}/>
              </Link>
          ))}
          {this.state.load < this.state.maxLoad &&
            <LoadMore onClick={this.loadMore}> Load More </LoadMore>}
          <div style={{ height: '4em' }} /> {/* Quick fix so slider doesn't block */}
          <DistanceSlider handleDistanceChanged={this.updateDistance} numberOfIncrements={10} maxDistance={MAX_DISTANCE} />
      </div>
    );
  }
};

const LoadMore = styled.div`
  margin: 10px 15px;
  text-align: center;
  max-width:100%;

  :hover {
    cursor: pointer;
  }
`

export default HomePage;
