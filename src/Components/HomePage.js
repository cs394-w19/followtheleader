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
      maxLoad: 0,
      filterOpen: false,
      filterType: new RegExp('.*')
    }
  }

  componentWillMount = () => {
    this.setState({
      locations: data.location.sort((l1, l2) => l1.distance > l2.distance),
      maxLoad: data.location.filter(location => location.distance <= this.state.radius).length,
      locationTypes: data.types
     });
  };

  loadMore = () => {
    let numNewPosts = 8
    this.setState({ load: this.state.load + numNewPosts });
  };

  updateDistance = newRadius => {
    let newMaxLoad = this.state.locations.filter(
      location => location.distance <= newRadius && this.state.filterType.test(location.type)
    ).length;
    this.setState({ radius: newRadius, maxLoad: newMaxLoad, load: 8 });
  };

  handleTypeChange = type => {
    let pattern;
    if (type == "All") {
      pattern = new RegExp('.*')
    } else {
      pattern = new RegExp(type)
    }
    let newMaxLoad = this.state.locations.filter(
      location => location.distance <= this.state.radius && pattern.test(location.type)
    ).length;
    this.setState({ filterType: pattern, maxLoad: newMaxLoad })
  }

  render() {
    return (
      <div>
        <FilterWindow open={this.state.filtersOpen}>
          <FilterText onClick={() => this.setState({ filtersOpen: !this.state.filtersOpen})}>
            Filters {this.state.filtersOpen ? '\u25B2' : '\u25BC'}
          </FilterText>
          Radius:
          <DistanceSlider handleDistanceChanged={this.updateDistance} numberOfIncrements={10} maxDistance={MAX_DISTANCE} />
          Location Type:
          <select onChange={option => this.handleTypeChange(option.target.value)}>
            <option value="All"> All </option>
            {this.state.locationTypes.map(type => (
              <option value={type}>{type}</option>
            ))}
          </select>

        </FilterWindow>
        <h2>Within {this.state.radius} mile(s):</h2>
        {this.state.locations
            .filter(location => location.distance <= this.state.radius && this.state.filterType.test(location.type))
            .slice(0, this.state.load)
            .map((data,index) => (
              <Link to={`/location/${data.id}`} style={{textDecoration: 'none'}} key={index}>
                <Card propdata={data}/>
              </Link>
          ))}
          {this.state.load < this.state.maxLoad &&
            <LoadMore onClick={this.loadMore}> Load More </LoadMore>}
          <div style={{ height: '4em' }} /> {/* Quick fix so slider doesn't block */}
      </div>
    );
  }
};

const FilterWindow = styled.div`
  height: ${props => props.open ? 'auto' : '16px'};
  overflow: hidden;
`

const FilterText = styled.p`
  text-align: center;
  margin-top: 0;

  :hover {
    cursor: pointer;
  }
`

const LoadMore = styled.div`
  margin: 10px 15px;
  text-align: center;
  max-width:100%;

  :hover {
    cursor: pointer;
  }
`

export default HomePage;
