import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../image/logo_white.png'

class Header extends Component {
  render() {
    return (
      <Grid>
        <Title>
          <TitleText>Follow <br/> My <br/> Lead</TitleText>
        </Title>
        <Settings>
          <Hamburger>&#9776;</Hamburger>
        </Settings>
      </Grid>
    );
  }
}

const Grid = styled.div`
  grid-row: 1;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  vertical-align: middle;
  width: 100%;
  box-shadow: 0px 2px 1px rgba(0,0,0,0.2);
  background:#4E2A84;
  color:white;
  min-height: 75px;
`;

// const Logo = styled.img`
//
// `

const Title = styled.div`
  margin-left: 15px;
  font-size: 1em;
  grid-column: 1;
  font-weight:800;
`;

const TitleText = styled.p`
  margin: 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Settings = styled.div`
  grid-column: 2;
  width: 100%;
  position: relative;
`;

const Hamburger = styled.p`
  position: relative;
  font-size: 2em;
  margin: 0 15px;
  margin-top: -5px;
  width: 30px;
  float: right;
  top: 50%;
  transform: translateY(-50%);
`;

export default Header;
