import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Components/Header.js'
import { withFirebase } from './Components/Firebase';

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
    this.props.firebase.locations().on('value', snapshot => {
      var data = snapshot.val();
      this.setState({
        locations: data.sort((l1, l2) => l1.distance > l2.distance),
        maxLoad: data.filter(location => location.distance <= this.state.radius).length
      });
     });
    this.props.firebase.types().on('value', snapshot => {
      this.setState({
       locationTypes: snapshot.val()
      });
    });
  };

  componentWillUnmount = () => {
    this.props.firebase.locations().off();
    this.props.firebase.types().off();
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

App = withFirebase(App);


export default App;
