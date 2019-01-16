import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import data from '../location.json';

class NewPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }

  componentWillMount = () => {
    this.setState({ location: data.location.filter(location => location.id == this.props.match.params.id)[0]});
  };

  render(){
    return(
      <div>
        <p>{this.state.location.building}</p>

      </div>
    );
  }
}

export default NewPage
