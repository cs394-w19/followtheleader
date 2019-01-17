import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Card from './Card.js';
import Settings from './Settings.js';
import Header from './Header.js';
import DistanceSlider from './DistanceSlider'
import data from '../location.json';

class HomePage extends Component {
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
    this.setState({ locations: data.location.sort((l1, l2) => l1.distance > l2.distance), maxLoad: data.location.filter(location => location.distance <= this.state.radius).length });
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
      <div>
        <div>
          <DistanceSlider handleDistanceChanged={ratio => this.updateDistance(ratio)} numberOfIncrements={10} maxDistance={5} />
        </div>
        {this.state.locations
            .filter(location => location.distance <= this.state.radius)
            .slice(0, this.state.load)
            .map((data,index) => (
              <Link to={`/location/${data.id}`} style={{textDecoration: 'none'}}>
                <Card propdata={data}/>
              </Link>
          ))}
          {this.state.load < this.state.maxLoad &&
            <LoadMore onClick={this.loadMore}> Load More </LoadMore>}
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
