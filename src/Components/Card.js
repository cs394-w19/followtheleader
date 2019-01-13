import React, { Component } from 'react';
import styled from 'styled-components';


class Card extends Component{
  render() {
    let data = this.props.propdata
    return (
      <CardContainer>
        <p>
          {data['place']}
        </p>
        <p>
          {data['tag']}
        </p>
        <p>
          {data['distance']}
        </p>
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px 15px;
`;

export default Card;
