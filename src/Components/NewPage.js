import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

class NewPage extends Component{
  render(){
    let data = [{'place': 'Main Library', 'tag': 'Worst place on campus',
                  'distance': '1 miles', 'id': 'main'},
                {'place': 'Lake Front', 'tag': 'Best place on campus',
                              'distance': '3 miles', 'id': 'lake'},
                {'place': 'The Rock', 'tag': 'More paint than rock at this point',
                              'distance': '5 miles', 'id': 'rock'},
                {'place': 'Spac', 'tag': 'Get the the Gym!',
                              'distance': '10 miles', 'id': 'spac'}];
    return(
      <div>
        <p>hello: {data.filter(data => this.props.match.params.id == data.id)[0].place}</p>
      </div>
    );
  }
}

export default NewPage
