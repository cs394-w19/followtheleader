import React, { Component } from 'react';
import styled from 'styled-components';


class Card extends Component{
  render() {
    let data = this.props.propdata
    return (
      <CardContainer>
        <p>
          {data['building']}
        </p>
        <p>
          {data['type']}
        </p>
        <p>
          {data['location']}
        </p>
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
  background-color: lightgrey;
  border-radius: 10px;
  margin: 10px 15px;
`;

export default Card;
