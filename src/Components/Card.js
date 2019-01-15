import React, { Component, Fragment } from 'react';
import styled from 'styled-components';


class Card extends Component{
  render() {
    let data = this.props.propdata
    return (
        <CardContainer>
        <div style={{display: "inline-block",float:"left"}}>
          <p>
            {data['place']}
            <br/>
            {data['tag']}
            <br/>
            {data['distance']}
            <br/>
          </p>
        </div>
          <RightArrow> &#187;</RightArrow>
        </CardContainer>
    );
  }
}



const CardContainer = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px 15px;
  float: left;
  width: 90%;
`;

const RightArrow = styled.div`
  float: right;
  display: inline-block;
  z-index: 1;
`;

export default Card;
